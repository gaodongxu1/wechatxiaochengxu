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
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      collect: '../photo/collect.png',
      right: '../photo/right.png',
      aboutus: '../photo/aboutus.png',
      contact: '../photo/contact.png',
      question: '../photo/question.png'
    }, _this.methods = {
      collect: function collect() {
        _wepy2.default.navigateTo({
          url: './collect'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbGxlY3QiLCJyaWdodCIsImFib3V0dXMiLCJjb250YWN0IiwicXVlc3Rpb24iLCJtZXRob2RzIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJuYW1lIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImhlYWQiLCJhdmF0YXJVcmwiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsc0JBREo7QUFFTEMsYUFBTyxvQkFGRjtBQUdMQyxlQUFTLHNCQUhKO0FBSUxDLGVBQVMsc0JBSko7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBT1BDLE8sR0FBVTtBQUNSTCxhQURRLHFCQUNFO0FBQ1IsdUJBQUtNLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs2QkFPRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtJLElBQUwsR0FBWUQsSUFBSUUsUUFBSixDQUFhQyxRQUF6QjtBQUNBTixlQUFLTyxJQUFMLEdBQVlKLElBQUlFLFFBQUosQ0FBYUcsU0FBekI7QUFDQVIsZUFBS1MsT0FBTCxDQUFhO0FBQ1hGLGtCQUFNSixJQUFJRSxRQUFKLENBQWFHLFNBRFI7QUFFWEosa0JBQU1ELElBQUlFLFFBQUosQ0FBYUM7QUFGUixXQUFiO0FBSUQ7QUFSYyxPQUFqQjtBQVVEOzs7O0VBOUJnQyxlQUFLSSxJOztrQkFBbkJ0QixLIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY29sbGVjdDogJy4uL3Bob3RvL2NvbGxlY3QucG5nJyxcbiAgICByaWdodDogJy4uL3Bob3RvL3JpZ2h0LnBuZycsXG4gICAgYWJvdXR1czogJy4uL3Bob3RvL2Fib3V0dXMucG5nJyxcbiAgICBjb250YWN0OiAnLi4vcGhvdG8vY29udGFjdC5wbmcnLFxuICAgIHF1ZXN0aW9uOiAnLi4vcGhvdG8vcXVlc3Rpb24ucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY29sbGVjdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5oZWFkID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhlYWQ6IHJlcy51c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgbmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19