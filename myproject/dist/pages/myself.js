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
      setting: '../photo/setting.png',
      name: '',
      head: ''
    }, _this.methods = {
      problems: function problems() {
        _wepy2.default.navigateTo({
          url: './problems'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
          self.setData({
            head: res.userInfo.avatarUrl,
            name: res.userInfo.nickName
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myself'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c2VsZi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibG92ZSIsImZvY3VzIiwiZm9vdHByaW50IiwiaW5kaXZpZHVhbCIsImxpa2UiLCJmZWVkYmFjayIsInNlcnZpY2UiLCJhYm91dCIsInNldHRpbmciLCJuYW1lIiwiaGVhZCIsIm1ldGhvZHMiLCJwcm9ibGVtcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxtQkFERDtBQUVMQyxhQUFPLG9CQUZGO0FBR0xDLGlCQUFXLHdCQUhOO0FBSUxDLGtCQUFZLHlCQUpQO0FBS0xDLFlBQU0sbUJBTEQ7QUFNTEMsZ0JBQVUsdUJBTkw7QUFPTEMsZUFBUyxzQkFQSjtBQVFMQyxhQUFPLG9CQVJGO0FBU0xDLGVBQVMsc0JBVEo7QUFVTEMsWUFBTSxFQVZEO0FBV0xDLFlBQU07QUFYRCxLLFFBYVBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs2QkFPRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtOLElBQUwsR0FBWVMsSUFBSUMsUUFBSixDQUFhQyxRQUF6QjtBQUNBTCxlQUFLTCxJQUFMLEdBQVlRLElBQUlDLFFBQUosQ0FBYUUsU0FBekI7QUFDQU4sZUFBS08sT0FBTCxDQUFhO0FBQ1haLGtCQUFNUSxJQUFJQyxRQUFKLENBQWFFLFNBRFI7QUFFWFosa0JBQU1TLElBQUlDLFFBQUosQ0FBYUM7QUFGUixXQUFiO0FBSUQ7QUFSYyxPQUFqQjtBQVVEOzs7O0VBcENnQyxlQUFLRyxJOztrQkFBbkIzQixLIiwiZmlsZSI6Im15c2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBsb3ZlOiAnLi4vcGhvdG8vbG92ZS5wbmcnLFxuICAgIGZvY3VzOiAnLi4vcGhvdG8vZm9jdXMucG5nJyxcbiAgICBmb290cHJpbnQ6ICcuLi9waG90by9mb290cHJpbnQucG5nJyxcbiAgICBpbmRpdmlkdWFsOiAnLi4vcGhvdG8vaW5kaXZpZHVhbC5wbmcnLFxuICAgIGxpa2U6ICcuLi9waG90by9saWtlLnBuZycsXG4gICAgZmVlZGJhY2s6ICcuLi9waG90by9mZWVkYmFjay5wbmcnLFxuICAgIHNlcnZpY2U6ICcuLi9waG90by9zZXJ2aWNlLnBuZycsXG4gICAgYWJvdXQ6ICcuLi9waG90by9hYm91dC5wbmcnLFxuICAgIHNldHRpbmc6ICcuLi9waG90by9zZXR0aW5nLnBuZycsXG4gICAgbmFtZTogJycsXG4gICAgaGVhZDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHByb2JsZW1zKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9wcm9ibGVtcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5oZWFkID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhlYWQ6IHJlcy51c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgbmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19