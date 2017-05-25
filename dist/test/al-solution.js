'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiChange = require('chai-change');

var _chaiChange2 = _interopRequireDefault(_chaiChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiChange2.default);

describe('template', function () {

  it('returns html markup', function () {

    (0, _chai.expect)(bst.root).to.eql({ value: 3, left: { value: 2, left: null, right: null }, right: { value: 5, left: null, right: null } });
  });
});