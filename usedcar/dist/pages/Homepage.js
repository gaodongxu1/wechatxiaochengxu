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
      Array: [],
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
      collect: '../photo/collect.png'
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
      },
      driver: function driver() {
        _wepy2.default.navigateTo({
          url: './driver'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/get',
        method: 'get',
        success: function success(res) {
          self.Array = res.data;
          self.setData({
            Array: res.data
          });
          console.log(res.data, 'res.data');
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Homepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJBcnJheSIsInNlYXJjaCIsImNvbG9yc2VsZWN0IiwiY29sb3JsaWtlIiwiY29sb3JzaGVsdmVzIiwibGluZXNlbGVjdCIsImxpbmVsaWtlIiwibGluZXNoZWx2ZXMiLCJhZHZlcnRpc2luZyIsInRveW90YSIsImRhc2F1dG8iLCJob25kYSIsImJtdyIsImh5dW5kYWkiLCJiZW56IiwiQ291cGUiLCJ0ZXN0ZHJpdmUiLCJjb2xsZWN0IiwibWV0aG9kcyIsInNlbGVjdCIsInNlbGYiLCJsaWtlIiwic2hlbHZlcyIsImRyaXZlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxjQUFRLHFCQUZIO0FBR0xDLG1CQUFhLE9BSFI7QUFJTEMsaUJBQVcsTUFKTjtBQUtMQyxvQkFBYyxNQUxUO0FBTUxDLGtCQUFZLE9BTlA7QUFPTEMsZ0JBQVUsT0FQTDtBQVFMQyxtQkFBYSxPQVJSO0FBU0xDLG1CQUFhLDJOQVRSO0FBVUxDLGNBQVEsb05BVkg7QUFXTEMsZUFBUyxtR0FYSjtBQVlMQyxhQUFPLG9FQVpGO0FBYUxDLFdBQUssa05BYkE7QUFjTEMsZUFBUyxvTkFkSjtBQWVMQyxZQUFNLG1NQWZEO0FBZ0JMQyxhQUFPLCtGQWhCRjtBQWlCTEMsaUJBQVcsOE1BakJOO0FBa0JMQyxlQUFTO0FBbEJKLEssUUFvQlBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixXQUFMLEdBQW1CLE9BQW5CO0FBQ0FrQixhQUFLakIsU0FBTCxHQUFpQixNQUFqQjtBQUNBaUIsYUFBS2hCLFlBQUwsR0FBb0IsTUFBcEI7QUFDQWdCLGFBQUtmLFVBQUwsR0FBa0IsT0FBbEI7QUFDQWUsYUFBS2QsUUFBTCxHQUFnQixPQUFoQjtBQUNBYyxhQUFLYixXQUFMLEdBQW1CLE9BQW5CO0FBQ0QsT0FUTztBQVVSYyxVQVZRLGtCQVVEO0FBQ0wsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixXQUFMLEdBQW1CLE1BQW5CO0FBQ0FrQixhQUFLakIsU0FBTCxHQUFpQixPQUFqQjtBQUNBaUIsYUFBS2hCLFlBQUwsR0FBb0IsTUFBcEI7QUFDQWdCLGFBQUtmLFVBQUwsR0FBa0IsT0FBbEI7QUFDQWUsYUFBS2QsUUFBTCxHQUFnQixPQUFoQjtBQUNBYyxhQUFLYixXQUFMLEdBQW1CLE9BQW5CO0FBQ0QsT0FsQk87QUFtQlJlLGFBbkJRLHFCQW1CRTtBQUNSLFlBQUlGLE9BQU8sSUFBWDtBQUNBQSxhQUFLbEIsV0FBTCxHQUFtQixNQUFuQjtBQUNBa0IsYUFBS2pCLFNBQUwsR0FBaUIsTUFBakI7QUFDQWlCLGFBQUtoQixZQUFMLEdBQW9CLE9BQXBCO0FBQ0FnQixhQUFLZixVQUFMLEdBQWtCLE9BQWxCO0FBQ0FlLGFBQUtkLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQWMsYUFBS2IsV0FBTCxHQUFtQixPQUFuQjtBQUNELE9BM0JPO0FBNEJSZ0IsWUE1QlEsb0JBNEJDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFoQ08sSzs7Ozs7NkJBa0NEO0FBQ1AsVUFBSUwsT0FBTyxJQUFYO0FBQ0EscUJBQUtNLE9BQUwsQ0FBYTtBQUNYRCxhQUFLLDJCQURNO0FBRVhFLGdCQUFRLEtBRkc7QUFHWEMsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlQsZUFBS3BCLEtBQUwsR0FBYTZCLElBQUk5QixJQUFqQjtBQUNBcUIsZUFBS1UsT0FBTCxDQUFhO0FBQ1g5QixtQkFBTzZCLElBQUk5QjtBQURBLFdBQWI7QUFHQWdDLGtCQUFRQyxHQUFSLENBQVlILElBQUk5QixJQUFoQixFQUFzQixVQUF0QjtBQUNEO0FBVFUsT0FBYjtBQVdEOzs7O0VBdkVnQyxlQUFLa0MsSTs7a0JBQW5CckMsSyIsImZpbGUiOiJIb21lcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHovabml48nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgQXJyYXk6IFtdLFxuICAgIHNlYXJjaDogJy4uL3Bob3RvL3NlYXJjaC5wbmcnLFxuICAgIGNvbG9yc2VsZWN0OiAnYmxhY2snLFxuICAgIGNvbG9ybGlrZTogJ2dyZXknLFxuICAgIGNvbG9yc2hlbHZlczogJ2dyZXknLFxuICAgIGxpbmVzZWxlY3Q6ICdibGFjaycsXG4gICAgbGluZWxpa2U6ICd3aGl0ZScsXG4gICAgbGluZXNoZWx2ZXM6ICd3aGl0ZScsXG4gICAgYWR2ZXJ0aXNpbmc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTI1OTY0NDAmZGk9YmE2MmJjZjdmYjExNDc5OTkwM2I4YTk2OWNkZTliMDgmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljLnhjYXJpbWcuY29tJTJGaW1nJTJGbmV3c19waG90byUyRjIwMTQlMkYwNCUyRjIzJTJGSXJsWDZPWUZhVDM2OTYuanBnJyxcbiAgICB0b3lvdGE6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTYzMTI2NzImZGk9MzQ5NTQ4Yjc0YjNkNWFiNzgyNzFmYjk3ODg1YTc5NjAmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGd3d3LmNoZWJ6LmNvbSUyRnVwbG9hZHMlMkZhbGxpbWclMkYxNDEwMjUlMkYxLTE0MTAyNTEyNDEyODAtTC5qcGcnLFxuICAgIGRhc2F1dG86ICdodHRwOi8vcGljMS5vb29waWMuY29tL3VwbG9hZGZpbGVwaWMvc2hpbGlhbmcvMjAwOS0xMi0wOS9PT09QSUNfcWhyaF8yMDA5MTIwOTU4ZGNiNDUyMTRjMjY0MmIuanBnJyxcbiAgICBob25kYTogJ2h0dHA6Ly9hMC5hdHQuaHVkb25nLmNvbS80Ni8yNC8wMTMwMDU0MjUyMDc4MzEzOTkzMDI0NDcwNDg1NV9zLmpwZycsXG4gICAgYm13OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzU3NjgyOTgxJmRpPTdhZWFiMThhZTc2OGYzMDE1ODQ0NTkyNjkzN2IxN2RhJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmEwLmF0dC5odWRvbmcuY29tJTJGODQlMkYxNCUyRjAxMzAwMDAwNjMzNDc0MTI3MjI3MTQxNTk1MTMwLmpwZycsXG4gICAgaHl1bmRhaTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM2MDcwMTk5OSZkaT1jYzNhYjJhOTc4YWU3ZWJiZDI5ZTFlMTEwMTU0ZDhhNCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZ3d3cuY2hlYnouY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjE0MTAyNCUyRjEtMTQxMDI0MjM1OTU0MC1MLmpwZycsXG4gICAgYmVuejogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1NzgwMDQzNyZkaT1mNTdlNDM2MjRmYTk3NGU4MTQ0M2Y2MTNhZTM1MmZjOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMyLm9vb3BpYy5jb20lMkYxMSUyRjM2JTJGMTIlMkY1MWJPT09QSUNiOS5qcGcnLFxuICAgIENvdXBlOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTY4Mjc3NTczOSwxODM1Nzg3MDA3JmZtPTI3JmdwPTAuanBnJyxcbiAgICB0ZXN0ZHJpdmU6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDk5NjgyNTYmZGk9ZGY0MjAxYWQxYWRmZTg2MWFkZTBiOGNmODllNmY4NzAmaW1ndHlwZT1qcGcmZXI9MSZzcmM9aHR0cCUzQSUyRiUyRnBpYzE0Lm5pcGljLmNvbSUyRjIwMTEwNTI5JTJGNzA5NDU3M18wOTQ3Mzk3OTkwMDBfMi5qcGcnLFxuICAgIGNvbGxlY3Q6ICcuLi9waG90by9jb2xsZWN0LnBuZydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBzZWxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JzZWxlY3QgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9ybGlrZSA9ICdncmV5J1xuICAgICAgc2VsZi5jb2xvcnNoZWx2ZXMgPSAnZ3JleSdcbiAgICAgIHNlbGYubGluZXNlbGVjdCA9ICdibGFjaydcbiAgICAgIHNlbGYubGluZWxpa2UgPSAnd2hpdGUnXG4gICAgICBzZWxmLmxpbmVzaGVsdmVzID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgbGlrZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcnNlbGVjdCA9ICdncmV5J1xuICAgICAgc2VsZi5jb2xvcmxpa2UgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yc2hlbHZlcyA9ICdncmV5J1xuICAgICAgc2VsZi5saW5lc2VsZWN0ID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lbGlrZSA9ICdibGFjaydcbiAgICAgIHNlbGYubGluZXNoZWx2ZXMgPSAnd2hpdGUnXG4gICAgfSxcbiAgICBzaGVsdmVzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yc2VsZWN0ID0gJ2dyZXknXG4gICAgICBzZWxmLmNvbG9ybGlrZSA9ICdncmV5J1xuICAgICAgc2VsZi5jb2xvcnNoZWx2ZXMgPSAnYmxhY2snXG4gICAgICBzZWxmLmxpbmVzZWxlY3QgPSAnd2hpdGUnXG4gICAgICBzZWxmLmxpbmVsaWtlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lc2hlbHZlcyA9ICdibGFjaydcbiAgICB9LFxuICAgIGRyaXZlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vZHJpdmVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0JyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYuQXJyYXkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIEFycmF5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=