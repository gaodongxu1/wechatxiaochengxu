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
      tab: ['我要选车', '最受欢迎', '最新上架'],
      homepage: 0,
      Array: [],
      array: [],
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
      tab: function tab(e) {
        var self = this;
        self.homepage = e.currentTarget.id;
        var where = e.currentTarget.id;
        console.log(self.homepage, 'aaaaa');
        console.log(self.tab[where], 'bbbbbb');
      },
      driver: function driver() {
        _wepy2.default.navigateTo({
          url: './driver'
        });
      },
      search: function search() {
        _wepy2.default.navigateTo({
          url: './search'
        });
      },
      coleect: function coleect(e) {
        var self = this;
        console.log(e);
        var index = e.currentTarget.id;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/create',
          method: 'POST',
          data: {
            name: self.Array[index].name,
            address: self.Array[index].address,
            price: self.Array[index].price
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      console.log('res.data111');
      // self.array = self.Array[3]
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/get',
        method: 'POST',
        success: function success(res) {
          self.Array = res.data;
          self.setData({
            Array: res.data
          });
          console.log(res.data, 'res.data');
          console.log(self.Array, 'Array');
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Homepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0YWIiLCJob21lcGFnZSIsIkFycmF5IiwiYXJyYXkiLCJzZWFyY2giLCJjb2xvcnNlbGVjdCIsImNvbG9ybGlrZSIsImNvbG9yc2hlbHZlcyIsImxpbmVzZWxlY3QiLCJsaW5lbGlrZSIsImxpbmVzaGVsdmVzIiwiYWR2ZXJ0aXNpbmciLCJ0b3lvdGEiLCJkYXNhdXRvIiwiaG9uZGEiLCJibXciLCJoeXVuZGFpIiwiYmVueiIsIkNvdXBlIiwidGVzdGRyaXZlIiwiY29sbGVjdCIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsImRyaXZlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb2xlZWN0IiwiaW5kZXgiLCJyZXF1ZXN0IiwibWV0aG9kIiwibmFtZSIsImFkZHJlc3MiLCJwcmljZSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQURBO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxjQUFRLHFCQUxIO0FBTUxDLG1CQUFhLE9BTlI7QUFPTEMsaUJBQVcsTUFQTjtBQVFMQyxvQkFBYyxNQVJUO0FBU0xDLGtCQUFZLE9BVFA7QUFVTEMsZ0JBQVUsT0FWTDtBQVdMQyxtQkFBYSxPQVhSO0FBWUxDLG1CQUFhLDJOQVpSO0FBYUxDLGNBQVEsb05BYkg7QUFjTEMsZUFBUyxtR0FkSjtBQWVMQyxhQUFPLG9FQWZGO0FBZ0JMQyxXQUFLLGtOQWhCQTtBQWlCTEMsZUFBUyxvTkFqQko7QUFrQkxDLFlBQU0sbU1BbEJEO0FBbUJMQyxhQUFPLCtGQW5CRjtBQW9CTEMsaUJBQVcsOE1BcEJOO0FBcUJMQyxlQUFTO0FBckJKLEssUUF1QlBDLE8sR0FBVTtBQUNSckIsU0FEUSxlQUNKc0IsQ0FESSxFQUNEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUt0QixRQUFMLEdBQWdCcUIsRUFBRUUsYUFBRixDQUFnQkMsRUFBaEM7QUFDQSxZQUFJQyxRQUFRSixFQUFFRSxhQUFGLENBQWdCQyxFQUE1QjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZTCxLQUFLdEIsUUFBakIsRUFBMkIsT0FBM0I7QUFDQTBCLGdCQUFRQyxHQUFSLENBQVlMLEtBQUt2QixHQUFMLENBQVMwQixLQUFULENBQVosRUFBNkIsUUFBN0I7QUFDRCxPQVBPO0FBUVJHLFlBUlEsb0JBUUM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVpPO0FBYVIzQixZQWJRLG9CQWFDO0FBQ1AsdUJBQUswQixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BakJPO0FBa0JSQyxhQWxCUSxtQkFrQkFWLENBbEJBLEVBa0JHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSxZQUFNVyxRQUFRWCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLHVCQUFLUyxPQUFMLENBQWE7QUFDWEgsZUFBSyw4QkFETTtBQUVYSSxrQkFBUSxNQUZHO0FBR1hwQyxnQkFBTTtBQUNKcUMsa0JBQU1iLEtBQUtyQixLQUFMLENBQVcrQixLQUFYLEVBQWtCRyxJQURwQjtBQUVKQyxxQkFBU2QsS0FBS3JCLEtBQUwsQ0FBVytCLEtBQVgsRUFBa0JJLE9BRnZCO0FBR0pDLG1CQUFPZixLQUFLckIsS0FBTCxDQUFXK0IsS0FBWCxFQUFrQks7QUFIckI7QUFISyxTQUFiO0FBU0Q7QUEvQk8sSzs7Ozs7NkJBaUNEO0FBQ1AsVUFBSWYsT0FBTyxJQUFYO0FBQ0FJLGNBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0E7QUFDQSxxQkFBS00sT0FBTCxDQUFhO0FBQ1hILGFBQUssMkJBRE07QUFFWEksZ0JBQVEsTUFGRztBQUdYSSxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCakIsZUFBS3JCLEtBQUwsR0FBYXNDLElBQUl6QyxJQUFqQjtBQUNBd0IsZUFBS2tCLE9BQUwsQ0FBYTtBQUNYdkMsbUJBQU9zQyxJQUFJekM7QUFEQSxXQUFiO0FBR0E0QixrQkFBUUMsR0FBUixDQUFZWSxJQUFJekMsSUFBaEIsRUFBc0IsVUFBdEI7QUFDQTRCLGtCQUFRQyxHQUFSLENBQVlMLEtBQUtyQixLQUFqQixFQUF3QixPQUF4QjtBQUNEO0FBVlUsT0FBYjtBQVlEOzs7O0VBNUVnQyxlQUFLd0MsSTs7a0JBQW5COUMsSyIsImZpbGUiOiJIb21lcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHovabml48nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgdGFiOiBbJ+aIkeimgemAiei9picsICfmnIDlj5fmrKLov44nLCAn5pyA5paw5LiK5p62J10sXG4gICAgaG9tZXBhZ2U6IDAsXG4gICAgQXJyYXk6IFtdLFxuICAgIGFycmF5OiBbXSxcbiAgICBzZWFyY2g6ICcuLi9waG90by9zZWFyY2gucG5nJyxcbiAgICBjb2xvcnNlbGVjdDogJ2JsYWNrJyxcbiAgICBjb2xvcmxpa2U6ICdncmV5JyxcbiAgICBjb2xvcnNoZWx2ZXM6ICdncmV5JyxcbiAgICBsaW5lc2VsZWN0OiAnYmxhY2snLFxuICAgIGxpbmVsaWtlOiAnd2hpdGUnLFxuICAgIGxpbmVzaGVsdmVzOiAnd2hpdGUnLFxuICAgIGFkdmVydGlzaW5nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzUyNTk2NDQwJmRpPWJhNjJiY2Y3ZmIxMTQ3OTk5MDNiOGE5NjljZGU5YjA4JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy54Y2FyaW1nLmNvbSUyRmltZyUyRm5ld3NfcGhvdG8lMkYyMDE0JTJGMDQlMkYyMyUyRklybFg2T1lGYVQzNjk2LmpwZycsXG4gICAgdG95b3RhOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzU2MzEyNjcyJmRpPTM0OTU0OGI3NGIzZDVhYjc4MjcxZmI5Nzg4NWE3OTYwJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5jaGViei5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTQxMDI1JTJGMS0xNDEwMjUxMjQxMjgwLUwuanBnJyxcbiAgICBkYXNhdXRvOiAnaHR0cDovL3BpYzEub29vcGljLmNvbS91cGxvYWRmaWxlcGljL3NoaWxpYW5nLzIwMDktMTItMDkvT09PUElDX3FocmhfMjAwOTEyMDk1OGRjYjQ1MjE0YzI2NDJiLmpwZycsXG4gICAgaG9uZGE6ICdodHRwOi8vYTAuYXR0Lmh1ZG9uZy5jb20vNDYvMjQvMDEzMDA1NDI1MjA3ODMxMzk5MzAyNDQ3MDQ4NTVfcy5qcGcnLFxuICAgIGJtdzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1NzY4Mjk4MSZkaT03YWVhYjE4YWU3NjhmMzAxNTg0NDU5MjY5MzdiMTdkYSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZhMC5hdHQuaHVkb25nLmNvbSUyRjg0JTJGMTQlMkYwMTMwMDAwMDYzMzQ3NDEyNzIyNzE0MTU5NTEzMC5qcGcnLFxuICAgIGh5dW5kYWk6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNjA3MDE5OTkmZGk9Y2MzYWIyYTk3OGFlN2ViYmQyOWUxZTExMDE1NGQ4YTQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGd3d3LmNoZWJ6LmNvbSUyRnVwbG9hZHMlMkZhbGxpbWclMkYxNDEwMjQlMkYxLTE0MTAyNDIzNTk1NDAtTC5qcGcnLFxuICAgIGJlbno6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTc4MDA0MzcmZGk9ZjU3ZTQzNjI0ZmE5NzRlODE0NDNmNjEzYWUzNTJmYzkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMi5vb29waWMuY29tJTJGMTElMkYzNiUyRjEyJTJGNTFiT09PUElDYjkuanBnJyxcbiAgICBDb3VwZTogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT02ODI3NzU3MzksMTgzNTc4NzAwNyZmbT0yNyZncD0wLmpwZycsXG4gICAgdGVzdGRyaXZlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5OTY4MjU2JmRpPWRmNDIwMWFkMWFkZmU4NjFhZGUwYjhjZjg5ZTZmODcwJmltZ3R5cGU9anBnJmVyPTEmc3JjPWh0dHAlM0ElMkYlMkZwaWMxNC5uaXBpYy5jb20lMkYyMDExMDUyOSUyRjcwOTQ1NzNfMDk0NzM5Nzk5MDAwXzIuanBnJyxcbiAgICBjb2xsZWN0OiAnLi4vcGhvdG8vY29sbGVjdC5wbmcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFiKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5ob21lcGFnZSA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgdmFyIHdoZXJlID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmhvbWVwYWdlLCAnYWFhYWEnKVxuICAgICAgY29uc29sZS5sb2coc2VsZi50YWJbd2hlcmVdLCAnYmJiYmJiJylcbiAgICB9LFxuICAgIGRyaXZlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vZHJpdmVyJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNvbGVlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9jcmVhdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5hbWU6IHNlbGYuQXJyYXlbaW5kZXhdLm5hbWUsXG4gICAgICAgICAgYWRkcmVzczogc2VsZi5BcnJheVtpbmRleF0uYWRkcmVzcyxcbiAgICAgICAgICBwcmljZTogc2VsZi5BcnJheVtpbmRleF0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdyZXMuZGF0YTExMScpXG4gICAgLy8gc2VsZi5hcnJheSA9IHNlbGYuQXJyYXlbM11cbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5BcnJheSA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgQXJyYXk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLkFycmF5LCAnQXJyYXknKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==