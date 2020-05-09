"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _hamburger = _interopRequireDefault(require("./hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return /*#__PURE__*/_react["default"].createElement(_hamburger["default"], null);

    default:
      return /*#__PURE__*/_react["default"].createElement("span", null, "Unknown icon: ", props.symbol);
  }
}

var _default = Icon;
exports["default"] = _default;

//# sourceMappingURL=index.js.map