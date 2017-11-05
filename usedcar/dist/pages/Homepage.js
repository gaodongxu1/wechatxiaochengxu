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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0YWIiLCJob21lcGFnZSIsIkFycmF5IiwiYXJyYXkiLCJzZWFyY2giLCJjb2xvcnNlbGVjdCIsImNvbG9ybGlrZSIsImNvbG9yc2hlbHZlcyIsImxpbmVzZWxlY3QiLCJsaW5lbGlrZSIsImxpbmVzaGVsdmVzIiwiYWR2ZXJ0aXNpbmciLCJ0b3lvdGEiLCJkYXNhdXRvIiwiaG9uZGEiLCJibXciLCJoeXVuZGFpIiwiYmVueiIsIkNvdXBlIiwidGVzdGRyaXZlIiwiY29sbGVjdCIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsImRyaXZlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb2xlZWN0IiwiaW5kZXgiLCJyZXF1ZXN0IiwibWV0aG9kIiwibmFtZSIsImFkZHJlc3MiLCJwcmljZSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQURBO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxjQUFRLHFCQUxIO0FBTUxDLG1CQUFhLE9BTlI7QUFPTEMsaUJBQVcsTUFQTjtBQVFMQyxvQkFBYyxNQVJUO0FBU0xDLGtCQUFZLE9BVFA7QUFVTEMsZ0JBQVUsT0FWTDtBQVdMQyxtQkFBYSxPQVhSO0FBWUxDLG1CQUFhLDJOQVpSO0FBYUxDLGNBQVEsb05BYkg7QUFjTEMsZUFBUyxtR0FkSjtBQWVMQyxhQUFPLG9FQWZGO0FBZ0JMQyxXQUFLLGtOQWhCQTtBQWlCTEMsZUFBUyxvTkFqQko7QUFrQkxDLFlBQU0sbU1BbEJEO0FBbUJMQyxhQUFPLCtGQW5CRjtBQW9CTEMsaUJBQVcsOE1BcEJOO0FBcUJMQyxlQUFTO0FBckJKLEssUUF1QlBDLE8sR0FBVTtBQUNSckIsU0FEUSxlQUNKc0IsQ0FESSxFQUNEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUt0QixRQUFMLEdBQWdCcUIsRUFBRUUsYUFBRixDQUFnQkMsRUFBaEM7QUFDQSxZQUFJQyxRQUFRSixFQUFFRSxhQUFGLENBQWdCQyxFQUE1QjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZTCxLQUFLdEIsUUFBakIsRUFBMkIsT0FBM0I7QUFDQTBCLGdCQUFRQyxHQUFSLENBQVlMLEtBQUt2QixHQUFMLENBQVMwQixLQUFULENBQVosRUFBNkIsUUFBN0I7QUFDRCxPQVBPO0FBUVJHLFlBUlEsb0JBUUM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVpPO0FBYVJDLGFBYlEsbUJBYUFWLENBYkEsRUFhRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBSSxnQkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0EsWUFBTVcsUUFBUVgsRUFBRUUsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS1MsT0FBTCxDQUFhO0FBQ1hILGVBQUssOEJBRE07QUFFWEksa0JBQVEsTUFGRztBQUdYcEMsZ0JBQU07QUFDSnFDLGtCQUFNYixLQUFLckIsS0FBTCxDQUFXK0IsS0FBWCxFQUFrQkcsSUFEcEI7QUFFSkMscUJBQVNkLEtBQUtyQixLQUFMLENBQVcrQixLQUFYLEVBQWtCSSxPQUZ2QjtBQUdKQyxtQkFBT2YsS0FBS3JCLEtBQUwsQ0FBVytCLEtBQVgsRUFBa0JLO0FBSHJCO0FBSEssU0FBYjtBQVNEO0FBMUJPLEs7Ozs7OzZCQTRCRDtBQUNQLFVBQUlmLE9BQU8sSUFBWDtBQUNBSSxjQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBO0FBQ0EscUJBQUtNLE9BQUwsQ0FBYTtBQUNYSCxhQUFLLDJCQURNO0FBRVhJLGdCQUFRLE1BRkc7QUFHWEksaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QmpCLGVBQUtyQixLQUFMLEdBQWFzQyxJQUFJekMsSUFBakI7QUFDQXdCLGVBQUtrQixPQUFMLENBQWE7QUFDWHZDLG1CQUFPc0MsSUFBSXpDO0FBREEsV0FBYjtBQUdBNEIsa0JBQVFDLEdBQVIsQ0FBWVksSUFBSXpDLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0E0QixrQkFBUUMsR0FBUixDQUFZTCxLQUFLckIsS0FBakIsRUFBd0IsT0FBeEI7QUFDRDtBQVZVLE9BQWI7QUFZRDs7OztFQXZFZ0MsZUFBS3dDLEk7O2tCQUFuQjlDLEsiLCJmaWxlIjoiSG9tZXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix6L2m5pePJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHRhYjogWyfmiJHopoHpgInovaYnLCAn5pyA5Y+X5qyi6L+OJywgJ+acgOaWsOS4iuaetiddLFxuICAgIGhvbWVwYWdlOiAwLFxuICAgIEFycmF5OiBbXSxcbiAgICBhcnJheTogW10sXG4gICAgc2VhcmNoOiAnLi4vcGhvdG8vc2VhcmNoLnBuZycsXG4gICAgY29sb3JzZWxlY3Q6ICdibGFjaycsXG4gICAgY29sb3JsaWtlOiAnZ3JleScsXG4gICAgY29sb3JzaGVsdmVzOiAnZ3JleScsXG4gICAgbGluZXNlbGVjdDogJ2JsYWNrJyxcbiAgICBsaW5lbGlrZTogJ3doaXRlJyxcbiAgICBsaW5lc2hlbHZlczogJ3doaXRlJyxcbiAgICBhZHZlcnRpc2luZzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1MjU5NjQ0MCZkaT1iYTYyYmNmN2ZiMTE0Nzk5OTAzYjhhOTY5Y2RlOWIwOCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMueGNhcmltZy5jb20lMkZpbWclMkZuZXdzX3Bob3RvJTJGMjAxNCUyRjA0JTJGMjMlMkZJcmxYNk9ZRmFUMzY5Ni5qcGcnLFxuICAgIHRveW90YTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTM1NjMxMjY3MiZkaT0zNDk1NDhiNzRiM2Q1YWI3ODI3MWZiOTc4ODVhNzk2MCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZ3d3cuY2hlYnouY29tJTJGdXBsb2FkcyUyRmFsbGltZyUyRjE0MTAyNSUyRjEtMTQxMDI1MTI0MTI4MC1MLmpwZycsXG4gICAgZGFzYXV0bzogJ2h0dHA6Ly9waWMxLm9vb3BpYy5jb20vdXBsb2FkZmlsZXBpYy9zaGlsaWFuZy8yMDA5LTEyLTA5L09PT1BJQ19xaHJoXzIwMDkxMjA5NThkY2I0NTIxNGMyNjQyYi5qcGcnLFxuICAgIGhvbmRhOiAnaHR0cDovL2EwLmF0dC5odWRvbmcuY29tLzQ2LzI0LzAxMzAwNTQyNTIwNzgzMTM5OTMwMjQ0NzA0ODU1X3MuanBnJyxcbiAgICBibXc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTc2ODI5ODEmZGk9N2FlYWIxOGFlNzY4ZjMwMTU4NDQ1OTI2OTM3YjE3ZGEmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGYTAuYXR0Lmh1ZG9uZy5jb20lMkY4NCUyRjE0JTJGMDEzMDAwMDA2MzM0NzQxMjcyMjcxNDE1OTUxMzAuanBnJyxcbiAgICBoeXVuZGFpOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzYwNzAxOTk5JmRpPWNjM2FiMmE5NzhhZTdlYmJkMjllMWUxMTAxNTRkOGE0JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5jaGViei5jb20lMkZ1cGxvYWRzJTJGYWxsaW1nJTJGMTQxMDI0JTJGMS0xNDEwMjQyMzU5NTQwLUwuanBnJyxcbiAgICBiZW56OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MzU3ODAwNDM3JmRpPWY1N2U0MzYyNGZhOTc0ZTgxNDQzZjYxM2FlMzUyZmM5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzIub29vcGljLmNvbSUyRjExJTJGMzYlMkYxMiUyRjUxYk9PT1BJQ2I5LmpwZycsXG4gICAgQ291cGU6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjgyNzc1NzM5LDE4MzU3ODcwMDcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHRlc3Rkcml2ZTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTk2ODI1NiZkaT1kZjQyMDFhZDFhZGZlODYxYWRlMGI4Y2Y4OWU2Zjg3MCZpbWd0eXBlPWpwZyZlcj0xJnNyYz1odHRwJTNBJTJGJTJGcGljMTQubmlwaWMuY29tJTJGMjAxMTA1MjklMkY3MDk0NTczXzA5NDczOTc5OTAwMF8yLmpwZycsXG4gICAgY29sbGVjdDogJy4uL3Bob3RvL2NvbGxlY3QucG5nJ1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHRhYihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaG9tZXBhZ2UgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHZhciB3aGVyZSA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgY29uc29sZS5sb2coc2VsZi5ob21lcGFnZSwgJ2FhYWFhJylcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGFiW3doZXJlXSwgJ2JiYmJiYicpXG4gICAgfSxcbiAgICBkcml2ZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2RyaXZlcidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xlZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY3JlYXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBzZWxmLkFycmF5W2luZGV4XS5uYW1lLFxuICAgICAgICAgIGFkZHJlc3M6IHNlbGYuQXJyYXlbaW5kZXhdLmFkZHJlc3MsXG4gICAgICAgICAgcHJpY2U6IHNlbGYuQXJyYXlbaW5kZXhdLnByaWNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygncmVzLmRhdGExMTEnKVxuICAgIC8vIHNlbGYuYXJyYXkgPSBzZWxmLkFycmF5WzNdXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYuQXJyYXkgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIEFycmF5OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5BcnJheSwgJ0FycmF5JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=