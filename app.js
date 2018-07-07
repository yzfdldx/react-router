import React, { Component } from 'react';

var history = window.location.pathname;
var hashHistory = window.location.hash;

// console.log(history, hashHistory)

const ZeFn = (from, to, back) => {
  if (!from || !to || !back) return
  if (from === '*' || from === '/') {
    back();
  } else {
    const aa = `${to}/`.search(`#${from}/`);
    if (aa === 0) {
      back();
    }
  }
}

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      DomList: [],
    }
  }
  componentWillMount() {
    window.addEventListener('hashchange', (e) => {
//    console.log(e)
      this.init(this.props);
    }, false)
    // window.onpopstate = (e) => {
    //   console.log(e)
    // }
    this.init(this.props);
  }
  init(props){
    const DomList = [];
    if (props.children) {
      props.children.forEach((item, key) => {
        DomList.push(React.cloneElement(item, {history: props.history ? props.history : '/'}));
      });
    }
//  console.log(DomList)
    this.setState({
      DomList,
    });
  }
  render() {
    const { DomList } = this.state;
    let RedirectList = 0;
    let RouteList = 0;
    return (<div style={{ textAlign: 'center', fontSize: '35px' }} >
        <div>计数器</div>
        {
          DomList.map((item, key) => {
            if (item.props.path && item.props.component && item.props.history) {
              ZeFn(item.props.path, item.props.history, () => {
                RouteList += 1;
              })
              if (RouteList === 1) {
                return (<div key={key}>{item}</div>)
              }
            } else if (item.props.from && item.props.to && item.props.history) { // 重定向
              ZeFn(item.props.from, item.props.history, () => {
                RedirectList += 1;
              })
              if (RedirectList >= 1) {
                return (<div key={key}>{item}</div>)
              }
            }
          })
        }
    </div>)
  }
}


class Redirect extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // console.log(this.props);
    window.location.href = `#${this.props.to}`;
    // if (this.props.history && this.props.from && this.props.to) {
    //   if (this.props.from === '*' || this.props.from === '/') {
    //     window.location.href = `#${this.props.to}`;
    //   } else {
    //     const aa = `${this.props.history}/`.search(`#${this.props.from}/`);
    //     if (aa === 0) {
    //       window.location.href = `#${this.props.to}`
    //     }
    //   }
    // }
  }
  render() {
    return (<div ></div>)
  }
}

// console.log(Redirect)

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


var Json = {
  Router: Router,
  Redirect: Redirect,
  Route: Route,
  hashHistory: hashHistory,
  history: history
}

module.exports = Json;