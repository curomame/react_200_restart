import React, { Component } from 'react'

export class R006_LifecycleEx extends Component {

  static getDerivedStateFromProps(props, state){
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
    return {};
  }

  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  render() {
    console.log('3. render Call');
    return (
      <div>[THIS IS CONSTRUCTOR FUNCTION]]</div>
    )
  }
}

export default R006_LifecycleEx