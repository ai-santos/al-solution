"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = function template(input) {
  var templateArr = [];
  templateArr = input.members.map(function (member) {
    return "\n      <div class=\"members\">\n        <h4>Hello " + member.name + "</h4>\n        <p>Thanks for coming to Family Friday lunch at:</p>\n        <h4>" + input.restaurant.name + "</h4>\n        <a href=" + input.restaurant.yelp_link + "><img src=" + input.restaurant.logo + " /></a>\n        <p>We enjoyed having you and the " + member.team + " team there. Please rate your experience</p>\n        <form action=\"/save_rating.php\" id=\"rating-form\">\n          <select name=\"rating\">\n            <option name=\"Bad\" value=\"Bad\">Bad</option>\n            <option name=\"Mediocre\" value=\"Mediocre\">Mediocre</option>\n            <option name=\"Good\" value=\"Good\">Good</option>\n            <option name=\"Great\" value=\"Great\">Great</option>\n            <option name=\"Awesome\" value=\"Awesome\">Awesome</option>\n          </select>\n          <input type=\"submit\">\n        </form>\n      </div>\n    ";
  });
  return templateArr;
};

// console.log(template(list))

exports.default = template;