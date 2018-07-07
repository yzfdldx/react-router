'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZeFn = function ZeFn(from, to, back) {
  if (!from || !to || !back) return;
  if (from === '*' || from === '/') {
    back();
  } else {
    var aa = (to + '/').search('#' + from + '/');
    if (aa === 0) {
      back();
    }
  }
};

var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    _this.state = {
      props: props,
      DomList: []
    };
    return _this;
  }

  _createClass(Router, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      window.addEventListener('hashchange', function (e) {
        console.log(e);
        _this2.init(_this2.props);
      }, false);
      // window.onpopstate = (e) => {
      //   console.log(e)
      // }
      this.init(this.props);
    }
  }, {
    key: 'init',
    value: function init(props) {
      var DomList = [];
      if (props.children) {
        props.children.forEach(function (item, key) {
          DomList.push(_react2.default.cloneElement(item, { history: props.history ? props.history : '/' }));
        });
      }
      console.log(DomList);
      this.setState({
        DomList: DomList
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var DomList = this.state.DomList;

      var RedirectList = 0;
      var RouteList = 0;
      return _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', fontSize: '35px' } },
        _react2.default.createElement(
          'div',
          null,
          '\u8BA1\u6570\u5668'
        ),
        DomList.map(function (item, key) {
          if (item.props.path && item.props.component && item.props.history) {
            ZeFn(item.props.path, item.props.history, function () {
              RouteList += 1;
            });
            if (RouteList === 1) {
              return _react2.default.createElement(
                'div',
                { key: key },
                item
              );
            }
          } else if (item.props.from && item.props.to && item.props.history) {
            // 重定向
            ZeFn(item.props.from, item.props.history, function () {
              RedirectList += 1;
            });
            if (RedirectList >= 1) {
              return _react2.default.createElement(
                'div',
                { key: key },
                item
              );
            }
          }
        })
      );
    }
  }]);

  return Router;
}(_react.Component);

exports.default = Router;