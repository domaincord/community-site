"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _icon = _interopRequireDefault(require("./icon"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logo = _interopRequireDefault(require("./logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: white;\n  padding: 15px 20px;\n\n  &:hover {\n    color: #778ad4;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 70px;\n  background-color: #161616;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents["default"].header(_templateObject());

var Wrapper = _styledComponents["default"].div(_templateObject2());

var BrandWrap = _styledComponents["default"].div(_templateObject3());

var NavLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject4());

var Header = function Header(_ref) {
  var onHideNav = _ref.onHideNav,
      onShowNav = _ref.onShowNav,
      showNav = _ref.showNav,
      siteTitle = _ref.siteTitle,
      menu = _ref.menu;
  return /*#__PURE__*/_react["default"].createElement(StyledHeader, null, /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(BrandWrap, null, /*#__PURE__*/_react["default"].createElement(_logo["default"], {
    siteTitle: siteTitle
  }), /*#__PURE__*/_react["default"].createElement("nav", null, menu.map(function (link) {
    return /*#__PURE__*/_react["default"].createElement(NavLink, {
      key: link._key,
      to: link.path
    }, link.title);
  }))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: showNav ? onHideNav : onShowNav
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    symbol: "hamburger"
  }))));
};

var _default = Header;
exports["default"] = _default;

//# sourceMappingURL=header.js.map