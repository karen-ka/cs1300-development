import { Card, Col, Select, Row } from 'antd';
import MyCard from './card.js';
import React from 'react';
import TagSelect from './tagselect.js';
import MyRadio from './radio.js';
import { List } from 'antd/lib/form/Form';
import TeamDrawer from './drawer.js';

// ReactDOM.render(
//   <div className="site-card-wrapper">
//     <Row gutter={16}>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//     </Row>
//   </div>,
//   mountNode,
// );

// function generateGrid(props){
//     isStart = true;
//     numCols = 4;
//     for(i = 0; i < props.length; i++){
//         <MyCard name={props[i].name} number={props[i].pokedex_number} type={props[i].types}>
//         </MyCard>
//     }
// }

const gridStyle = {
    width: '75%',
    align: 'center',
  };

// function handleSort() {
    
// }

class MyGrid extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {date: new Date()};
        this.state = {
            data: this.props.data,
            team: new Array(),
        };
        // this.data = this.yourFunction.bind(this)
      }

    addTeam(mon) {
        var newTeam = this.state.team + [mon]
        console.log(newTeam)
        this.setState({team: newTeam});
        console.log('state', this.state)
        // this.state.team.concat(mon)
    }

    render() {
        console.log('yoyo')
        console.log(this.state.data);
        return (
        <div className="site-card-wrapper" style={gridStyle}>
        <Row>
            <Col flex="auto">
            <TeamDrawer></TeamDrawer>
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
                    addTeam={mon => this.addTeam(mon)}
                    team={this.state.team}
                    setState={state => this.setState(state)}
                    data={this.props.data ? this.props.data : 'hi'}
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