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
      navigationBarTitleText: '宝马_百科'
    }, _this.data = {
      show: true,
      refresh: '../photo/refresh.png',
      bmw1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508839462112&di=3b91b411f14964f9fc0cfb913b747150&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130524%2F9885883_165508898000_2.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508839462112&di=0ae0a867f2fd5e0914d12a08b0a5e774&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131128%2F9885883_090328830000_2.jpg'
    }, _this.methods = {
      change: function change() {
        var self = this;
        self.show = false;
      }
      // button2() {
      //   let self = this
      //   self.show = false
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/bmw'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJtdy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvdyIsInJlZnJlc2giLCJibXcxIiwiYm13IiwibWV0aG9kcyIsImNoYW5nZSIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxJQUREO0FBRUxDLGVBQVMsc0JBRko7QUFHTEMsWUFBTSwwTUFIRDtBQUlMQyxXQUFLO0FBSkEsSyxRQU1QQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixJQUFMLEdBQVksS0FBWjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBUlEsSzs7Ozs7NkJBVUQsQ0FDUjs7OztFQXJCZ0MsZUFBS08sSTs7a0JBQW5CWCxLIiwiZmlsZSI6ImJtdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflrp3pqaxf55m+56eRJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2hvdzogdHJ1ZSxcbiAgICByZWZyZXNoOiAnLi4vcGhvdG8vcmVmcmVzaC5wbmcnLFxuICAgIGJtdzE6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg4Mzk0NjIxMTImZGk9M2I5MWI0MTFmMTQ5NjRmOWZjMGNmYjkxM2I3NDcxNTAmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMjkubmlwaWMuY29tJTJGMjAxMzA1MjQlMkY5ODg1ODgzXzE2NTUwODg5ODAwMF8yLmpwZycsXG4gICAgYm13OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4ODM5NDYyMTEyJmRpPTBhZTBhODY3ZjJmZDVlMDkxNGQxMmEwOGIwYTVlNzc0JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM2Lm5pcGljLmNvbSUyRjIwMTMxMTI4JTJGOTg4NTg4M18wOTAzMjg4MzAwMDBfMi5qcGcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvdyA9IGZhbHNlXG4gICAgfVxuICAgIC8vIGJ1dHRvbjIoKSB7XG4gICAgLy8gICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyAgIHNlbGYuc2hvdyA9IGZhbHNlXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuIl19