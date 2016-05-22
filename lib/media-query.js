'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mediaQuery = function mediaQuery(C, queries) {
  return function (_React$Component) {
    _inherits(_mediaQuery, _React$Component);

    function _mediaQuery() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, _mediaQuery);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_mediaQuery)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _this._mqList = new Map(), _this._onMatch = function () {
        return _this._mqList.forEach(function (mql, key) {
          return _this.state[key] !== mql.matches && _this.setState(_defineProperty({}, key, mql.matches));
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_mediaQuery, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        Object.keys(queries).forEach(function (key) {
          var mql = window.matchMedia(queries[key]);
          mql.addListener(_this2._onMatch);

          _this2._mqList.set(key, mql);

          // Init state without rerender
          _this2.state[key] = false;
        });

        // set initial media queries state
        this._onMatch();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        this._mqList && this._mqList.forEach(function (mql) {
          return mql.removeListener(_this3._onMatch);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(C, _extends({}, this.props, { mq: this.state }));
      }
    }]);

    return _mediaQuery;
  }(_react2.default.Component);
};

exports.default = mediaQuery;