'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiChange = require('chai-change');

var _chaiChange2 = _interopRequireDefault(_chaiChange);

var _family_friday = require('../family_friday.js');

var _family_friday2 = _interopRequireDefault(_family_friday);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiChange2.default);

describe('template', function () {

  it('returns an array with the same number of outputs as inputs', function () {
    var input = {
      "members": [{
        "id": 1,
        "email": "jill@mycompany.com",
        "name": "Jill",
        "team": "engineering"
      }, {
        "id": 2,
        "email": "rohit@mycompany.com",
        "name": "Rohit",
        "team": "finance"
      }, {
        "id": 3,
        "email": "maria@mycompany.com",
        "name": "Maria",
        "team": "operations"
      }],
      "restaurant": {
        "logo": "https://vignette3.wikia.nocookie.net/logopedia/images/3/3f/Pizza_Hut_logo_old.svg/revision/latest/scale-to-width-down/200?cb=20121206223303",
        "name": "Pizza R Us",
        "yelp_link": "https://yelp.com/pizza-r-us"
      }
    };

    (0, _chai.expect)((0, _family_friday2.default)(input).length).to.eql(3);
  });
});