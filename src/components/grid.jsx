import { Button, Col, Row, Tabs, Space, Switch, message } from 'antd';
import MyCard from './card.jsx';
import React from 'react';
import MyRadio from './radio.js';
import TeamDrawer from './drawer.jsx';
import pokeball from '../pokeball1.png';
import pkmn from '../data.js'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const gridStyle = {
    align: 'center',
  };
const blur = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  width: '100%',
};
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  textAlign: 'left',
  paddingLeft: '10px',
  // alignItems: 'center',
}

const orig = [...pkmn];

class MyGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original: [...orig],
            data: this.props.data,
            team: new Array(),
            showSuccess: false,
        };
        // var test = this.props.data.filter(li => li["pokedex_number"] < 5);
        this.drawerElement = React.createRef();
        this.radioGroup= React.createRef();
      }

    handleMessageClick = () => {
      this.drawerElement.current.showDrawer();
    }

    handleReset = () => {
      // console.log(this.state.data, this.state.original)
      // this.setState({data: this.state.original})
      this.setState({data: this.state.original, original: [...orig]}, () => {console.log(this.state)})
      this.radioGroup.current.handleReset();
      console.log(this.state)
    }

    handleFilter = (q) => {
      // this.setState()
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
        message.success({
          content: <div>{`Added ${mon.name} to the team.`} <Button type="link" onClick={this.handleMessageClick}>View Team</Button></div>,
          duration: 4,
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
        console.log('rerendering grid...', this.state.data)
        // console.log(this.state.data);
        // console.log(this.state.showSuccess)
        return (
        <div className="site-card-wrapper" style={gridStyle}>
        
        <Layout>
        <Sider style={siderStyle}>
        <Space direction="vertical" align="center" size="large">

          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}></Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}></Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}></Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}><Col></Col></Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {/* <Col xs={20} sm={16} md={12} lg={8} xl={6}></Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={6}></Col> */}

          <Col>
          <Button type="primary" shape="round" size={'medium'} onClick={this.handleMessageClick}>
                View Team
              </Button>
          </Col>
          </Row>
          <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

        {/* <Col span={16}></Col> */}

        <Col>
        <MyRadio ref={this.radioGroup} data={this.state.data} setState={state => this.setState(state)}></MyRadio>
        </Col>
        </Row>
        <Row justify="space-around" gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col>
          <Button type="default" shape="round" size={'medium'} onClick={this.handleReset}>
                Clear
              </Button>
          </Col>
          </Row>


        {/* <Row>

        </Row> */}
        </Space>
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
        <Header style={{height: '20vh', backgroundColor: 'black'}}>
          <Row justify="space-around" align="middle">
            {/* <div width='100%' alignItems='center'> */}
            <Col>
          <h1 style={{fontSize: '50px'}}>TEAM</h1>
          </Col>
          <Col>
        <img src={pokeball} className="App-logo" alt="logo" />
        </Col>
        <Col>
        <h1 style={{fontSize: '50px'}}>BUILDER</h1>
        </Col>
        {/* </div> */}
        </Row>
        </Header>
        <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
        <TeamDrawer ref={this.drawerElement}
            team={this.state.team}
            removeTeam = {mon => this.removeTeam(mon)}
            ></TeamDrawer>
        {/* <Row gutter={[0, 8]}> */}
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {/* <Col span={8}> */}
            {this.state.data.map(li => (
                // <Col span={8} xs={20} sm={16} md={12} lg={8} xl={4}>
                  <Col span={8} xs={20} sm={16} md={12} lg={8} xl={6}>
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
                    data={this.state.data}
                    inGrid = {true}
                >
                </MyCard>
                </Col>
          ))}
          {/* </Col> */}
        </Row>
        </Content>
        </Layout>
        </Layout>
        {/* </Layout> */}
      </div>
        )
    }
}

export default MyGrid;