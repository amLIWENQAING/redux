import React, { Component } from 'react';
import './index.css';
class Tr extends Component {
    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}

export default Tr;
