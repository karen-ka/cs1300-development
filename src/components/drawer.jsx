import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Card, Col, Select, Row , Statistic} from 'antd';
import MyCard from './card.jsx';
import { HeartOutlined } from '@ant-design/icons';

const gridStyle = {
    width: '75%',
    align: 'center',
  };

//   function calcTotalHP(team) {
//     let sum = 0;
//     for (let pokemon in team) {
//       sum += pokemon.hp;
//     }
//     return sum;
// };
class TeamDrawer extends React.Component {
    // li = useState(false);
    // visible = li[0];
    // setVisible = li[1];
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }


    showDrawer = () => {
        console.log('hi')
        this.setState({visible: true});
    };
    
    onClose = () => {
        this.setState({visible: false});
    };
    //  retStr() { 
    //   return "hello world!!!" 
    // }
    // calcTotalHP() {
    //   var sum = 0;
    //   for (let pokemon in this.props.team) {
    //     sum += pokemon.hp;
    //   }
    //   console.log('sum', sum);
    //   return sum;
    // };
    render () {
        console.log('hiasdflk', this.props.team);
        var health = 0;
        var def = 0;
        var att = 0;
        for(var i = 0; i < this.props.team.length; i++) {
          health += this.props.team[i].hp;
          def += this.props.team[i].defense;
          att += this.props.team[i].attack;
        }
        return (
            <>
              <Drawer
                title="Your Team"
                placement="right"
                // closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={300}
              >
                  <div style={gridStyle}>
                    <Row><p>Total Stats</p></Row>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Statistic title="HP" value={health} />
                        </Col>
                        <Col span={12}>
                        <Statistic title="Attack" value={att} />
                        </Col>
                        <Col span={12}>
                        <Statistic title="Defense" value={def} />
                        </Col>
                        <Col span={12}>
                        <Statistic title="Team Size" value={this.props.team.length} suffix="/ 6" />
                        </Col>
                    </Row>
                    <br></br>
                  <Row gutter={[16, 24]} span={10}>
                  {/* <Col span={4} flex="auto"> */}
            {this.props.team && this.props.team.map(li => (
                <Col span={16} flex="auto"> 
                <MyCard
                    name={li.name}
                    number={li.number}
                    type={li.type}
                    hp={li.hp}
                    attack={li.attack}
                    defense={li.defense}
                    inGrid={false}
                    removeTeam = {mon => this.props.removeTeam(mon)}
                    // addTeam={mon => this.addTeam(mon)}
                    // team={this.state.team}
                    // setState={state => this.setState(state)}
                    // data={this.props.data ? this.props.data : 'hi'}
                >
                </MyCard>
               </Col>
          ))}
           {/* </Col> */}
           {this.props.team.length == 0 && <div><br></br><p>Looks like you don't have any Pokemon yet. Add some to your team to get started!</p></div>}
          </Row>
          </div>
              </Drawer>
            </>
          );
    }
}

export default TeamDrawer;