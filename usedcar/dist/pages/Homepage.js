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
      navigationBarTitleText: '爱车族'
    }, _this.data = {
      search: '../photo/search.png',
      colorselect: 'black',
      colorlike: 'grey',
      colorshelves: 'grey',
      lineselect: 'black',
      linelike: 'white',
      lineshelves: 'white',
      advertising: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509352596440&di=ba62bcf7fb114799903b8a969cde9b08&imgtype=0&src=http%3A%2F%2Fpic.xcarimg.com%2Fimg%2Fnews_photo%2F2014%2F04%2F23%2FIrlX6OYFaT3696.jpg',
      toyota: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509356312672&di=349548b74b3d5ab78271fb97885a7960&imgtype=0&src=http%3A%2F%2Fwww.chebz.com%2Fuploads%2Fallimg%2F141025%2F1-1410251241280-L.jpg',
      dasauto: 'http://pic1.ooopic.com/uploadfilepic/shiliang/2009-12-09/OOOPIC_qhrh_2009120958dcb45214c2642b.jpg',
      honda: 'http://a0.att.hudong.com/46/24/01300542520783139930244704855_s.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509357682981&di=7aeab18ae768f30158445926937b17da&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F84%2F14%2F01300000633474127227141595130.jpg',
      hyundai: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509360701999&di=cc3ab2a978ae7ebbd29e1e110154d8a4&imgtype=0&src=http%3A%2F%2Fwww.chebz.com%2Fuploads%2Fallimg%2F141024%2F1-1410242359540-L.jpg',
      benz: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509357800437&di=f57e43624fa974e81443f613ae352fc9&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F11%2F36%2F12%2F51bOOOPICb9.jpg',
      Coupe: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=682775739,1835787007&fm=27&gp=0.jpg',
      testdrive: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509968256&di=df4201ad1adfe861ade0b8cf89e6f870&imgtype=jpg&er=1&src=http%3A%2F%2Fpic14.nipic.com%2F20110529%2F7094573_094739799000_2.jpg',
      AstonMartin: 'http://img3.imgtn.bdimg.com/it/u=3953604106,2693623020&fm=214&gp=0.jpg',
      collect: '../photo/collect.png',
      horses: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509436819509&di=743f86cbf4e954799c59f6d7af7b66c2&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Fg5%2FM00%2F09%2F03%2FChMkJlbmVsKICF6RAAg6D-eWwcEAANjggGFDFAACDon386.jpg'
    }, _this.methods = {
      select: function select() {
        var self = this;
        self.colorselect = 'black';
        self.colorlike = 'grey';
        self.colorshelves = 'grey';
        self.lineselect = 'black';
        self.linelike = 'white';
        self.lineshelves = 'white';
      },
      like: function like() {
        var self = this;
        self.colorselect = 'grey';
        self.colorlike = 'black';
        self.colorshelves = 'grey';
        self.lineselect = 'white';
        self.linelike = 'black';
        self.lineshelves = 'white';
      },
      shelves: function shelves() {
        var self = this;
        self.colorselect = 'grey';
        self.colorlike = 'grey';
        self.colorshelves = 'black';
        self.lineselect = 'white';
        self.linelike = 'white';
        self.lineshelves = 'black';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Homepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzZWFyY2giLCJjb2xvcnNlbGVjdCIsImNvbG9ybGlrZSIsImNvbG9yc2hlbHZlcyIsImxpbmVzZWxlY3QiLCJsaW5lbGlrZSIsImxpbmVzaGVsdmVzIiwiYWR2ZXJ0aXNpbmciLCJ0b3lvdGEiLCJkYXNhdXRvIiwiaG9uZGEiLCJibXciLCJoeXVuZGFpIiwiYmVueiIsIkNvdXBlIiwidGVzdGRyaXZlIiwiQXN0b25NYXJ0aW4iLCJjb2xsZWN0IiwiaG9yc2VzIiwibWV0aG9kcyIsInNlbGVjdCIsInNlbGYiLCJsaWtlIiwic2hlbHZlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLHFCQURIO0FBRUxDLG1CQUFhLE9BRlI7QUFHTEMsaUJBQVcsTUFITjtBQUlMQyxvQkFBYyxNQUpUO0FBS0xDLGtCQUFZLE9BTFA7QUFNTEMsZ0JBQVUsT0FOTDtBQU9MQyxtQkFBYSxPQVBSO0FBUUxDLG1CQUFhLDJOQVJSO0FBU0xDLGNBQVEsb05BVEg7QUFVTEMsZUFBUyxtR0FWSjtBQVdMQyxhQUFPLG9FQVhGO0FBWUxDLFdBQUssa05BWkE7QUFhTEMsZUFBUyxvTkFiSjtBQWNMQyxZQUFNLG1NQWREO0FBZUxDLGFBQU8sK0ZBZkY7QUFnQkxDLGlCQUFXLDhNQWhCTjtBQWlCTEMsbUJBQWEsd0VBakJSO0FBa0JMQyxlQUFTLHNCQWxCSjtBQW1CTEMsY0FBUTtBQW5CSCxLLFFBcUJQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLcEIsV0FBTCxHQUFtQixPQUFuQjtBQUNBb0IsYUFBS25CLFNBQUwsR0FBaUIsTUFBakI7QUFDQW1CLGFBQUtsQixZQUFMLEdBQW9CLE1BQXBCO0FBQ0FrQixhQUFLakIsVUFBTCxHQUFrQixPQUFsQjtBQUNBaUIsYUFBS2hCLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQWdCLGFBQUtmLFdBQUwsR0FBbUIsT0FBbkI7QUFDRCxPQVRPO0FBVVJnQixVQVZRLGtCQVVEO0FBQ0wsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtwQixXQUFMLEdBQW1CLE1BQW5CO0FBQ0FvQixhQUFLbkIsU0FBTCxHQUFpQixPQUFqQjtBQUNBbUIsYUFBS2xCLFlBQUwsR0FBb0IsTUFBcEI7QUFDQWtCLGFBQUtqQixVQUFMLEdBQWtCLE9BQWxCO0FBQ0FpQixhQUFLaEIsUUFBTCxHQUFnQixPQUFoQjtBQUNBZ0IsYUFBS2YsV0FBTCxHQUFtQixPQUFuQjtBQUNELE9BbEJPO0FBbUJSaUIsYUFuQlEscUJBbUJFO0FBQ1IsWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtwQixXQUFMLEdBQW1CLE1BQW5CO0FBQ0FvQixhQUFLbkIsU0FBTCxHQUFpQixNQUFqQjtBQUNBbUIsYUFBS2xCLFlBQUwsR0FBb0IsT0FBcEI7QUFDQWtCLGFBQUtqQixVQUFMLEdBQWtCLE9BQWxCO0FBQ0FpQixhQUFLaEIsUUFBTCxHQUFnQixPQUFoQjtBQUNBZ0IsYUFBS2YsV0FBTCxHQUFtQixPQUFuQjtBQUNEO0FBM0JPLEs7Ozs7OzZCQTZCRCxDQUFFOzs7O0VBdERzQixlQUFLa0IsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJIb21lcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHovabml48nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgc2VhcmNoOiAnLi4vcGhvdG8vc2VhcmNoLnBuZycsXG4gICAgY29sb3JzZWxlY3Q6ICdibGFjaycsXG4gICAgY29sb3JsaWtlOiAnZ3JleScsXG4gICAgY29sb3JzaGVsdmVzOiAnZ3JleScsXG4gICAgbGluZXNlbGVjdDogJ2JsYWNrJyxcbiAgICBsaW5lbGlrZTogJ3doaXRlJyxcbiAgICBsaW5lc2hlbHZlczogJ3doaXRlJyxcbiAgICBhZHZlcnRpc2luZzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1MjU5NjQ0MCZkaT1iYTYyYmNmN2ZiMTE0Nzk5OTAzYjhhOTY5Y2RlOWIwOCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMueGNhcmltZy5jb20lMkZpbWclMkZuZXdzX3Bob3RvJTJGMjAxNCUyRjA0JTJGMjMlMkZJcmxYNk9ZRmFUMzY5Ni5qcGcnLFxuICAgIHRveW90YTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1NjMxMjY3MiZkaT0zNDk1NDhiNzRiM2Q1YWI3ODI3MWZiOTc4ODVhNzk2MCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZ3d3cuY2hlYnouY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjE0MTAyNSUyRjEtMTQxMDI1MTI0MTI4MC1MLmpwZycsXG4gICAgZGFzYXV0bzogJ2h0dHA6Ly9waWMxLm9vb3BpYy5jb20vdXBsb2FkZmlsZXBpYy9zaGlsaWFuZy8yMDA5LTEyLTA5L09PT1BJQ19xaHJoXzIwMDkxMjA5NThkY2I0NTIxNGMyNjQyYi5qcGcnLFxuICAgIGhvbmRhOiAnaHR0cDovL2EwLmF0dC5odWRvbmcuY29tLzQ2LzI0LzAxMzAwNTQyNTIwNzgzMTM5OTMwMjQ0NzA0ODU1X3MuanBnJyxcbiAgICBibXc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTc2ODI5ODEmZGk9N2FlYWIxOGFlNzY4ZjMwMTU4NDQ1OTI2OTM3YjE3ZGEmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGYTAuYXR0Lmh1ZG9uZy5jb20lMkY4NCUyRjE0JTJGMDEzMDAwMDA2MzM0NzQxMjcyMjcxNDE1OTUxMzAuanBnJyxcbiAgICBoeXVuZGFpOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzYwNzAxOTk5JmRpPWNjM2FiMmE5NzhhZTdlYmJkMjllMWUxMTAxNTRkOGE0JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5jaGViei5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTQxMDI0JTJGMS0xNDEwMjQyMzU5NTQwLUwuanBnJyxcbiAgICBiZW56OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzU3ODAwNDM3JmRpPWY1N2U0MzYyNGZhOTc0ZTgxNDQzZjYxM2FlMzUyZmM5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzIub29vcGljLmNvbSUyRjExJTJGMzYlMkYxMiUyRjUxYk9PT1BJQ2I5LmpwZycsXG4gICAgQ291cGU6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjgyNzc1NzM5LDE4MzU3ODcwMDcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHRlc3Rkcml2ZTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTk2ODI1NiZkaT1kZjQyMDFhZDFhZGZlODYxYWRlMGI4Y2Y4OWU2Zjg3MCZpbWd0eXBlPWpwZyZlcj0xJnNyYz1odHRwJTNBJTJGJTJGcGljMTQubmlwaWMuY29tJTJGMjAxMTA1MjklMkY3MDk0NTczXzA5NDczOTc5OTAwMF8yLmpwZycsXG4gICAgQXN0b25NYXJ0aW46ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0zOTUzNjA0MTA2LDI2OTM2MjMwMjAmZm09MjE0JmdwPTAuanBnJyxcbiAgICBjb2xsZWN0OiAnLi4vcGhvdG8vY29sbGVjdC5wbmcnLFxuICAgIGhvcnNlczogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTQzNjgxOTUwOSZkaT03NDNmODZjYmY0ZTk1NDc5OWM1OWY2ZDdhZjdiNjZjMiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZkZXNrLmZkLnpvbC1pbWcuY29tLmNuJTJGZzUlMkZNMDAlMkYwOSUyRjAzJTJGQ2hNa0psYm1Wc0tJQ0Y2UkFBZzZELWVXd2NFQUFOamdnR0ZERkFBQ0RvbjM4Ni5qcGcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yc2VsZWN0ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmxpa2UgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JzaGVsdmVzID0gJ2dyZXknXG4gICAgICBzZWxmLmxpbmVzZWxlY3QgPSAnYmxhY2snXG4gICAgICBzZWxmLmxpbmVsaWtlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lc2hlbHZlcyA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxpa2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JzZWxlY3QgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JsaWtlID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcnNoZWx2ZXMgPSAnZ3JleSdcbiAgICAgIHNlbGYubGluZXNlbGVjdCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYubGluZWxpa2UgPSAnYmxhY2snXG4gICAgICBzZWxmLmxpbmVzaGVsdmVzID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgc2hlbHZlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcnNlbGVjdCA9ICdncmV5J1xuICAgICAgc2VsZi5jb2xvcmxpa2UgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JzaGVsdmVzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5saW5lc2VsZWN0ID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lbGlrZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYubGluZXNoZWx2ZXMgPSAnYmxhY2snXG4gICAgfVxuICB9O1xuICBvbkxvYWQoKSB7fVxufVxuIl19