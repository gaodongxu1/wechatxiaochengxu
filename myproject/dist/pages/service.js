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
      fs: 'http://img5.imgtn.bdimg.com/it/u=467274387,59206268&fm=27&gp=0.jpg',
      nsurance: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508312432127&di=3775c1cbacf1795f34d0ec4586d8e494&imgtype=0&src=http%3A%2F%2Fpic.cn2che.com%2Fphotos%2F2014%2F09%2F09%2F20140909115939936.png',
      Generationofdriving: 'http://3.pic.pc6.com/up/2016-4/20164169725.png',
      loan: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=96163718,1260971984&fm=27&gp=0.jpg',
      usedcar: 'http://img3.imgtn.bdimg.com/it/u=4210326992,2042327993&fm=27&gp=0.jpg',
      preferential: 'http://img1.imgtn.bdimg.com/it/u=2228783489,1434265682&fm=27&gp=0.jpg',
      smartcar: 'http://img3.imgtn.bdimg.com/it/u=67475074,1548753971&fm=27&gp=0.jpg'
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
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/service'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNhcnMiLCJlbnJvbCIsImlsbGVnYWwiLCJtYWludGVuYW5jZSIsImZzIiwibnN1cmFuY2UiLCJHZW5lcmF0aW9ub2Zkcml2aW5nIiwibG9hbiIsInVzZWRjYXIiLCJwcmVmZXJlbnRpYWwiLCJzbWFydGNhciIsIm1ldGhvZHMiLCJwcm9ibGVtcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKLHlNQURJLEVBRUosMEJBRkksRUFHSixzQkFISSxDQUREO0FBTUxDLGFBQU8sc0VBTkY7QUFPTEMsZUFBUyw2UUFQSjtBQVFMQyxtQkFBYSxpRkFSUjtBQVNMQyxVQUFJLG9FQVRDO0FBVUxDLGdCQUFVLG1OQVZMO0FBV0xDLDJCQUFxQixnREFYaEI7QUFZTEMsWUFBTSw4RkFaRDtBQWFMQyxlQUFTLHVFQWJKO0FBY0xDLG9CQUFjLHVFQWRUO0FBZUxDLGdCQUFVO0FBZkwsSyxRQWlCUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0c7QUFDVCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9ELENBQ1I7Ozs7RUE3QmdDLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnI3liqEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJzOiBbXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4MjQ5MTQ3MTAzJmRpPTg1Nzg5YmMyNDNkNGUwMTQ3NmZmNmIxMWU1NTk3ODBlJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy41OHBpYy5jb20lMkY1OHBpYyUyRjEzJTJGMDIlMkY0NSUyRjUzcTU4UElDaHhJLmpwZycsXG4gICAgICAnLi4vcGhvdG8vYWR2ZXJ0aXNpbmcuanBnJyxcbiAgICAgICcuLi9waG90by9zZXJ2aWNlLmpwZydcbiAgICBdLFxuICAgIGVucm9sOiAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTM3NDgyMjQwMCwxOTE5MDYzMDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGlsbGVnYWw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDgyNTIzNjAzODYmZGk9MGFkYjc5MGUxYTgxODQ3YmZlODkyYTc1ZmZjZmE2OTAmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGc3RvcmVwaWMub3Bwb21vYmlsZS5jb20lMkZ1cGxvYWRGaWxlcyUyRmNyYXdsJTJGUEltYWdlcyUyRjIwMTYwMyUyRjI1JTJGNWUzMjU0YWU2ODhiZmY1MGVjMzk3YTc4OTMxMGI4MjkucG5nLmljb24uaDI1Ni5qcGcnLFxuICAgIG1haW50ZW5hbmNlOiAnaHR0cDovL2tpeHhsdWJlLmdzY2FsdGV4LmNvbS5jbi91cGxvYWRzL2ltYWdlLzIwMTcvMDkxOS8yMDE3MDkxOTExMTYxNl83NjIxLmpwZycsXG4gICAgZnM6ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT00NjcyNzQzODcsNTkyMDYyNjgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIG5zdXJhbmNlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4MzEyNDMyMTI3JmRpPTM3NzVjMWNiYWNmMTc5NWYzNGQwZWM0NTg2ZDhlNDk0JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy5jbjJjaGUuY29tJTJGcGhvdG9zJTJGMjAxNCUyRjA5JTJGMDklMkYyMDE0MDkwOTExNTkzOTkzNi5wbmcnLFxuICAgIEdlbmVyYXRpb25vZmRyaXZpbmc6ICdodHRwOi8vMy5waWMucGM2LmNvbS91cC8yMDE2LTQvMjAxNjQxNjk3MjUucG5nJyxcbiAgICBsb2FuOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTk2MTYzNzE4LDEyNjA5NzE5ODQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHVzZWRjYXI6ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT00MjEwMzI2OTkyLDIwNDIzMjc5OTMmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHByZWZlcmVudGlhbDogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTIyMjg3ODM0ODksMTQzNDI2NTY4MiZmbT0yNyZncD0wLmpwZycsXG4gICAgc21hcnRjYXI6ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT02NzQ3NTA3NCwxNTQ4NzUzOTcxJmZtPTI3JmdwPTAuanBnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcHJvYmxlbXMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3Byb2JsZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=