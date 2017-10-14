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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJob21lcGFnZSIsIkkiLCJTaG9wcGluZyIsImFzayIsIm1vcmUiLCJjYXJzIiwiY29sb3J3YW50IiwiY29sb3J0cnlvbiIsIm1ldGhvZHMiLCJjaGFuZ2VJbmRpY2F0b3JEb3RzIiwiZSIsInNldERhdGEiLCJpbmRpY2F0b3JEb3RzIiwiY2hhbmdlQXV0b3BsYXkiLCJhdXRvcGxheSIsImludGVydmFsQ2hhbmdlIiwiaW50ZXJ2YWwiLCJkZXRhaWwiLCJ2YWx1ZSIsIndhbnQiLCJzZWxmIiwidHJ5b24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxpQkFESjtBQUVMQyxjQUFRLGlCQUZIO0FBR0xDLGFBQU8saUJBSEY7QUFJTEMsV0FBSyxpQkFKQTtBQUtMQyxXQUFLLGlCQUxBO0FBTUxDLFlBQU0saUJBTkQ7QUFPTEMsYUFBTyxvQkFQRjtBQVFMQyxjQUFRLHFCQVJIO0FBU0xDLGFBQU8saUJBVEY7QUFVTEMsYUFBTyxvQkFWRjtBQVdMQyxnQkFBVSx1QkFYTDtBQVlMQyxTQUFHLGdCQVpFO0FBYUxDLGdCQUFVLHVCQWJMO0FBY0xDLFdBQUssa0JBZEE7QUFlTEMsWUFBTSxtQkFmRDtBQWdCTEMsWUFBTSxDQUNKLHVCQURJLEVBRUosc0JBRkksRUFHSixpQkFISSxDQWhCRDtBQXFCTEMsaUJBQVcsT0FyQk47QUFzQkxDLGtCQUFZO0FBdEJQLEssUUF3QlBDLE8sR0FBVTtBQUNSQywyQkFBcUIsNkJBQVNDLENBQVQsRUFBWTtBQUMvQixhQUFLQyxPQUFMLENBQWE7QUFDWEMseUJBQWUsQ0FBQyxLQUFLdkIsSUFBTCxDQUFVdUI7QUFEZixTQUFiO0FBR0QsT0FMTztBQU1SQyxzQkFBZ0Isd0JBQVNILENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEcsb0JBQVUsQ0FBQyxLQUFLekIsSUFBTCxDQUFVeUI7QUFEVixTQUFiO0FBR0QsT0FWTztBQVdSQyxzQkFBZ0Isd0JBQVNMLENBQVQsRUFBWTtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEssb0JBQVVOLEVBQUVPLE1BQUYsQ0FBU0M7QUFEUixTQUFiO0FBR0QsT0FmTztBQWdCUkMsVUFoQlEsa0JBZ0JEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtkLFNBQUwsR0FBaUIsT0FBakI7QUFDQWMsYUFBS2IsVUFBTCxHQUFrQixPQUFsQjtBQUNELE9BcEJPO0FBcUJSYyxXQXJCUSxtQkFxQkE7QUFDTixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2QsU0FBTCxHQUFpQixPQUFqQjtBQUNBYyxhQUFLYixVQUFMLEdBQWtCLE9BQWxCO0FBQ0Q7QUF6Qk8sSzs7Ozs7NkJBMkJELENBRVI7Ozs7RUF6RGdDLGVBQUtlLEk7O2tCQUFuQnBDLEsiLCJmaWxlIjoic2ltaWxhcldlQ2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHovabml48nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBkYXNhdXRvOiAnLi4vcGhvdG8v5aSn5LyXLmpwZycsXG4gICAgdG95b3RhOiAnLi4vcGhvdG8v5Liw55SwLmpwZycsXG4gICAgaG9uZGE6ICcuLi9waG90by/mnKznlLAuanBnJyxcbiAgICBibXc6ICcuLi9waG90by/lrp3pqawuanBnJyxcbiAgICBraWE6ICcuLi9waG90by/otbfkupouanBnJyxcbiAgICBiZW56OiAnLi4vcGhvdG8v5aWU6amwLmpwZycsXG4gICAgTWF6ZGE6ICcuLi9waG90by9NYXpkYS5qcGcnLFxuICAgIFBhc3NhdDogJy4uL3Bob3RvL1Bhc3NhdC5qcGcnLFxuICAgIGJtd3o0OiAnLi4vcGhvdG8vejQuanBnJyxcbiAgICBDb3VwZTogJy4uL3Bob3RvL0NvdXBlLmpwZycsXG4gICAgaG9tZXBhZ2U6ICcuLi9waG90by9ob21lcGFnZS5wbmcnLFxuICAgIEk6ICcuLi9waG90by9JLnBuZycsXG4gICAgU2hvcHBpbmc6ICcuLi9waG90by9TaG9wcGluZy5wbmcnLFxuICAgIGFzazogJy4uL3Bob3RvL2Fzay5wbmcnLFxuICAgIG1vcmU6ICcuLi9waG90by9tb3JlLnBuZycsXG4gICAgY2FyczogW1xuICAgICAgJy4uL3Bob3RvL21hc2VyYXRpLmpwZycsXG4gICAgICAnLi4vcGhvdG8vZmVycmFyaS5qcGcnLFxuICAgICAgJy4uL3Bob3RvL1I4LmpwZydcbiAgICBdLFxuICAgIGNvbG9yd2FudDogJ2JsYWNrJyxcbiAgICBjb2xvcnRyeW9uOiAnZ3JlZW4nXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VJbmRpY2F0b3JEb3RzOiBmdW5jdGlvbihlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbmRpY2F0b3JEb3RzOiAhdGhpcy5kYXRhLmluZGljYXRvckRvdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGFuZ2VBdXRvcGxheTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXV0b3BsYXk6ICF0aGlzLmRhdGEuYXV0b3BsYXlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnRlcnZhbENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW50ZXJ2YWw6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgd2FudCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnZ3JlZW4nXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnYmFsY2snXG4gICAgfSxcbiAgICB0cnlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvcndhbnQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9ydHJ5b24gPSAnZ3JlZW4nXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcblxuICB9XG59XG4iXX0=