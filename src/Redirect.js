import React, {Component} from 'react';

class Redirect extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    window.location.href = `#${this.props.to}`;
  }
  render() {
    return (<div ></div>)
  }
}
export default Redirect;