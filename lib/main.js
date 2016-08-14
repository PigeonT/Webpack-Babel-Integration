'use strict';

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bob = new _User2.default('Bob', 'office', 23);

console.info('My name is ' + bob.getName() + ' and my job is ' + bob.getJob());