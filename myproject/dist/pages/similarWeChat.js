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
      honda: '../photo/本田.jpg',
      bmw: '../photo/宝马.jpg',
      kia: '../photo/起亚.jpg',
      benz: '../photo/奔驰.jpg',
      Mazda: '../photo/Mazda.jpg',
      Passat: '../photo/Passat.jpg',
      bmwz4: '../photo/z4.jpg',
      Coupe: '../photo/Coupe.jpg',
      homepage: '../photo/homepage.png',
      I: '../photo/I.png',
      Shopping: '../photo/Shopping.png',
      ask: '../photo/ask.png',
      more: '../photo/more.png',
      Q3: '../photo/Q3.jpg',
      BYDF6: '../photo/BYDF6.jpg',
      songchart: '../photo/songchart.jpg',
      corolla: '../photo/corolla.jpg',
      cars: ['../photo/maserati.jpg', '../photo/ferrari.jpg', '../photo/R8.jpg'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJob21lcGFnZSIsIkkiLCJTaG9wcGluZyIsImFzayIsIm1vcmUiLCJRMyIsIkJZREY2Iiwic29uZ2NoYXJ0IiwiY29yb2xsYSIsImNhcnMiLCJjb2xvcndhbnQiLCJjb2xvcnRyeW9uIiwibWV0aG9kcyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJlIiwic2V0RGF0YSIsImluZGljYXRvckRvdHMiLCJjaGFuZ2VBdXRvcGxheSIsImF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJpbnRlcnZhbCIsImRldGFpbCIsInZhbHVlIiwid2FudCIsInNlbGYiLCJ0cnlvbiIsIkZyZWV0ZXN0ZHJpdmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsaUJBREo7QUFFTEMsY0FBUSxpQkFGSDtBQUdMQyxhQUFPLGlCQUhGO0FBSUxDLFdBQUssaUJBSkE7QUFLTEMsV0FBSyxpQkFMQTtBQU1MQyxZQUFNLGlCQU5EO0FBT0xDLGFBQU8sb0JBUEY7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxhQUFPLGlCQVRGO0FBVUxDLGFBQU8sb0JBVkY7QUFXTEMsZ0JBQVUsdUJBWEw7QUFZTEMsU0FBRyxnQkFaRTtBQWFMQyxnQkFBVSx1QkFiTDtBQWNMQyxXQUFLLGtCQWRBO0FBZUxDLFlBQU0sbUJBZkQ7QUFnQkxDLFVBQUksaUJBaEJDO0FBaUJMQyxhQUFPLG9CQWpCRjtBQWtCTEMsaUJBQVcsd0JBbEJOO0FBbUJMQyxlQUFTLHNCQW5CSjtBQW9CTEMsWUFBTSxDQUNKLHVCQURJLEVBRUosc0JBRkksRUFHSixpQkFISSxDQXBCRDtBQXlCTEMsaUJBQVcsT0F6Qk47QUEwQkxDLGtCQUFZO0FBMUJQLEssUUE0QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWEMseUJBQWUsQ0FBQyxLQUFLM0IsSUFBTCxDQUFVMkI7QUFEZixTQUFiO0FBR0QsT0FMTztBQU1SQyxzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEcsb0JBQVUsQ0FBQyxLQUFLN0IsSUFBTCxDQUFVNkI7QUFEVixTQUFiO0FBR0QsT0FWTztBQVdSQyxzQkFBZ0Isd0JBQVNMLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEssb0JBQVVOLEVBQUVPLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FmTztBQWdCUkMsVUFoQlEsa0JBZ0JEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtkLFNBQUwsR0FBaUIsT0FBakI7QUFDQWMsYUFBS2IsVUFBTCxHQUFrQixPQUFsQjtBQUNELE9BcEJPO0FBcUJSYyxXQXJCUSxtQkFxQkE7QUFDTixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2QsU0FBTCxHQUFpQixPQUFqQjtBQUNBYyxhQUFLYixVQUFMLEdBQWtCLE9BQWxCO0FBQ0QsT0F6Qk87QUEwQlJlLG1CQTFCUSwyQkEwQlE7QUFDZCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQTlCTyxLOzs7Ozs2QkFnQ0QsQ0FFUjs7OztFQWxFZ0MsZUFBS0MsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJzaW1pbGFyV2VDaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIsei9puaXjydcbiAgfVxuICBkYXRhID0ge1xuICAgIGRhc2F1dG86ICcuLi9waG90by/lpKfkvJcuanBnJyxcbiAgICB0b3lvdGE6ICcuLi9waG90by/kuLDnlLAuanBnJyxcbiAgICBob25kYTogJy4uL3Bob3RvL+acrOeUsC5qcGcnLFxuICAgIGJtdzogJy4uL3Bob3RvL+WunemprC5qcGcnLFxuICAgIGtpYTogJy4uL3Bob3RvL+i1t+S6mi5qcGcnLFxuICAgIGJlbno6ICcuLi9waG90by/lpZTpqbAuanBnJyxcbiAgICBNYXpkYTogJy4uL3Bob3RvL01hemRhLmpwZycsXG4gICAgUGFzc2F0OiAnLi4vcGhvdG8vUGFzc2F0LmpwZycsXG4gICAgYm13ejQ6ICcuLi9waG90by96NC5qcGcnLFxuICAgIENvdXBlOiAnLi4vcGhvdG8vQ291cGUuanBnJyxcbiAgICBob21lcGFnZTogJy4uL3Bob3RvL2hvbWVwYWdlLnBuZycsXG4gICAgSTogJy4uL3Bob3RvL0kucG5nJyxcbiAgICBTaG9wcGluZzogJy4uL3Bob3RvL1Nob3BwaW5nLnBuZycsXG4gICAgYXNrOiAnLi4vcGhvdG8vYXNrLnBuZycsXG4gICAgbW9yZTogJy4uL3Bob3RvL21vcmUucG5nJyxcbiAgICBRMzogJy4uL3Bob3RvL1EzLmpwZycsXG4gICAgQllERjY6ICcuLi9waG90by9CWURGNi5qcGcnLFxuICAgIHNvbmdjaGFydDogJy4uL3Bob3RvL3NvbmdjaGFydC5qcGcnLFxuICAgIGNvcm9sbGE6ICcuLi9waG90by9jb3JvbGxhLmpwZycsXG4gICAgY2FyczogW1xuICAgICAgJy4uL3Bob3RvL21hc2VyYXRpLmpwZycsXG4gICAgICAnLi4vcGhvdG8vZmVycmFyaS5qcGcnLFxuICAgICAgJy4uL3Bob3RvL1I4LmpwZydcbiAgICBdLFxuICAgIGNvbG9yd2FudDogJ2JsYWNrJyxcbiAgICBjb2xvcnRyeW9uOiAnZ3JlZW4nXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgd2FudCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnZ3JlZW4nXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnYmFsY2snXG4gICAgfSxcbiAgICB0cnlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnZ3JlZW4nXG4gICAgfSxcbiAgICBGcmVldGVzdGRyaXZlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9GcmVldGVzdGRyaXZlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn1cbiJdfQ==