import React, { Component } from 'react';
import './LineItem.css';

class LineItem extends Component {
    render() {
        return (
            <div className="LineItem">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="amount">
                    {this.props.amount}
                </div>
                <div className="reason">
                    {this.props.reason}
                </div>
            </div>
        );
    }
}

export default LineItem;