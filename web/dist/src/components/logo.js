"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      {\n        file(relativePath: { eq: \"logo.png\" }) {\n          childImageSharp {\n            fixed(width: 30) {\n              ...GatsbyImageSharpFixed_noBase64\n            }\n          }\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject());

var Logo = function Logo(_ref) {
  var siteTitle = _ref.siteTitle,
      _ref$showWordMark = _ref.showWordMark,
      showWordMark = _ref$showWordMark === void 0 ? false : _ref$showWordMark;
  return /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
    query: (0, _gatsby.graphql)(_templateObject2()),
    render: function render(data) {
      return /*#__PURE__*/_react["default"].createElement(StyledLink, {
        to: "/"
      }, /*#__PURE__*/_react["default"].createElement(_gatsbyImage["default"], {
        fadeIn: false,
        fixed: data.file.childImageSharp.fixed,
        style: {
          marginRight: 20
        }
      }), showWordMark && siteTitle ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: {
          marginRight: 15,
          color: 'white'
        }
      }, siteTitle) : null);
    }
  });
};

var _default = Logo;
exports["default"] = _default;

//# sourceMappingURL=logo.js.map