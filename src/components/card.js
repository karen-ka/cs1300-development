import { Button, Card, Tag } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import typemap from '../types.js'
import { PlusCircleOutlined } from '@ant-design/icons';
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

    render() {
      return <Card
        extra={<p class='ant-card-extra-override'>{`# ${this.props.number}`}</p>}
        hoverable
        style={{ width: 240 }}
        title={this.props.name}
        cover={<img style={{width: 100, height: 100, alignSelf: 'center'}}alt={this.props.name} src={`${process.env.PUBLIC_URL}/images/${this.props.number}.png`}/>}
        actions={[
            <Button
                icon={<PlusCircleOutlined />}
                // onClick={this.props.setState({team: this.props.team.push({name: this.props.name, number: this.props.number, type: this.props.type})})}
            >
                Add to team
            </Button>,
          ]}
        >
      <Meta description={typetags(this.props.type)} />
        </Card>
    }
  }

  MyCard.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    // number: PropTypes.n.isRequired,
    type: PropTypes.array.isRequired,
    team: PropTypes.array.isRequired,
    setState: PropTypes.func,
  };