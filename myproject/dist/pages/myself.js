'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      love: '../photo/love.png',
      focus: '../photo/focus.png',
      footprint: '../photo/footprint.png',
      individual: '../photo/individual.png',
      like: '../photo/like.png',
      feedback: '../photo/feedback.png',
      service: '../photo/service.png',
      about: '../photo/about.png',
      setting: '../photo/setting.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myself'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c2VsZi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibG92ZSIsImZvY3VzIiwiZm9vdHByaW50IiwiaW5kaXZpZHVhbCIsImxpa2UiLCJmZWVkYmFjayIsInNlcnZpY2UiLCJhYm91dCIsInNldHRpbmciLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sbUJBREQ7QUFFTEMsYUFBTyxvQkFGRjtBQUdMQyxpQkFBVyx3QkFITjtBQUlMQyxrQkFBWSx5QkFKUDtBQUtMQyxZQUFNLG1CQUxEO0FBTUxDLGdCQUFVLHVCQU5MO0FBT0xDLGVBQVMsc0JBUEo7QUFRTEMsYUFBTyxvQkFSRjtBQVNMQyxlQUFTO0FBVEosSyxRQVdQQyxPLEdBQVUsRTs7Ozs7NkJBRUQsQ0FFUjs7OztFQW5CZ0MsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6Im15c2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBsb3ZlOiAnLi4vcGhvdG8vbG92ZS5wbmcnLFxuICAgIGZvY3VzOiAnLi4vcGhvdG8vZm9jdXMucG5nJyxcbiAgICBmb290cHJpbnQ6ICcuLi9waG90by9mb290cHJpbnQucG5nJyxcbiAgICBpbmRpdmlkdWFsOiAnLi4vcGhvdG8vaW5kaXZpZHVhbC5wbmcnLFxuICAgIGxpa2U6ICcuLi9waG90by9saWtlLnBuZycsXG4gICAgZmVlZGJhY2s6ICcuLi9waG90by9mZWVkYmFjay5wbmcnLFxuICAgIHNlcnZpY2U6ICcuLi9waG90by9zZXJ2aWNlLnBuZycsXG4gICAgYWJvdXQ6ICcuLi9waG90by9hYm91dC5wbmcnLFxuICAgIHNldHRpbmc6ICcuLi9waG90by9zZXR0aW5nLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcblxuICB9XG59XG4iXX0=