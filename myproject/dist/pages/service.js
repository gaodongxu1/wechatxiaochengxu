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
      navigationBarTitleText: '服务'
    }, _this.data = {
      cars: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508249147103&di=85789bc243d4e01476ff6b11e559780e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F02%2F45%2F53q58PIChxI.jpg', '../photo/advertising.jpg', '../photo/service.jpg'],
      enrol: 'http://img2.imgtn.bdimg.com/it/u=1374822400,191906308&fm=27&gp=0.jpg',
      illegal: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508252360386&di=0adb790e1a81847bfe892a75ffcfa690&imgtype=0&src=http%3A%2F%2Fstorepic.oppomobile.com%2FuploadFiles%2Fcrawl%2FPImages%2F201603%2F25%2F5e3254ae688bff50ec397a789310b829.png.icon.h256.jpg',
      maintenance: 'http://kixxlube.gscaltex.com.cn/uploads/image/2017/0919/20170919111616_7621.jpg',
      fs: 'http://img5.imgtn.bdimg.com/it/u=467274387,59206268&fm=27&gp=0.jpg'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/service'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnMiLCJlbnJvbCIsImlsbGVnYWwiLCJtYWludGVuYW5jZSIsImZzIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLENBQ0oseU1BREksRUFFSiwwQkFGSSxFQUdKLHNCQUhJLENBREQ7QUFNTEMsYUFBTyxzRUFORjtBQU9MQyxlQUFTLDZRQVBKO0FBUUxDLG1CQUFhLGlGQVJSO0FBU0xDLFVBQUk7QUFUQyxLLFFBV1BDLE8sR0FBVSxFOzs7Ozs2QkFFRCxDQUNSOzs7O0VBbEJnQyxlQUFLQyxJOztrQkFBbkJWLEsiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnI3liqEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJzOiBbXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4MjQ5MTQ3MTAzJmRpPTg1Nzg5YmMyNDNkNGUwMTQ3NmZmNmIxMWU1NTk3ODBlJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy41OHBpYy5jb20lMkY1OHBpYyUyRjEzJTJGMDIlMkY0NSUyRjUzcTU4UElDaHhJLmpwZycsXG4gICAgICAnLi4vcGhvdG8vYWR2ZXJ0aXNpbmcuanBnJyxcbiAgICAgICcuLi9waG90by9zZXJ2aWNlLmpwZydcbiAgICBdLFxuICAgIGVucm9sOiAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTM3NDgyMjQwMCwxOTE5MDYzMDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGlsbGVnYWw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDgyNTIzNjAzODYmZGk9MGFkYjc5MGUxYTgxODQ3YmZlODkyYTc1ZmZjZmE2OTAmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGc3RvcmVwaWMub3Bwb21vYmlsZS5jb20lMkZ1cGxvYWRGaWxlcyUyRmNyYXdsJTJGUEltYWdlcyUyRjIwMTYwMyUyRjI1JTJGNWUzMjU0YWU2ODhiZmY1MGVjMzk3YTc4OTMxMGI4MjkucG5nLmljb24uaDI1Ni5qcGcnLFxuICAgIG1haW50ZW5hbmNlOiAnaHR0cDovL2tpeHhsdWJlLmdzY2FsdGV4LmNvbS5jbi91cGxvYWRzL2ltYWdlLzIwMTcvMDkxOS8yMDE3MDkxOTExMTYxNl83NjIxLmpwZycsXG4gICAgZnM6ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT00NjcyNzQzODcsNTkyMDYyNjgmZm09MjcmZ3A9MC5qcGcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==