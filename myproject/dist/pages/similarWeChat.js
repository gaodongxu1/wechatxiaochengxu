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
      dasauto: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4147580671,689854096&fm=27&gp=0.jpg',
      toyota: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735717787&di=8d6c3603419ae312ae42ee808ee25efc&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fauto%2Fpics%2Fhv1%2F26%2F63%2F1765%2F114785216.jpg',
      honda: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1135878436,225409949&fm=27&gp=0.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491726102&di=5c817959392d2c077e15d667e9b74a02&imgtype=0&src=http%3A%2F%2Fimg0.pcauto.com.cn%2Fpcauto%2F1108%2F02%2F1589644_3a721c3b7033a6fbd5622599.jpg',
      kia: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735762701&di=347314d63daaa2dea1e149701a2c3ed2&imgtype=0&src=http%3A%2F%2Fwww.btcha.com%2Fuploadfile%2F2015%2F0807%2F20150807102808147.jpg',
      benz: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735800804&di=537cce927c2668faca4515ac4fd70ca9&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D79b8cdd1cbea15ce41bbe80d833016c5%2F4bed2e738bd4b31cfd8237ef85d6277f9e2ff82c.jpg',
      Mazda: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1828279604,1147942714&fm=27&gp=0.jpg',
      Passat: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2839208880,426618188&fm=27&gp=0.jpg',
      bmwz4: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1955450579,719589159&fm=27&gp=0.jpg',
      Coupe: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=682775739,1835787007&fm=27&gp=0.jpg',
      homepage: '../photo/homepage.png',
      I: '../photo/I.png',
      Shopping: '../photo/Shopping.png',
      ask: '../photo/ask.png',
      more: '../photo/more.png',
      Q3: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=536353817,2649111440&fm=27&gp=0.jpg',
      BYDF6: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=244129384,2970359811&fm=27&gp=0.jpg',
      songchart: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281112483,3687288800&fm=200&gp=0.jpg',
      corolla: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1005930254,1734777824&fm=27&gp=0.jpg',
      cars: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3506956454,823506059&fm=27&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508248999937&di=9161b94e0e491120904088018eee42f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13a75d3ee1fd03918fa0ecc068.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508248950008&di=e293f3b5ca669891e4bf565138364c08&imgtype=0&src=http%3A%2F%2Fwww.sinaimg.cn%2Fqc%2Fphoto%2F78thgmslivep%2FU2050P33T148D227030F2100DT20080305111926.jpg'],
      colorwant: 'black',
      colortryon: 'green'
    }, _this.methods = {
      changeIndicatorDots: function changeIndicatorDots(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay: function changeAutoplay(e) {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange: function intervalChange(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      want: function want() {
        var self = this;
        self.colorwant = 'green';
        self.colortryon = 'balck';
      },
      tryon: function tryon() {
        var self = this;
        self.colorwant = 'black';
        self.colortryon = 'green';
      },
      Freetestdrive: function Freetestdrive() {
        _wepy2.default.navigateTo({
          url: './Freetestdrive'
        });
      },
      bmw: function bmw() {
        _wepy2.default.navigateTo({
          url: './bmw'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/similarWeChat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJob21lcGFnZSIsIkkiLCJTaG9wcGluZyIsImFzayIsIm1vcmUiLCJRMyIsIkJZREY2Iiwic29uZ2NoYXJ0IiwiY29yb2xsYSIsImNhcnMiLCJjb2xvcndhbnQiLCJjb2xvcnRyeW9uIiwibWV0aG9kcyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJlIiwic2V0RGF0YSIsImluZGljYXRvckRvdHMiLCJjaGFuZ2VBdXRvcGxheSIsImF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJpbnRlcnZhbCIsImRldGFpbCIsInZhbHVlIiwid2FudCIsInNlbGYiLCJ0cnlvbiIsIkZyZWV0ZXN0ZHJpdmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsK0ZBREo7QUFFTEMsY0FBUSxzTkFGSDtBQUdMQyxhQUFPLCtGQUhGO0FBSUxDLFdBQUssaU9BSkE7QUFLTEMsV0FBSyxtTkFMQTtBQU1MQyxZQUFNLDhSQU5EO0FBT0xDLGFBQU8sZ0dBUEY7QUFRTEMsY0FBUSwrRkFSSDtBQVNMQyxhQUFPLCtGQVRGO0FBVUxDLGFBQU8sK0ZBVkY7QUFXTEMsZ0JBQVUsdUJBWEw7QUFZTEMsU0FBRyxnQkFaRTtBQWFMQyxnQkFBVSx1QkFiTDtBQWNMQyxXQUFLLGtCQWRBO0FBZUxDLFlBQU0sbUJBZkQ7QUFnQkxDLFVBQUksK0ZBaEJDO0FBaUJMQyxhQUFPLCtGQWpCRjtBQWtCTEMsaUJBQVcsZ0dBbEJOO0FBbUJMQyxlQUFTLGdHQW5CSjtBQW9CTEMsWUFBTSxDQUNKLCtGQURJLEVBRUosdU9BRkksRUFHSiw0T0FISSxDQXBCRDtBQXlCTEMsaUJBQVcsT0F6Qk47QUEwQkxDLGtCQUFZO0FBMUJQLEssUUE0QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWEMseUJBQWUsQ0FBQyxLQUFLM0IsSUFBTCxDQUFVMkI7QUFEZixTQUFiO0FBR0QsT0FMTztBQU1SQyxzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEcsb0JBQVUsQ0FBQyxLQUFLN0IsSUFBTCxDQUFVNkI7QUFEVixTQUFiO0FBR0QsT0FWTztBQVdSQyxzQkFBZ0Isd0JBQVNMLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEssb0JBQVVOLEVBQUVPLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FmTztBQWdCUkMsVUFoQlEsa0JBZ0JEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtkLFNBQUwsR0FBaUIsT0FBakI7QUFDQWMsYUFBS2IsVUFBTCxHQUFrQixPQUFsQjtBQUNELE9BcEJPO0FBcUJSYyxXQXJCUSxtQkFxQkE7QUFDTixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2QsU0FBTCxHQUFpQixPQUFqQjtBQUNBYyxhQUFLYixVQUFMLEdBQWtCLE9BQWxCO0FBQ0QsT0F6Qk87QUEwQlJlLG1CQTFCUSwyQkEwQlE7QUFDZCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTlCTztBQStCUm5DLFNBL0JRLGlCQStCRjtBQUNKLHVCQUFLa0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQW5DTyxLOzs7Ozs2QkFxQ0QsQ0FFUjs7OztFQXZFZ0MsZUFBS0MsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJzaW1pbGFyV2VDaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIsei9puaXjydcbiAgfVxuICBkYXRhID0ge1xuICAgIGRhc2F1dG86ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDE0NzU4MDY3MSw2ODk4NTQwOTYmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHRveW90YTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODczNTcxNzc4NyZkaT04ZDZjMzYwMzQxOWFlMzEyYWU0MmVlODA4ZWUyNWVmYyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcxLmd0aW1nLmNvbSUyRmF1dG8lMkZwaWNzJTJGaHYxJTJGMjYlMkY2MyUyRjE3NjUlMkYxMTQ3ODUyMTYuanBnJyxcbiAgICBob25kYTogJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMTM1ODc4NDM2LDIyNTQwOTk0OSZmbT0yNyZncD0wLmpwZycsXG4gICAgYm13OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4NDkxNzI2MTAyJmRpPTVjODE3OTU5MzkyZDJjMDc3ZTE1ZDY2N2U5Yjc0YTAyJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZzAucGNhdXRvLmNvbS5jbiUyRnBjYXV0byUyRjExMDglMkYwMiUyRjE1ODk2NDRfM2E3MjFjM2I3MDMzYTZmYmQ1NjIyNTk5LmpwZycsXG4gICAga2lhOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4NzM1NzYyNzAxJmRpPTM0NzMxNGQ2M2RhYWEyZGVhMWUxNDk3MDFhMmMzZWQyJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5idGNoYS5jb20lMkZ1cGxvYWRmaWxlJTJGMjAxNSUyRjA4MDclMkYyMDE1MDgwNzEwMjgwODE0Ny5qcGcnLFxuICAgIGJlbno6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg3MzU4MDA4MDQmZGk9NTM3Y2NlOTI3YzI2NjhmYWNhNDUxNWFjNGZkNzBjYTkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGYy5oaXBob3Rvcy5iYWlkdS5jb20lMkZ6aGlkYW8lMkZ3aCUyNTNENDUwJTI1MkM2MDAlMkZzaWduJTNENzliOGNkZDFjYmVhMTVjZTQxYmJlODBkODMzMDE2YzUlMkY0YmVkMmU3MzhiZDRiMzFjZmQ4MjM3ZWY4NWQ2Mjc3ZjllMmZmODJjLmpwZycsXG4gICAgTWF6ZGE6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTgyODI3OTYwNCwxMTQ3OTQyNzE0JmZtPTI3JmdwPTAuanBnJyxcbiAgICBQYXNzYXQ6ICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjgzOTIwODg4MCw0MjY2MTgxODgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGJtd3o0OiAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE5NTU0NTA1NzksNzE5NTg5MTU5JmZtPTI3JmdwPTAuanBnJyxcbiAgICBDb3VwZTogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT02ODI3NzU3MzksMTgzNTc4NzAwNyZmbT0yNyZncD0wLmpwZycsXG4gICAgaG9tZXBhZ2U6ICcuLi9waG90by9ob21lcGFnZS5wbmcnLFxuICAgIEk6ICcuLi9waG90by9JLnBuZycsXG4gICAgU2hvcHBpbmc6ICcuLi9waG90by9TaG9wcGluZy5wbmcnLFxuICAgIGFzazogJy4uL3Bob3RvL2Fzay5wbmcnLFxuICAgIG1vcmU6ICcuLi9waG90by9tb3JlLnBuZycsXG4gICAgUTM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NTM2MzUzODE3LDI2NDkxMTE0NDAmZm09MjcmZ3A9MC5qcGcnLFxuICAgIEJZREY2OiAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI0NDEyOTM4NCwyOTcwMzU5ODExJmZtPTI3JmdwPTAuanBnJyxcbiAgICBzb25nY2hhcnQ6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjgxMTEyNDgzLDM2ODcyODg4MDAmZm09MjAwJmdwPTAuanBnJyxcbiAgICBjb3JvbGxhOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEwMDU5MzAyNTQsMTczNDc3NzgyNCZmbT0yNyZncD0wLmpwZycsXG4gICAgY2FyczogW1xuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zNTA2OTU2NDU0LDgyMzUwNjA1OSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4MjQ4OTk5OTM3JmRpPTkxNjFiOTRlMGU0OTExMjA5MDQwODgwMThlZWU0MmYyJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZ3NyYy5iYWlkdS5jb20lMkZpbWdhZCUyRnBpYyUyRml0ZW0lMkY1NjJjMTFkZmE5ZWM4YTEzYTc1ZDNlZTFmZDAzOTE4ZmEwZWNjMDY4LmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4MjQ4OTUwMDA4JmRpPWUyOTNmM2I1Y2E2Njk4OTFlNGJmNTY1MTM4MzY0YzA4JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy5zaW5haW1nLmNuJTJGcWMlMkZwaG90byUyRjc4dGhnbXNsaXZlcCUyRlUyMDUwUDMzVDE0OEQyMjcwMzBGMjEwMERUMjAwODAzMDUxMTE5MjYuanBnJ1xuICAgIF0sXG4gICAgY29sb3J3YW50OiAnYmxhY2snLFxuICAgIGNvbG9ydHJ5b246ICdncmVlbidcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICB3YW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yd2FudCA9ICdncmVlbidcbiAgICAgIHNlbGYuY29sb3J0cnlvbiA9ICdiYWxjaydcbiAgICB9LFxuICAgIHRyeW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yd2FudCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3J0cnlvbiA9ICdncmVlbidcbiAgICB9LFxuICAgIEZyZWV0ZXN0ZHJpdmUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL0ZyZWV0ZXN0ZHJpdmUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYm13KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9ibXcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG5cbiAgfVxufVxuIl19