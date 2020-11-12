import React, { useState } from 'react';
import { Drawer, Button } from 'antd';


class TeamDrawer extends React.Component {
    // li = useState(false);
    // visible = li[0];
    // setVisible = li[1];
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }


    showDrawer = () => {
        console.log('hi')
        this.setState({visible: true});
    };
    
    onClose = () => {
        this.setState({visible: false});
    };

    render () {
        return (
            <>
              <Button type="primary" onClick={this.showDrawer}>
                View Team
              </Button>
              <Drawer
                title="Team"
                placement="right"
                // closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </>
          );
    }
}

export default TeamDrawer;