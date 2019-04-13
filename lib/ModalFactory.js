'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TallModal = require('./Templates/TallModal');

var _TallModal2 = _interopRequireDefault(_TallModal);

var _LargeModal = require('./Templates/LargeModal');

var _LargeModal2 = _interopRequireDefault(_LargeModal);

var _ResponsiveModal = require('./Templates/ResponsiveModal');

var _ResponsiveModal2 = _interopRequireDefault(_ResponsiveModal);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalFactory = function (_React$Component) {
    _inherits(ModalFactory, _React$Component);

    function ModalFactory(props) {
        _classCallCheck(this, ModalFactory);

        var _this = _possibleConstructorReturn(this, (ModalFactory.__proto__ || Object.getPrototypeOf(ModalFactory)).call(this, props));

        var modalElement = document.createElement('div');
        modalElement.style.top = 0;
        modalElement.style.bottom = 0;
        modalElement.style.left = 0;
        modalElement.style.right = 0;
        modalElement.style.position = "absolute";
        modalElement.style.display = "flex";
        modalElement.style.flexDirection = "column";
        modalElement.style.justifyContent = "space-around";

        _this.state = {
            modalElement: modalElement
        };

        return _this;
    }

    _createClass(ModalFactory, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.appendChild(this.state.modalElement);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeChild(this.state.modalElement);
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            switch (this.props.modalType) {
                case 'LARGE':
                    return _react2.default.createElement(_LargeModal2.default, this.props);
                case 'TALL':
                    return _react2.default.createElement(_TallModal2.default, this.props);
                case 'RESPONSIVE':
                    return _react2.default.createElement(_ResponsiveModal2.default, this.props);
                default:
                    return _react2.default.createElement(_ResponsiveModal2.default, this.props);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _reactDom2.default.createPortal(this.getContent(), this.state.modalElement);
        }
    }]);

    return ModalFactory;
}(_react2.default.Component);

exports.default = ModalFactory;
module.exports = exports['default'];