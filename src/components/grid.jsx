import { Alert, Button, Card, Col, Select, Row, message } from 'antd';
import MyCard from './card.jsx';
import React from 'react';
import TagSelect from './tagselect.js';
import MyRadio from './radio.js';
import { List } from 'antd/lib/form/Form';
import TeamDrawer from './drawer.jsx';

const gridStyle = {
    width: '75%',
    align: 'center',
  };

class MyGrid extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {date: new Date()};
        this.state = {
            data: this.props.data,
            team: new Array(),
            showSuccess: false,
        };

        this.drawerElement = React.createRef();
        // this.data = this.yourFunction.bind(this)
      }

    handleMessageClick = () => {
      this.drawerElement.current.showDrawer();
    }

    addTeam(mon) {
      if(this.state.team.length >= 6) {
        message.error({
          content: <div>{`Unable to add ${mon.name}. Your team is already full.`}<Button type="link" onClick={this.handleMessageClick}>Manage Team</Button></div> ,
          duration: 5,
        });
      } else {
        var newTeam = this.state.team;
        newTeam.push(mon);
        // console.log("heyahe", mon, newTeam);
        this.setState({team: newTeam, showSuccess:true});
        // console.log('state', this.state);
        // this.state.team.concat(mon)
        message.success({
          content: <div>{`Added ${mon.name} to the team.`} <Button type="link" onClick={this.handleMessageClick}>View Team</Button></div>,
          duration: 4,
          // style: {
          //   width: '100vh',
          // },
        });
      }
    }

    removeTeam(mon) {
      var newTeam = this.state.team;
      console.log(newTeam[0].number== mon.number)

      newTeam = newTeam.filter(li => li.number != mon.number)
      console.log("heyahe", mon, newTeam);
      this.setState({team: newTeam});
      // console.log('state', this.state);
      // this.state.team.concat(mon)
    }

    render() {
        // console.log('yoyo')
        // console.log(this.state.data);
        console.log(this.state.showSuccess)
        return (
        <div className="site-card-wrapper" style={gridStyle}>
        <Row>
            <Col flex="auto">
            <TeamDrawer ref={this.drawerElement}
            team={this.state.team}
            removeTeam = {mon => this.removeTeam(mon)}
            ></TeamDrawer>
            </Col>
        </Row>
        <Row>
            <Col span={3}>
            <TagSelect></TagSelect>
            </Col>
            <Col span={10}>
            <MyRadio data={this.state.data} setState={state => this.setState(state)}></MyRadio>
            </Col>
        </Row>

        <Row gutter={[16, 24]} span={2}>
          {/* <Col span={8}> */}
            {this.props.data.map(li => (
                <Col span={6}>
                <MyCard
                    name={li.name}
                    number={li.pokedex_number}
                    type={li.types}
                    hp={li.hp}
                    attack={li.attack}
                    defense={li.defense}
                    addTeam={mon => this.addTeam(mon)}
                    team={this.state.team}
                    setState={state => this.setState(state)}
                    data={this.props.data ? this.props.data : 'hi'}
                    inGrid = {true}
                >
                </MyCard>
                </Col>
          ))}
          {/* </Col> */}
        </Row>
      </div>
        )
    }
}

export default MyGrid;