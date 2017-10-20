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
      dasauto: '../photo/大众.jpg',
      toyota: '../photo/丰田.jpg',
      honda: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1135878436,225409949&fm=27&gp=0.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491726102&di=5c817959392d2c077e15d667e9b74a02&imgtype=0&src=http%3A%2F%2Fimg0.pcauto.com.cn%2Fpcauto%2F1108%2F02%2F1589644_3a721c3b7033a6fbd5622599.jpg',
      kia: '../photo/起亚.jpg',
      benz: '../photo/奔驰.jpg',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJob21lcGFnZSIsIkkiLCJTaG9wcGluZyIsImFzayIsIm1vcmUiLCJRMyIsIkJZREY2Iiwic29uZ2NoYXJ0IiwiY29yb2xsYSIsImNhcnMiLCJjb2xvcndhbnQiLCJjb2xvcnRyeW9uIiwibWV0aG9kcyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJlIiwic2V0RGF0YSIsImluZGljYXRvckRvdHMiLCJjaGFuZ2VBdXRvcGxheSIsImF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJpbnRlcnZhbCIsImRldGFpbCIsInZhbHVlIiwid2FudCIsInNlbGYiLCJ0cnlvbiIsIkZyZWV0ZXN0ZHJpdmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsaUJBREo7QUFFTEMsY0FBUSxpQkFGSDtBQUdMQyxhQUFPLCtGQUhGO0FBSUxDLFdBQUssaU9BSkE7QUFLTEMsV0FBSyxpQkFMQTtBQU1MQyxZQUFNLGlCQU5EO0FBT0xDLGFBQU8sZ0dBUEY7QUFRTEMsY0FBUSwrRkFSSDtBQVNMQyxhQUFPLCtGQVRGO0FBVUxDLGFBQU8sK0ZBVkY7QUFXTEMsZ0JBQVUsdUJBWEw7QUFZTEMsU0FBRyxnQkFaRTtBQWFMQyxnQkFBVSx1QkFiTDtBQWNMQyxXQUFLLGtCQWRBO0FBZUxDLFlBQU0sbUJBZkQ7QUFnQkxDLFVBQUksK0ZBaEJDO0FBaUJMQyxhQUFPLCtGQWpCRjtBQWtCTEMsaUJBQVcsZ0dBbEJOO0FBbUJMQyxlQUFTLGdHQW5CSjtBQW9CTEMsWUFBTSxDQUNKLCtGQURJLEVBRUosdU9BRkksRUFHSiw0T0FISSxDQXBCRDtBQXlCTEMsaUJBQVcsT0F6Qk47QUEwQkxDLGtCQUFZO0FBMUJQLEssUUE0QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWEMseUJBQWUsQ0FBQyxLQUFLM0IsSUFBTCxDQUFVMkI7QUFEZixTQUFiO0FBR0QsT0FMTztBQU1SQyxzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEcsb0JBQVUsQ0FBQyxLQUFLN0IsSUFBTCxDQUFVNkI7QUFEVixTQUFiO0FBR0QsT0FWTztBQVdSQyxzQkFBZ0Isd0JBQVNMLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEssb0JBQVVOLEVBQUVPLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FmTztBQWdCUkMsVUFoQlEsa0JBZ0JEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtkLFNBQUwsR0FBaUIsT0FBakI7QUFDQWMsYUFBS2IsVUFBTCxHQUFrQixPQUFsQjtBQUNELE9BcEJPO0FBcUJSYyxXQXJCUSxtQkFxQkE7QUFDTixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2QsU0FBTCxHQUFpQixPQUFqQjtBQUNBYyxhQUFLYixVQUFMLEdBQWtCLE9BQWxCO0FBQ0QsT0F6Qk87QUEwQlJlLG1CQTFCUSwyQkEwQlE7QUFDZCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQTlCTyxLOzs7Ozs2QkFnQ0QsQ0FFUjs7OztFQWxFZ0MsZUFBS0MsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJzaW1pbGFyV2VDaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIsei9puaXjydcbiAgfVxuICBkYXRhID0ge1xuICAgIGRhc2F1dG86ICcuLi9waG90by/lpKfkvJcuanBnJyxcbiAgICB0b3lvdGE6ICcuLi9waG90by/kuLDnlLAuanBnJyxcbiAgICBob25kYTogJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMTM1ODc4NDM2LDIyNTQwOTk0OSZmbT0yNyZncD0wLmpwZycsXG4gICAgYm13OiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4NDkxNzI2MTAyJmRpPTVjODE3OTU5MzkyZDJjMDc3ZTE1ZDY2N2U5Yjc0YTAyJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZzAucGNhdXRvLmNvbS5jbiUyRnBjYXV0byUyRjExMDglMkYwMiUyRjE1ODk2NDRfM2E3MjFjM2I3MDMzYTZmYmQ1NjIyNTk5LmpwZycsXG4gICAga2lhOiAnLi4vcGhvdG8v6LW35LqaLmpwZycsXG4gICAgYmVuejogJy4uL3Bob3RvL+WllOmpsC5qcGcnLFxuICAgIE1hemRhOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE4MjgyNzk2MDQsMTE0Nzk0MjcxNCZmbT0yNyZncD0wLmpwZycsXG4gICAgUGFzc2F0OiAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4MzkyMDg4ODAsNDI2NjE4MTg4JmZtPTI3JmdwPTAuanBnJyxcbiAgICBibXd6NDogJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xOTU1NDUwNTc5LDcxOTU4OTE1OSZmbT0yNyZncD0wLmpwZycsXG4gICAgQ291cGU6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjgyNzc1NzM5LDE4MzU3ODcwMDcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGhvbWVwYWdlOiAnLi4vcGhvdG8vaG9tZXBhZ2UucG5nJyxcbiAgICBJOiAnLi4vcGhvdG8vSS5wbmcnLFxuICAgIFNob3BwaW5nOiAnLi4vcGhvdG8vU2hvcHBpbmcucG5nJyxcbiAgICBhc2s6ICcuLi9waG90by9hc2sucG5nJyxcbiAgICBtb3JlOiAnLi4vcGhvdG8vbW9yZS5wbmcnLFxuICAgIFEzOiAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTUzNjM1MzgxNywyNjQ5MTExNDQwJmZtPTI3JmdwPTAuanBnJyxcbiAgICBCWURGNjogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNDQxMjkzODQsMjk3MDM1OTgxMSZmbT0yNyZncD0wLmpwZycsXG4gICAgc29uZ2NoYXJ0OiAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4MTExMjQ4MywzNjg3Mjg4ODAwJmZtPTIwMCZncD0wLmpwZycsXG4gICAgY29yb2xsYTogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDA1OTMwMjU0LDE3MzQ3Nzc4MjQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGNhcnM6IFtcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzUwNjk1NjQ1NCw4MjM1MDYwNTkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODI0ODk5OTkzNyZkaT05MTYxYjk0ZTBlNDkxMTIwOTA0MDg4MDE4ZWVlNDJmMiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWdzcmMuYmFpZHUuY29tJTJGaW1nYWQlMkZwaWMlMkZpdGVtJTJGNTYyYzExZGZhOWVjOGExM2E3NWQzZWUxZmQwMzkxOGZhMGVjYzA2OC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODI0ODk1MDAwOCZkaT1lMjkzZjNiNWNhNjY5ODkxZTRiZjU2NTEzODM2NGMwOCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZ3d3cuc2luYWltZy5jbiUyRnFjJTJGcGhvdG8lMkY3OHRoZ21zbGl2ZXAlMkZVMjA1MFAzM1QxNDhEMjI3MDMwRjIxMDBEVDIwMDgwMzA1MTExOTI2LmpwZydcbiAgICBdLFxuICAgIGNvbG9yd2FudDogJ2JsYWNrJyxcbiAgICBjb2xvcnRyeW9uOiAnZ3JlZW4nXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgd2FudCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnZ3JlZW4nXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnYmFsY2snXG4gICAgfSxcbiAgICB0cnlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnZ3JlZW4nXG4gICAgfSxcbiAgICBGcmVldGVzdGRyaXZlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9GcmVldGVzdGRyaXZlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn1cbiJdfQ==