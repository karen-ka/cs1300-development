import { Checkbox, Radio, Switch } from 'antd';
import React from 'react';
import pkmn from '../data.js'


const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

const orig = [...pkmn];
class MyRadio extends React.Component {

    state = {
        value: "pokedex_number",
        asc: true,
        checked1: false,
        checked2: false,
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
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });

        if(e.target.value === "name") {
            if(this.state.asc){
                var newData = this.props.data.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]));
            }else{
                var newData = this.props.data.sort((a, b) => b[e.target.value].localeCompare(a[e.target.value]));
            }
            this.props.setState({data: newData});
            this.setState({data: newData});
        } else if(e.target.value === "pokedex_number"){
            if(this.state.asc){
                var newData = this.props.data.sort((a, b) => a["pokedex_number"] - b["pokedex_number"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["pokedex_number"] - a["pokedex_number"]);
            }
            this.props.setState({data: newData});
            this.setState({data: newData});
        }else if(e.target.value === "hp"){
            if(this.state.asc){
                var newData = this.props.data.sort((a, b) => a["hp"] - b["hp"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["hp"] - a["hp"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});
        }else if(e.target.value === "attack"){
            if(this.state.asc){
                var newData = this.props.data.sort((a, b) => a["attack"] - b["attack"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["attack"] - a["attack"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});    
        }else if(e.target.value === "defense"){
            if(this.state.asc){
                var newData = this.props.data.sort((a, b) => a["defense"] - b["defense"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["defense"] - a["defense"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});    
        }
      };

      onSwitchChange = e => {
          this.setState({asc: e});
          console.log(this.state.asc, this.state.value, e)
          if(this.state.value === "name") {
            if(e){
                var newData = this.props.data.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]));
            }else{
                var newData = this.props.data.sort((a, b) => b[e.target.value].localeCompare(a[e.target.value]));
            }
            this.props.setState({data: newData});
            this.setState({data: newData});
        } else if(this.state.value === "pokedex_number"){
            if(e){
                var newData = this.props.data.sort((a, b) => a["pokedex_number"] - b["pokedex_number"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["pokedex_number"] - a["pokedex_number"]);
            }
            this.props.setState({data: newData});
            this.setState({data: newData});
        }else if(this.state.value === "hp"){
            if(e){
                var newData = this.props.data.sort((a, b) => a["hp"] - b["hp"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["hp"] - a["hp"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});
        }else if(this.state.value === "attack"){
            if(e){
                var newData = this.props.data.sort((a, b) => a["attack"] - b["attack"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["attack"] - a["attack"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});    
        }else if(this.state.value === "defense"){
            if(e){
                var newData = this.props.data.sort((a, b) => a["defense"] - b["defense"]);
            }else{
                var newData = this.props.data.sort((a, b) => b["defense"] - a["defense"]);
            }  
            this.props.setState({data: newData});
            this.setState({data: newData});    
        }
      };

      onBoxChange = e => {
        console.log(e, this.state)
        var newdata = [...this.state.data];
        if(this.state.checked1 && this.state.checked2) {
            if(e.target.value == "is_legendary") {
                var test = newdata.filter(li => li["type2"] != "");
                this.props.setState({data: test});
                this.setState({checked1: false, checked2: true});
            } else {
                var test = newdata.filter(li => li["is_legendary"] === 1);
                this.props.setState({data: test});
                this.setState({checked1: true, checked2: false});
            }
        }
        else if(e.target.value == "is_legendary") {
            if(e.target.checked == true) {
            var test = this.props.data.filter(li => li["is_legendary"] === 1);
            this.props.setState({data: test});
            this.setState({checked1: true});
            } else {
                var newdata = [...orig];
                this.props.setState({data: newdata});
                this.setState({checked1: false});
            }

        } else if (e.target.value=='dual_type') {
            if(e.target.checked == true) {
                var test = this.props.data.filter(li => li["type2"] != "");
                console.log('dualtypefilter', test)
                this.props.setState({data: test});
                this.setState({checked2: true});
            } else {
                var newdata = [...orig];
                console.log('newdata', newdata)
                this.props.setState({data: newdata});   
                this.setState({checked2: false});            
            }

        }
      }
    
    render() {
        return (
            <div>
            <p>FILTER BY</p>
            <Checkbox onChange={this.onBoxChange} value="dual_type">Dual Type</Checkbox>
            <br></br>
            <Checkbox onChange={this.onBoxChange} value="is_legendary">Is Legendary</Checkbox>
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

export default MyRadio;