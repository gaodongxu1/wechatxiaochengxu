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
      Array: {},
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
            // elect: self.Array[index].elect
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJBcnJheSIsInNlYXJjaCIsImNvbG9yc2VsZWN0IiwiY29sb3JsaWtlIiwiY29sb3JzaGVsdmVzIiwibGluZXNlbGVjdCIsImxpbmVsaWtlIiwibGluZXNoZWx2ZXMiLCJhZHZlcnRpc2luZyIsInRveW90YSIsImRhc2F1dG8iLCJob25kYSIsImJtdyIsImh5dW5kYWkiLCJiZW56IiwiQ291cGUiLCJ0ZXN0ZHJpdmUiLCJjb2xsZWN0IiwibWV0aG9kcyIsInNlbGVjdCIsInNlbGYiLCJsaWtlIiwic2hlbHZlcyIsImRyaXZlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb2xlZWN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJuYW1lIiwiYWRkcmVzcyIsInByaWNlIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGNBQVEscUJBRkg7QUFHTEMsbUJBQWEsT0FIUjtBQUlMQyxpQkFBVyxNQUpOO0FBS0xDLG9CQUFjLE1BTFQ7QUFNTEMsa0JBQVksT0FOUDtBQU9MQyxnQkFBVSxPQVBMO0FBUUxDLG1CQUFhLE9BUlI7QUFTTEMsbUJBQWEsMk5BVFI7QUFVTEMsY0FBUSxvTkFWSDtBQVdMQyxlQUFTLG1HQVhKO0FBWUxDLGFBQU8sb0VBWkY7QUFhTEMsV0FBSyxrTkFiQTtBQWNMQyxlQUFTLG9OQWRKO0FBZUxDLFlBQU0sbU1BZkQ7QUFnQkxDLGFBQU8sK0ZBaEJGO0FBaUJMQyxpQkFBVyw4TUFqQk47QUFrQkxDLGVBQVM7QUFsQkosSyxRQW9CUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS2xCLFdBQUwsR0FBbUIsT0FBbkI7QUFDQWtCLGFBQUtqQixTQUFMLEdBQWlCLE1BQWpCO0FBQ0FpQixhQUFLaEIsWUFBTCxHQUFvQixNQUFwQjtBQUNBZ0IsYUFBS2YsVUFBTCxHQUFrQixPQUFsQjtBQUNBZSxhQUFLZCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FjLGFBQUtiLFdBQUwsR0FBbUIsT0FBbkI7QUFDRCxPQVRPO0FBVVJjLFVBVlEsa0JBVUQ7QUFDTCxZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2xCLFdBQUwsR0FBbUIsTUFBbkI7QUFDQWtCLGFBQUtqQixTQUFMLEdBQWlCLE9BQWpCO0FBQ0FpQixhQUFLaEIsWUFBTCxHQUFvQixNQUFwQjtBQUNBZ0IsYUFBS2YsVUFBTCxHQUFrQixPQUFsQjtBQUNBZSxhQUFLZCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FjLGFBQUtiLFdBQUwsR0FBbUIsT0FBbkI7QUFDRCxPQWxCTztBQW1CUmUsYUFuQlEscUJBbUJFO0FBQ1IsWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixXQUFMLEdBQW1CLE1BQW5CO0FBQ0FrQixhQUFLakIsU0FBTCxHQUFpQixNQUFqQjtBQUNBaUIsYUFBS2hCLFlBQUwsR0FBb0IsT0FBcEI7QUFDQWdCLGFBQUtmLFVBQUwsR0FBa0IsT0FBbEI7QUFDQWUsYUFBS2QsUUFBTCxHQUFnQixPQUFoQjtBQUNBYyxhQUFLYixXQUFMLEdBQW1CLE9BQW5CO0FBQ0QsT0EzQk87QUE0QlJnQixZQTVCUSxvQkE0QkM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWhDTztBQWlDUkMsYUFqQ1EsbUJBaUNBQyxDQWpDQSxFQWlDRztBQUNULFlBQUlQLE9BQU8sSUFBWDtBQUNBUSxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsWUFBTUcsUUFBUUgsRUFBRUksYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hSLGVBQUssOEJBRE07QUFFWFMsa0JBQVEsTUFGRztBQUdYbkMsZ0JBQU07QUFDSm9DLGtCQUFNZixLQUFLcEIsS0FBTCxDQUFXOEIsS0FBWCxFQUFrQkssSUFEcEI7QUFFSkMscUJBQVNoQixLQUFLcEIsS0FBTCxDQUFXOEIsS0FBWCxFQUFrQk0sT0FGdkI7QUFHSkMsbUJBQU9qQixLQUFLcEIsS0FBTCxDQUFXOEIsS0FBWCxFQUFrQk87QUFDekI7QUFKSTtBQUhLLFNBQWI7QUFVRDtBQS9DTyxLOzs7Ozs2QkFrREQ7QUFDUCxVQUFJakIsT0FBTyxJQUFYO0FBQ0FRLGNBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EscUJBQUtJLE9BQUwsQ0FBYTtBQUNYUixhQUFLLDJCQURNO0FBRVhTLGdCQUFRLE1BRkc7QUFHWEksaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0Qm5CLGVBQUtwQixLQUFMLEdBQWF1QyxJQUFJeEMsSUFBakI7QUFDQXFCLGVBQUtvQixPQUFMLENBQWE7QUFDWHhDLG1CQUFPdUMsSUFBSXhDO0FBREEsV0FBYjtBQUdBNkIsa0JBQVFDLEdBQVIsQ0FBWVUsSUFBSXhDLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0E2QixrQkFBUUMsR0FBUixDQUFZVCxLQUFLcEIsS0FBakIsRUFBd0IsT0FBeEI7QUFDRDtBQVZVLE9BQWI7QUFZRDs7OztFQXpGZ0MsZUFBS3lDLEk7O2tCQUFuQjdDLEsiLCJmaWxlIjoiSG9tZXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix6L2m5pePJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIEFycmF5OiB7fSxcbiAgICBzZWFyY2g6ICcuLi9waG90by9zZWFyY2gucG5nJyxcbiAgICBjb2xvcnNlbGVjdDogJ2JsYWNrJyxcbiAgICBjb2xvcmxpa2U6ICdncmV5JyxcbiAgICBjb2xvcnNoZWx2ZXM6ICdncmV5JyxcbiAgICBsaW5lc2VsZWN0OiAnYmxhY2snLFxuICAgIGxpbmVsaWtlOiAnd2hpdGUnLFxuICAgIGxpbmVzaGVsdmVzOiAnd2hpdGUnLFxuICAgIGFkdmVydGlzaW5nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzUyNTk2NDQwJmRpPWJhNjJiY2Y3ZmIxMTQ3OTk5MDNiOGE5NjljZGU5YjA4JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy54Y2FyaW1nLmNvbSUyRmltZyUyRm5ld3NfcGhvdG8lMkYyMDE0JTJGMDQlMkYyMyUyRklybFg2T1lGYVQzNjk2LmpwZycsXG4gICAgdG95b3RhOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzU2MzEyNjcyJmRpPTM0OTU0OGI3NGIzZDVhYjc4MjcxZmI5Nzg4NWE3OTYwJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5jaGViei5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTQxMDI1JTJGMS0xNDEwMjUxMjQxMjgwLUwuanBnJyxcbiAgICBkYXNhdXRvOiAnaHR0cDovL3BpYzEub29vcGljLmNvbS91cGxvYWRmaWxlcGljL3NoaWxpYW5nLzIwMDktMTItMDkvT09PUElDX3FocmhfMjAwOTEyMDk1OGRjYjQ1MjE0YzI2NDJiLmpwZycsXG4gICAgaG9uZGE6ICdodHRwOi8vYTAuYXR0Lmh1ZG9uZy5jb20vNDYvMjQvMDEzMDA1NDI1MjA3ODMxMzk5MzAyNDQ3MDQ4NTVfcy5qcGcnLFxuICAgIGJtdzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1NzY4Mjk4MSZkaT03YWVhYjE4YWU3NjhmMzAxNTg0NDU5MjY5MzdiMTdkYSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZhMC5hdHQuaHVkb25nLmNvbSUyRjg0JTJGMTQlMkYwMTMwMDAwMDYzMzQ3NDEyNzIyNzE0MTU5NTEzMC5qcGcnLFxuICAgIGh5dW5kYWk6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNjA3MDE5OTkmZGk9Y2MzYWIyYTk3OGFlN2ViYmQyOWUxZTExMDE1NGQ4YTQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGd3d3LmNoZWJ6LmNvbSUyRnVwbG9hZHMlMkZhbGxpbWclMkYxNDEwMjQlMkYxLTE0MTAyNDIzNTk1NDAtTC5qcGcnLFxuICAgIGJlbno6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTc4MDA0MzcmZGk9ZjU3ZTQzNjI0ZmE5NzRlODE0NDNmNjEzYWUzNTJmYzkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMi5vb29waWMuY29tJTJGMTElMkYzNiUyRjEyJTJGNTFiT09PUElDYjkuanBnJyxcbiAgICBDb3VwZTogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT02ODI3NzU3MzksMTgzNTc4NzAwNyZmbT0yNyZncD0wLmpwZycsXG4gICAgdGVzdGRyaXZlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5OTY4MjU2JmRpPWRmNDIwMWFkMWFkZmU4NjFhZGUwYjhjZjg5ZTZmODcwJmltZ3R5cGU9anBnJmVyPTEmc3JjPWh0dHAlM0ElMkYlMkZwaWMxNC5uaXBpYy5jb20lMkYyMDExMDUyOSUyRjcwOTQ1NzNfMDk0NzM5Nzk5MDAwXzIuanBnJyxcbiAgICBjb2xsZWN0OiAnLi4vcGhvdG8vY29sbGVjdC5wbmcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yc2VsZWN0ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcmxpa2UgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JzaGVsdmVzID0gJ2dyZXknXG4gICAgICBzZWxmLmxpbmVzZWxlY3QgPSAnYmxhY2snXG4gICAgICBzZWxmLmxpbmVsaWtlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lc2hlbHZlcyA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxpa2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3JzZWxlY3QgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JsaWtlID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcnNoZWx2ZXMgPSAnZ3JleSdcbiAgICAgIHNlbGYubGluZXNlbGVjdCA9ICd3aGl0ZSdcbiAgICAgIHNlbGYubGluZWxpa2UgPSAnYmxhY2snXG4gICAgICBzZWxmLmxpbmVzaGVsdmVzID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgc2hlbHZlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcnNlbGVjdCA9ICdncmV5J1xuICAgICAgc2VsZi5jb2xvcmxpa2UgPSAnZ3JleSdcbiAgICAgIHNlbGYuY29sb3JzaGVsdmVzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5saW5lc2VsZWN0ID0gJ3doaXRlJ1xuICAgICAgc2VsZi5saW5lbGlrZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYubGluZXNoZWx2ZXMgPSAnYmxhY2snXG4gICAgfSxcbiAgICBkcml2ZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2RyaXZlcidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xlZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY3JlYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBzZWxmLkFycmF5W2luZGV4XS5uYW1lLFxuICAgICAgICAgIGFkZHJlc3M6IHNlbGYuQXJyYXlbaW5kZXhdLmFkZHJlc3MsXG4gICAgICAgICAgcHJpY2U6IHNlbGYuQXJyYXlbaW5kZXhdLnByaWNlXG4gICAgICAgICAgLy8gZWxlY3Q6IHNlbGYuQXJyYXlbaW5kZXhdLmVsZWN0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdyZXMuZGF0YTExMScpXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYuQXJyYXkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIEFycmF5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5BcnJheSwgJ0FycmF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=