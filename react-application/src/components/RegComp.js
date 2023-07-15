import React, { Component } from 'react';

class RegComp extends Component {
    render() {

        console.log("Regular Component")
        return (

            <div>
                Its a regular Component{this.props.name}
            </div>
        );
    }
}

export default RegComp;