import { Table, Tag, Radio, Space } from 'antd';
import data from '../data.js'
import typemap from '../types.js'
import React from 'react';



const columns = [
    {
        title: '#',
        dataIndex: 'pokedex_number',
        key: 'pokedex_number',
        width: 70,
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    //   render: text => <a>{text}</a>,
    },
    {},
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    {
      title: 'Type',
      key: 'types',
      dataIndex: 'types',
      render: types => (
        <span>
          {types.map(tag => {
            let color = typemap[tag];
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];


class MyTable extends React.Component {
    state = {
      top: 'topLeft',
      bottom: 'bottomRight',
    };
  
    render() {
      return (
        <div>
          {/* <div>
            <Radio.Group
              style={{ marginBottom: 10 }}
              options={topOptions}
              value={this.state.top}
              onChange={e => {
                this.setState({ top: e.target.value });
              }}
            />
          </div> */}
          {/* <Radio.Group
            style={{ marginBottom: 10 }}
            options={bottomOptions}
            value={this.state.bottom}
            onChange={e => {
              this.setState({ bottom: e.target.value });
            }}
          /> */}
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      );
    }
  }

  export default MyTable;