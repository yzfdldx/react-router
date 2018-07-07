import React, {Component} from 'react';

class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: null
    }
  }
  componentWillMount() {
    this.setState({
      Component: this.props.component
    });
  }
  render() {
    const { Component } = this.state;
    return (<div >
      {
          Component ? <Component {...this.props} /> : null
      }
    </div>)
  }
}

export default Route;