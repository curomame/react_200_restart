import React, { Component } from 'react'

export class R005_LifecycleEx extends Component {


  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }


  render() {
    console.log('3. render Call');
    return (
      <div>[THIS IS CONSTRUCOR FUNCTIOn]]</div>
    )
  }
}

export default R005_LifecycleEx