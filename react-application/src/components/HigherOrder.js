//higher order component

import React from "react"

//import React, { Component } from 'react';

const UpdatedComp= OriginalComp =>{
class NewComp extends React.Component {
    render() {
        return <OriginalComp name="The User"/>;    }
 }

  return NewComp;
}



export default UpdatedComp;