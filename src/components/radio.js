import { Radio } from 'antd';
import React from 'react';






class MyRadio extends React.Component {

    state = {
        value: "pokedex_number",
    };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });

        console.log('hi', this.state.value, e.target.value);
        if(e.target.value === "name") {
            this.props.setState({data: this.props.data.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]))});
        } else {
            console.log('here')
            this.props.setState({data: this.props.data.sort((a, b) => a["pokedex_number"] - b["pokedex_number"])});
            // this.props.setState({data: this.props.data.sort((a, b) => b["name"].localeCompare(a["name"]))});
        }
      };

    render() {
        return (
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={"pokedex_number"}>Number</Radio>
            <Radio value={"name"}>Name</Radio>
          </Radio.Group>
        );
      }
}

export default MyRadio;