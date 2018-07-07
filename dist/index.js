'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports.hashHistory = exports.Route = exports.Redirect = exports.Router = undefined;

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = window.location.pathname;
var hashHistory = window.location.hash;

exports.Router = _Router2.default;
exports.Redirect = _Redirect2.default;
exports.Route = _Route2.default;
exports.hashHistory = hashHistory;
exports.history = history;