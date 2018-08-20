import React, { Component } from 'react';
import './Outstanding.css';
import LineItem from './LineItem';
import firebase from './Firebase';

class Outstanding extends Component {

    constructor() {
        super();
        this.state = {
            lineItems: []
        }
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        db.collection("outstanding").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const newState = this.state.lineItems.concat(doc.data());
                this.setState({
                    lineItems: newState
                })
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.lineItems.map(item => (
                    <React.Fragment key={item.name}>
                        <LineItem name={item.name} amount={item.amount} reason={item.reason}/>
                    </React.Fragment>
                    ))}
            </div>
        );
    }
}

export default Outstanding;