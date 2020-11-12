import { Select, Tag } from 'antd';
import React from 'react';

const typedict = [
    {label:"normal","eff":"11111½10½111111111",value:"#A8A878"},
    {label:"fighting","eff":"21½½12½021111½212½",value:"#C03028"},
    {label:"flying","eff":"12111½21½112½11111",value:"#A890F0"},
    {label:"poison","eff":"111½½½1½0112111112",value:"#A040A0"},
    {label:"ground","eff":"110212½1221½211111",value:"#E0C068"},
    {label:"rock","eff":"1½21½121½211112111",value:"#B8A038"},
    {label:"bug","eff":"1½½½111½½½1212112½",value:"#A8B820"},
    {label:"ghost","eff":"0111111211111211½1",value:"#705898"},
    {label:"steel","eff":"11111211½½½1½12112",value:"#B8B8D0"},
    {label:"fire","eff":"11111½212½½2112½11",value:"#F08030"},
    {label:"water","eff":"1111221112½½111½11",value:"#6890F0"},
    {label:"grass","eff":"11½½22½1½½2½111½11",value:"#78C850"},
    {label:"electric","eff":"11210111112½½11½11",value:"#F8D030"},
    {label:"psychic","eff":"12121111½1111½1101",value:"#F85888"},
    {label:"ice","eff":"11212111½½½211½211",value:"#98D8D8"},
    {label:"dragon","eff":"11111111½111111210",value:"#7038F8"},
    {label:"dark","eff":"1½11111211111211½½",value:"#705848"},{label:"fairy","eff":"121½1111½½11111221",value:"#EE99AC"}
]

function tagRender(props) {
    // console.log(props);
  const { label, value, closable, onClose } = props;

  return (
    <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}


class TagSelect extends React.Component {
    render() {
        return (
            <Select
                placeholder="Filter by type"
                mode="multiple"
                showArrow
                tagRender={tagRender}
                style={{ width: '100%' }}
                options={typedict}
            />  
        )
    }
}

export default TagSelect;