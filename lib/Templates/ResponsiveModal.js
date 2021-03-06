"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LargeModal = function (_React$Component) {
    _inherits(LargeModal, _React$Component);

    function LargeModal() {
        _classCallCheck(this, LargeModal);

        return _possibleConstructorReturn(this, (LargeModal.__proto__ || Object.getPrototypeOf(LargeModal)).apply(this, arguments));
    }

    _createClass(LargeModal, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement("div", { className: "fukuro-modal-window-backdrop", onClick: this.props.onClose }),
                _react2.default.createElement(
                    "div",
                    { className: "fukuro-modal-window fukuro-modal-content-responsive" },
                    this.props.header !== undefined ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "fukuro-modal-window-header" },
                            _react2.default.createElement(
                                "h3",
                                null,
                                this.props.header
                            )
                        ),
                        _react2.default.createElement("hr", { className: "display-fukuro-modal-window-hr" })
                    ) : null,
                    _react2.default.createElement(
                        "div",
                        { className: "fukuro-modal-window-content" },
                        this.props.children
                    ),
                    this.props.footer !== undefined ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement("hr", { className: "display-fukuro-modal-window-hr" }),
                        _react2.default.createElement(
                            "div",
                            { className: "fukuro-modal-window-footer" },
                            this.props.footer
                        )
                    ) : null
                )
            );
        }
    }]);

    return LargeModal;
}(_react2.default.Component);

exports.default = LargeModal;
module.exports = exports["default"];