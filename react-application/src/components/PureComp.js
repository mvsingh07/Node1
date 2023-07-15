import React, { Component } from 'react';

class PureComp extends Component {
    render() {

        console.log("Pure componnent")
        return (
            <div>
                Its a pure Component{this.props.name}
            </div>
        );
    }
}

export default PureComp;