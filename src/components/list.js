import { Card, List, Avatar } from 'antd';
import React from 'react';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class TeamList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
      }

    render () {
        return (
        //     <List
        //     header={<h2>Your Team</h2>}
        //     itemLayout="horizontal"
        //     dataSource={data}
        //     renderItem={item => (
        //       <List.Item>
        //         <List.Item.Meta
        //           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        //           title={<a href="https://ant.design">{item.title}</a>}
        //           description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        //         />
        //       </List.Item>
        //     )}
        //   />

          <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
        )
    }
}
export default TeamList;
