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
      SearchName: '',
      width: 0,
      height: 0,
      upperleft: '../photo/upperleft.png'
    }, _this.methods = {
      search: function search(e) {
        var self = this;
        self.SearchName = e.detail.value;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/search',
          method: 'POST',
          data: {
            name: self.SearchName
          },
          success: function success(res) {
            self.commodity = res.data;
            self.setData({
              commodity: res.data
            });
            console.log(res.data, 'res.data');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLaod',
    value: function onLaod() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiU2VhcmNoTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidXBwZXJsZWZ0IiwibWV0aG9kcyIsInNlYXJjaCIsImUiLCJzZWxmIiwiZGV0YWlsIiwidmFsdWUiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwibmFtZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb21tb2RpdHkiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxjQUFRLENBSEg7QUFJTEMsaUJBQVc7QUFKTixLLFFBTVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1AsVUFBTCxHQUFrQk0sRUFBRUUsTUFBRixDQUFTQyxLQUEzQjtBQUNBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4QkFETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hiLGdCQUFNO0FBQ0pjLGtCQUFNTixLQUFLUDtBQURQLFdBSEs7QUFNWGMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsaUJBQUtTLFNBQUwsR0FBaUJELElBQUloQixJQUFyQjtBQUNBUSxpQkFBS1UsT0FBTCxDQUFhO0FBQ1hELHlCQUFXRCxJQUFJaEI7QUFESixhQUFiO0FBR0FtQixvQkFBUUMsR0FBUixDQUFZSixJQUFJaEIsSUFBaEIsRUFBc0IsVUFBdEI7QUFDRDtBQVpVLFNBQWI7QUFjRDtBQWxCTyxLOzs7Ozs2QkFvQkQ7QUFDUCxVQUFJUSxPQUFPLElBQVg7QUFDQSxxQkFBS2EsYUFBTCxDQUFtQjtBQUNqQk4sZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLTCxNQUFMLEdBQWNhLElBQUlNLFlBQWxCO0FBQ0FkLGVBQUtOLEtBQUwsR0FBYWMsSUFBSU8sV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdENnQyxlQUFLQyxJOztrQkFBbkIzQixLIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHovabml48nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgU2VhcmNoTmFtZTogJycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHVwcGVybGVmdDogJy4uL3Bob3RvL3VwcGVybGVmdC5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzZWFyY2goZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLlNlYXJjaE5hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3NlYXJjaCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogc2VsZi5TZWFyY2hOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuY29tbW9kaXR5ID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgY29tbW9kaXR5OiByZXMuZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTGFvZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=