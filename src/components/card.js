import { Button, Card, Tag } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import typemap from '../types.js'
import { PlusCircleOutlined } from '@ant-design/icons';
const { Meta } = Card;

// ReactDOM.render(
//   <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>,
//   mountNode,
// );
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
    // imgsrc = "../imgs/" + this.props.number + ".png"
    // images = require.context('../imgs', true);
    render() {
        // console.log(this.props)
    // console.log()
      return <Card
        extra={<p class='ant-card-extra-override'>{`# ${this.props.number}`}</p>}
        hoverable
        style={{ width: 240 }}
        title={this.props.name}
        // <img src={`${process.env.PUBLIC_URL}/image.jpg`} />
        cover={<img style={{width: 100, height: 100, alignSelf: 'center'}}alt={this.props.name} src={`${process.env.PUBLIC_URL}/images/${this.props.number}.png`}/>}
        // cover={<img alt={this.props.name} src={require(`../imgs/${this.props.number}.png`)} />}
        actions={[
            // <PlusCircleOutlined key="add" title="HI"/>,
            <Button icon={<PlusCircleOutlined />}>Add to team</Button>,
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
  };