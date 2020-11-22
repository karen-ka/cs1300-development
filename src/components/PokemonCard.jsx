import { Button, Card, Tag, Row, Col } from 'antd';
import React from 'react';
import typemap from '../types.js'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Meta } = Card;

function typetags(props) {
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

export default class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      return <Card
        size={this.props.inGrid ? 'default' : 'small'}
        extra={<p class='ant-card-extra-override'>{`# ${this.props.number}`}</p>}
        style={{ width: 240, textAlign: 'center' }}
        title={this.props.name}
        cover={<img style={{width: 100, height: 100, alignSelf: 'center'}}alt={this.props.name} src={`${process.env.PUBLIC_URL}/images/${this.props.number}.png`}/>}
        actions={
            [(this.props.inGrid ? <Button
                icon={<PlusCircleOutlined />}
                onClick={() => this.props.addTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense})}
            >
                Add to team
            </Button>: (<Button
                icon={<MinusCircleOutlined />}
                onClick={() => this.props.removeTeam({name: this.props.name, number: this.props.number, type: this.props.type, hp: this.props.hp, attack: this.props.attack, defense: this.props.defense, index: this.props.index})}
            >
                Remove from team
            </Button>))]
          }
      >
        <Meta description={
          <div>
            {typetags(this.props.type)}
            <br></br>
            <br></br>
            <Row gutter={8} style={{padding: '0 0 0 22px'}}>
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
          </div>} />
      </Card>
    }
  }
