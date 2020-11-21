import { Checkbox, Radio, Switch } from 'antd';
import React from 'react';
import pkmn from '../data.js'


const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
const orig = [...pkmn];

/*
* Class containing filtering and sorting elements.
*/
class SelectorGroup extends React.Component {

    state = {
      value: "pokedex_number",
      asc: true,
      legendaryChecked: false,
      dualChecked: false,
      data: [...pkmn],
    };

    handleReset = () => {
      this.setState({
          value: "pokedex_number",
          checked: false,
          asc: true,
        });     
    }
    
    onChange = e => {
      this.setState({
        value: e.target.value,
      });
      var newData = this.sort(e.target.value, this.state.asc, this.props.data);
      this.props.setState({data: newData});
      this.setState({data: newData});
    };

    onSwitchChange = e => {
      this.setState({asc: e});
      var newData = this.sort(this.state.value, e, this.props.data);
      this.props.setState({data: newData});
      this.setState({data: newData});
    };

    sort(type, asc, data) {
      if(type === "name") {
        if(asc){
            var newData = data.sort((a, b) => a[type].localeCompare(b[type]));
        }else{
            var newData = data.sort((a, b) => b[type].localeCompare(a[type]));
        }
      } else {
        if(asc){
            var newData = data.sort((a, b) => a[type] - b[type]);
        }else{
            var newData = data.sort((a, b) => b[type] - a[type]);
        }  
      }
      return newData;
    }

    onBoxChange = e => {
      var originalData = [...orig]
      if(this.state.legendaryChecked && this.state.dualChecked) {
          if(e.target.value == "is_legendary") {
              var filteredData = originalData.filter(li => li["type2"] != "");
              var sorted = this.sort(this.state.value, this.state.asc, filteredData);
              this.setState({legendaryChecked: false, dualChecked: true});
          } else {
              var filteredData = originalData.filter(li => li["is_legendary"] === 1);
              var sorted = this.sort(this.state.value, this.state.asc, filteredData);
              this.setState({legendaryChecked: true, dualChecked: false});
          }
          this.props.setState({data: sorted});
      }
      else if(e.target.value == "is_legendary") {
          if(e.target.checked == true) {
              var filteredData = this.props.data.filter(li => li["is_legendary"] === 1);
              this.props.setState({data: filteredData});
              this.setState({legendaryChecked: true});
          } else {
              var sorted = this.sort(this.state.value, this.state.asc, originalData);
              this.props.setState({data: sorted});
              this.setState({legendaryChecked: false});
          }

      } else if (e.target.value=='dual_type') {
          if(e.target.checked == true) {
              var filteredData = this.props.data.filter(li => li["type2"] != "");
              this.props.setState({data: filteredData});
              this.setState({dualChecked: true});
          } else {
              var sorted = this.sort(this.state.value, this.state.asc, originalData);
              this.props.setState({data: sorted});
              this.setState({dualChecked: false});            
          }

      }
    }
    
    render() {
        return (
            <div>
              <p>FILTER BY</p>
              <Checkbox onChange={this.onBoxChange} value="dual_type" checked={this.state.dualChecked}>Dual Type</Checkbox>
              <br></br>
              <Checkbox onChange={this.onBoxChange} value="is_legendary" checked={this.state.legendaryChecked}>Is Legendary</Checkbox>
              <br></br>
              <p></p>
              <p></p>
              <br></br>
              <p>SORT BY</p>
              <Switch checkedChildren="ASC" unCheckedChildren="DESC" checked={this.state.asc} onClick={this.onSwitchChange}/>
              <p></p>
              <Radio.Group onChange={this.onChange} value={this.state.value} style={{alignItems: 'left'}}>
                <Radio value={"pokedex_number"} style={radioStyle}>Pokedex Number</Radio>
                <Radio value={"name"} style={radioStyle}>Pokemon Name</Radio>
                <Radio value={"hp"} style={radioStyle}>Health Points (HP)</Radio>
                <Radio value={"attack"} style={radioStyle}>Attack Value (ATT)</Radio>
                <Radio value={"defense"} style={radioStyle}>Defense Value (DEF)</Radio>
              </Radio.Group>
          </div>
        );
      }
}

export default SelectorGroup;