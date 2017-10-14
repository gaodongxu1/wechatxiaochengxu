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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJob21lcGFnZSIsIkkiLCJTaG9wcGluZyIsImFzayIsIm1vcmUiLCJRMyIsIkJZREY2Iiwic29uZ2NoYXJ0IiwiY29yb2xsYSIsImNhcnMiLCJjb2xvcndhbnQiLCJjb2xvcnRyeW9uIiwibWV0aG9kcyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJlIiwic2V0RGF0YSIsImluZGljYXRvckRvdHMiLCJjaGFuZ2VBdXRvcGxheSIsImF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJpbnRlcnZhbCIsImRldGFpbCIsInZhbHVlIiwid2FudCIsInNlbGYiLCJ0cnlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLGlCQURKO0FBRUxDLGNBQVEsaUJBRkg7QUFHTEMsYUFBTyxpQkFIRjtBQUlMQyxXQUFLLGlCQUpBO0FBS0xDLFdBQUssaUJBTEE7QUFNTEMsWUFBTSxpQkFORDtBQU9MQyxhQUFPLG9CQVBGO0FBUUxDLGNBQVEscUJBUkg7QUFTTEMsYUFBTyxpQkFURjtBQVVMQyxhQUFPLG9CQVZGO0FBV0xDLGdCQUFVLHVCQVhMO0FBWUxDLFNBQUcsZ0JBWkU7QUFhTEMsZ0JBQVUsdUJBYkw7QUFjTEMsV0FBSyxrQkFkQTtBQWVMQyxZQUFNLG1CQWZEO0FBZ0JMQyxVQUFJLGlCQWhCQztBQWlCTEMsYUFBTyxvQkFqQkY7QUFrQkxDLGlCQUFXLHdCQWxCTjtBQW1CTEMsZUFBUyxzQkFuQko7QUFvQkxDLFlBQU0sQ0FDSix1QkFESSxFQUVKLHNCQUZJLEVBR0osaUJBSEksQ0FwQkQ7QUF5QkxDLGlCQUFXLE9BekJOO0FBMEJMQyxrQkFBWTtBQTFCUCxLLFFBNEJQQyxPLEdBQVU7QUFDUkMsMkJBQXFCLDZCQUFTQyxDQUFULEVBQVk7QUFDL0IsYUFBS0MsT0FBTCxDQUFhO0FBQ1hDLHlCQUFlLENBQUMsS0FBSzNCLElBQUwsQ0FBVTJCO0FBRGYsU0FBYjtBQUdELE9BTE87QUFNUkMsc0JBQWdCLHdCQUFTSCxDQUFULEVBQVk7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hHLG9CQUFVLENBQUMsS0FBSzdCLElBQUwsQ0FBVTZCO0FBRFYsU0FBYjtBQUdELE9BVk87QUFXUkMsc0JBQWdCLHdCQUFTTCxDQUFULEVBQVk7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hLLG9CQUFVTixFQUFFTyxNQUFGLENBQVNDO0FBRFIsU0FBYjtBQUdELE9BZk87QUFnQlJDLFVBaEJRLGtCQWdCRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLZCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FjLGFBQUtiLFVBQUwsR0FBa0IsT0FBbEI7QUFDRCxPQXBCTztBQXFCUmMsV0FyQlEsbUJBcUJBO0FBQ04sWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtkLFNBQUwsR0FBaUIsT0FBakI7QUFDQWMsYUFBS2IsVUFBTCxHQUFrQixPQUFsQjtBQUNEO0FBekJPLEs7Ozs7OzZCQTJCRCxDQUVSOzs7O0VBN0RnQyxlQUFLZSxJOztrQkFBbkJ4QyxLIiwiZmlsZSI6InNpbWlsYXJXZUNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix6L2m5pePJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgZGFzYXV0bzogJy4uL3Bob3RvL+Wkp+S8ly5qcGcnLFxuICAgIHRveW90YTogJy4uL3Bob3RvL+S4sOeUsC5qcGcnLFxuICAgIGhvbmRhOiAnLi4vcGhvdG8v5pys55SwLmpwZycsXG4gICAgYm13OiAnLi4vcGhvdG8v5a6d6amsLmpwZycsXG4gICAga2lhOiAnLi4vcGhvdG8v6LW35LqaLmpwZycsXG4gICAgYmVuejogJy4uL3Bob3RvL+WllOmpsC5qcGcnLFxuICAgIE1hemRhOiAnLi4vcGhvdG8vTWF6ZGEuanBnJyxcbiAgICBQYXNzYXQ6ICcuLi9waG90by9QYXNzYXQuanBnJyxcbiAgICBibXd6NDogJy4uL3Bob3RvL3o0LmpwZycsXG4gICAgQ291cGU6ICcuLi9waG90by9Db3VwZS5qcGcnLFxuICAgIGhvbWVwYWdlOiAnLi4vcGhvdG8vaG9tZXBhZ2UucG5nJyxcbiAgICBJOiAnLi4vcGhvdG8vSS5wbmcnLFxuICAgIFNob3BwaW5nOiAnLi4vcGhvdG8vU2hvcHBpbmcucG5nJyxcbiAgICBhc2s6ICcuLi9waG90by9hc2sucG5nJyxcbiAgICBtb3JlOiAnLi4vcGhvdG8vbW9yZS5wbmcnLFxuICAgIFEzOiAnLi4vcGhvdG8vUTMuanBnJyxcbiAgICBCWURGNjogJy4uL3Bob3RvL0JZREY2LmpwZycsXG4gICAgc29uZ2NoYXJ0OiAnLi4vcGhvdG8vc29uZ2NoYXJ0LmpwZycsXG4gICAgY29yb2xsYTogJy4uL3Bob3RvL2Nvcm9sbGEuanBnJyxcbiAgICBjYXJzOiBbXG4gICAgICAnLi4vcGhvdG8vbWFzZXJhdGkuanBnJyxcbiAgICAgICcuLi9waG90by9mZXJyYXJpLmpwZycsXG4gICAgICAnLi4vcGhvdG8vUjguanBnJ1xuICAgIF0sXG4gICAgY29sb3J3YW50OiAnYmxhY2snLFxuICAgIGNvbG9ydHJ5b246ICdncmVlbidcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZUluZGljYXRvckRvdHM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGluZGljYXRvckRvdHM6ICF0aGlzLmRhdGEuaW5kaWNhdG9yRG90c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNoYW5nZUF1dG9wbGF5OiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdXRvcGxheTogIXRoaXMuZGF0YS5hdXRvcGxheVxuICAgICAgfSlcbiAgICB9LFxuICAgIGludGVydmFsQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnRlcnZhbDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICB3YW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yd2FudCA9ICdncmVlbidcbiAgICAgIHNlbGYuY29sb3J0cnlvbiA9ICdiYWxjaydcbiAgICB9LFxuICAgIHRyeW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yd2FudCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3J0cnlvbiA9ICdncmVlbidcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn1cbiJdfQ==