import { Button, Col, Row, Space, message } from 'antd';
import PokemonCard from './PokemonCard.jsx';
import React from 'react';
import SelectorGroup from './SelectorGroup.jsx';
import TeamDrawer from './TeamDrawer.jsx';
import pokeball from '../pokeball1.png';
import pkmn from '../data.js'
import { Layout } from 'antd';
import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const gridStyle = {
    align: 'center',
  };

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  textAlign: 'left',
  paddingLeft: '15px',
}

const orig = [...pkmn];

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original: [...orig],
            data: this.props.data,
            team: new Array(),
            showSuccess: false,
        };
        this.drawerElement = React.createRef();
        this.radioGroup= React.createRef();
      }

    // Handler methods 
    handleMessageClick = () => {
      this.drawerElement.current.showDrawer();
    }

    handleReset = () => {
      this.setState({data: this.state.original, original: [...orig]}, () => {console.log(this.state)})
      this.radioGroup.current.handleReset();
    }

    // Handles the user's team
    addTeam(mon) {
      if(this.state.team.length >= 6) {
        message.error({
          content: <div>{`Unable to add ${mon.name}. Your team is already full.`}<Button type="link" onClick={this.handleMessageClick}>Manage Team</Button></div> ,
          duration: 4,
        });
      } else {
        var newTeam = this.state.team;
        newTeam.push(mon);
        this.setState({team: newTeam, showSuccess:true});
        message.success({
          content: <div>{`Added ${mon.name} to the team.`} <Button type="link" onClick={this.handleMessageClick}>View Team</Button></div>,
          duration: 3,
        });
      }
    }

    removeTeam(mon) {
      // Don't use filter method because we allow duplicate Pokemon to be added to the team
      var newTeam = this.state.team;
      var index = -1;
      for(var i = 0; i < newTeam.length; i++){
        if(newTeam[i].number == mon.number){
            index = i;
        }
      }
      if (index > -1) {
        newTeam.splice(index, 1);
      }
      this.setState({team: newTeam});
    }

    render() {
        return (
          <div className="site-card-wrapper" style={gridStyle}>
          
          <Layout>
          
          <Sider style={siderStyle}>
          <Space direction="vertical" align="center" size="large" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>

          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col>
              <Button type="primary" size={'medium'} onClick={this.handleMessageClick} icon={<SearchOutlined/>}>
                  View Team
              </Button>
            </Col>
          </Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col>
              <SelectorGroup ref={this.radioGroup} data={this.state.data} setState={state => this.setState(state)}></SelectorGroup>
            </Col>
          </Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col>
              <Button type="default" size={'medium'} onClick={this.handleReset} icon={<UndoOutlined/>}>
                Clear
              </Button>
            </Col>
          </Row>

          </Space>
          </Sider>

          <Layout style={{ marginLeft: 200 }}>

          <Header style={{height: '20vh', backgroundColor: 'black', marginTop: '2vh'}}>
            <Row justify="space-around" align="middle">
              <Col>
                <h1 style={{fontSize: '50px'}}>TEAM</h1>
              </Col>
              <Col>
                <img src={pokeball} className="App-logo" alt="logo" />
              </Col>
              <Col>
                <h1 style={{fontSize: '50px'}}>PLANNER</h1>
              </Col>
            </Row>
          </Header>

          <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
            <TeamDrawer ref={this.drawerElement}
                team={this.state.team}
                removeTeam = {mon => this.removeTeam(mon)}>
            </TeamDrawer>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {this.state.data.map(li => (
                    <Col span={8} xs={20} sm={16} md={12} lg={8} xl={6}>
                  <PokemonCard
                      name={li.name}
                      number={li.pokedex_number}
                      type={li.types}
                      hp={li.hp}
                      attack={li.attack}
                      defense={li.defense}
                      addTeam={mon => this.addTeam(mon)}
                      team={this.state.team}
                      setState={state => this.setState(state)}
                      data={this.state.data}
                      inGrid = {true}
                  >
                  </PokemonCard>
                  </Col>
              ))}
            </Row>
          </Content>
          
          </Layout>
          </Layout>
        </div>
      )
    }
}

export default ParentContainer;