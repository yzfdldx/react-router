'use strict';

import Router from './Router';
import Redirect from './Redirect';
import Route from './Route';

var history = window.location.pathname;
var hashHistory = window.location.hash;

export {Router, Redirect, Route, hashHistory, history};