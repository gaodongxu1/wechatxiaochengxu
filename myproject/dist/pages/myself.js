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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myself'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c2VsZi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibG92ZSIsImZvY3VzIiwiZm9vdHByaW50IiwiaW5kaXZpZHVhbCIsImxpa2UiLCJmZWVkYmFjayIsInNlcnZpY2UiLCJhYm91dCIsInNldHRpbmciLCJuYW1lIiwiaGVhZCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLG1CQUREO0FBRUxDLGFBQU8sb0JBRkY7QUFHTEMsaUJBQVcsd0JBSE47QUFJTEMsa0JBQVkseUJBSlA7QUFLTEMsWUFBTSxtQkFMRDtBQU1MQyxnQkFBVSx1QkFOTDtBQU9MQyxlQUFTLHNCQVBKO0FBUUxDLGFBQU8sb0JBUkY7QUFTTEMsZUFBUyxzQkFUSjtBQVVMQyxZQUFNLEVBVkQ7QUFXTEMsWUFBTTtBQVhELEssUUFhUEMsTyxHQUFVLEU7Ozs7OzZCQUVEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS0gsSUFBTCxHQUFZTSxJQUFJQyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FMLGVBQUtGLElBQUwsR0FBWUssSUFBSUMsUUFBSixDQUFhRSxTQUF6QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQTNCZ0MsZUFBS0MsSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJteXNlbGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbG92ZTogJy4uL3Bob3RvL2xvdmUucG5nJyxcbiAgICBmb2N1czogJy4uL3Bob3RvL2ZvY3VzLnBuZycsXG4gICAgZm9vdHByaW50OiAnLi4vcGhvdG8vZm9vdHByaW50LnBuZycsXG4gICAgaW5kaXZpZHVhbDogJy4uL3Bob3RvL2luZGl2aWR1YWwucG5nJyxcbiAgICBsaWtlOiAnLi4vcGhvdG8vbGlrZS5wbmcnLFxuICAgIGZlZWRiYWNrOiAnLi4vcGhvdG8vZmVlZGJhY2sucG5nJyxcbiAgICBzZXJ2aWNlOiAnLi4vcGhvdG8vc2VydmljZS5wbmcnLFxuICAgIGFib3V0OiAnLi4vcGhvdG8vYWJvdXQucG5nJyxcbiAgICBzZXR0aW5nOiAnLi4vcGhvdG8vc2V0dGluZy5wbmcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGhlYWQ6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuaGVhZCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=