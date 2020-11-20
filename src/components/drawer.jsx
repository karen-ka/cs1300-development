import React from 'react';
import { Drawer } from 'antd';
import { Col, Row , Statistic} from 'antd';
import MyCard from './card.jsx';

const gridStyle = {
    width: '75%',
    align: 'center',
  };

  /*
  * This is the component that opens the side drawer when a user clicks "View Team"
  */
class TeamDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    // Handler methods
    showDrawer = () => {
        this.setState({visible: true});
    };
    
    onClose = () => {
        this.setState({visible: false});
    };


    render () {
      // Calculate the health to be shown
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
                  <Row gutter={[16, 24]} span={10} align="middle">
            {this.props.team && this.props.team.map(li => (
                <Col flex="auto">
                <MyCard
                    name={li.name}
                    number={li.number}
                    type={li.type}
                    hp={li.hp}
                    attack={li.attack}
                    defense={li.defense}
                    inGrid={false}
                    removeTeam = {mon => this.props.removeTeam(mon)}
                >
                </MyCard>
               </Col>
          ))}
           {this.props.team.length == 0 && <div><br></br><p>Looks like you don't have any Pokemon yet. Add some to your team to get started!</p></div>}
          </Row>
          </div>
              </Drawer>
            </>
          );
    }
}

export default TeamDrawer;