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
      navigationBarTitleText: '免费试驾'
    }, _this.data = {
      videos: '../photo/v2.mp4',
      sportscar: '../photo/sportscar.png',
      play: '../photo/play.png',
      Renault: 10,
      Renaults: 40,
      atz: 20,
      forwarding: '../photo/forwarding.png',
      commentaries: '../photo/commentaries.png',
      dealer: '../photo/dealer.png',
      caricon: '../photo/caricon.png'
    }, _this.methods = {
      play: function play() {
        var self = this;
        self.Renault++;
        self.atz++;
        self.Renaults++;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Freetestdrive'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZyZWV0ZXN0ZHJpdmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInZpZGVvcyIsInNwb3J0c2NhciIsInBsYXkiLCJSZW5hdWx0IiwiUmVuYXVsdHMiLCJhdHoiLCJmb3J3YXJkaW5nIiwiY29tbWVudGFyaWVzIiwiZGVhbGVyIiwiY2FyaWNvbiIsIm1ldGhvZHMiLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsaUJBREg7QUFFTEMsaUJBQVcsd0JBRk47QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxlQUFTLEVBSko7QUFLTEMsZ0JBQVUsRUFMTDtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsa0JBQVkseUJBUFA7QUFRTEMsb0JBQWMsMkJBUlQ7QUFTTEMsY0FBUSxxQkFUSDtBQVVMQyxlQUFTO0FBVkosSyxRQVlQQyxPLEdBQVU7QUFDUlIsVUFEUSxrQkFDRDtBQUNMLFlBQUlTLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixPQUFMO0FBQ0FRLGFBQUtOLEdBQUw7QUFDQU0sYUFBS1AsUUFBTDtBQUNEO0FBTk8sSzs7Ozs7NkJBUUQsQ0FDUjs7OztFQXpCZ0MsZUFBS1EsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJGcmVldGVzdGRyaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFjei0ueivlempvidcbiAgfVxuICBkYXRhID0ge1xuICAgIHZpZGVvczogJy4uL3Bob3RvL3YyLm1wNCcsXG4gICAgc3BvcnRzY2FyOiAnLi4vcGhvdG8vc3BvcnRzY2FyLnBuZycsXG4gICAgcGxheTogJy4uL3Bob3RvL3BsYXkucG5nJyxcbiAgICBSZW5hdWx0OiAxMCxcbiAgICBSZW5hdWx0czogNDAsXG4gICAgYXR6OiAyMCxcbiAgICBmb3J3YXJkaW5nOiAnLi4vcGhvdG8vZm9yd2FyZGluZy5wbmcnLFxuICAgIGNvbW1lbnRhcmllczogJy4uL3Bob3RvL2NvbW1lbnRhcmllcy5wbmcnLFxuICAgIGRlYWxlcjogJy4uL3Bob3RvL2RlYWxlci5wbmcnLFxuICAgIGNhcmljb246ICcuLi9waG90by9jYXJpY29uLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuUmVuYXVsdCsrXG4gICAgICBzZWxmLmF0eisrXG4gICAgICBzZWxmLlJlbmF1bHRzKytcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=