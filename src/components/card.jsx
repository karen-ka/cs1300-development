import { Button, Card, Tag, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import typemap from '../types.js'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Meta } = Card;

const images = require.context('../imgs', true);
function typetags(props) {
    // console.log('props here', props)
    return <span>
    {props.map(tag => {
      let color = typemap[tag];
      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    })}
  </span>;
}

export default class MyCard extends React.Component {

    constructor(props) {
        super(props);
      }

    // handle

    getButton() {
      if(this.props.inGrid) {
        return <Button
        icon={<PlusCircleOutlined />}
        // onClick={this.props.setState({team: this.props.team.push({name: this.props.name, number: this.props.number, type: this.props.type})})}
        onClick={() => this.props.addTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense})}
    >
        Add to team
    </Button>
      } else {
        return <Button
        icon={<MinusCircleOutlined />}
        // onClick={this.props.setState({team: this.props.team.push({name: this.props.name, number: this.props.number, type: this.props.type})})}
        onClick={() => this.props.addTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense})}
    >
        Remove from team
    </Button>
      }
    }

    render() {
      // console.log('oooooo', this.props.inGrid)
      return <Card
        size={this.props.inGrid ? 'default' : 'small'}
        extra={<p class='ant-card-extra-override'>{`# ${this.props.number}`}</p>}
        // hoverable
        style={{ width: 240 }}
        title={this.props.name}
        cover={<img style={{width: 100, height: 100, alignSelf: 'center'}}alt={this.props.name} src={`${process.env.PUBLIC_URL}/images/${this.props.number}.png`}/>}
        actions={
            [(this.props.inGrid ? <Button
                icon={<PlusCircleOutlined />}
                // onClick={this.props.setState({team: this.props.team.push({name: this.props.name, number: this.props.number, type: this.props.type})})}
                onClick={() => this.props.addTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense})}
            >
                Add to team
            </Button>: (<Button
                icon={<MinusCircleOutlined />}
                // onClick={this.props.setState({team: this.props.team.push({name: this.props.name, number: this.props.number, type: this.props.type})})}
                onClick={() => this.props.removeTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense})}
            >
                Remove from team
            </Button>))]
          }
        // actions={this.getButton}
        >
      <Meta description={
        <div>
          {typetags(this.props.type)}
          <br></br>
          <br></br>
          <Row gutter={8}>
            <Col>
            <p><b>HP: </b>{this.props.hp}</p>
            </Col>
            <Col>
            <p><b>ATT: </b>{this.props.attack}</p>
            </Col>
            <Col>
            <p><b>DEF: </b>{this.props.defense}</p>
            </Col>            
            </Row>
        </div>
        } />
        </Card>
    }
  }

//   MyCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     // number: PropTypes.n.isRequired,
//     type: PropTypes.array.isRequired,
//     team: PropTypes.array.isRequired,
//     setState: PropTypes.func,
//     addTeam: 
//   };