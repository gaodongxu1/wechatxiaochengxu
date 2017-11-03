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
      navigationBarTitleText: '试驾测评'
    }, _this.data = {
      Array: {},
      width: 0,
      height: 0,
      videoplay: 0
    }, _this.methods = {
      play: function play(e) {
        // console.log(e, 'aaaaaaa')
        var index = e.currentTarget.id;
        var self = this;
        var a = self.Array[index].videoplay;
        console.log(self.Array[0].videoplay, '1');
        a = a + 1;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/upvideo',
          method: 'POST',
          data: {
            id: self.Array[index].id,
            videoplay: a
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/getvideo',
        method: 'POST',
        success: function success(res) {
          self.Array = res.data;
          self.setData({
            Array: res.data
          });
          console.log(res.data, 'res.data');
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/driver'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiQXJyYXkiLCJ3aWR0aCIsImhlaWdodCIsInZpZGVvcGxheSIsIm1ldGhvZHMiLCJwbGF5IiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImlkIiwic2VsZiIsImEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxhQUFPLENBRkY7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGlCQUFXO0FBSk4sSyxRQU1QQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDRkMsQ0FERSxFQUNDO0FBQ1A7QUFDQSxZQUFNQyxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLElBQUlELEtBQUtWLEtBQUwsQ0FBV08sS0FBWCxFQUFrQkosU0FBMUI7QUFDQVMsZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBS1YsS0FBTCxDQUFXLENBQVgsRUFBY0csU0FBMUIsRUFBcUMsR0FBckM7QUFDQVEsWUFBSUEsSUFBSSxDQUFSO0FBQ0EsdUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLCtCQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGpCLGdCQUFNO0FBQ0pVLGdCQUFJQyxLQUFLVixLQUFMLENBQVdPLEtBQVgsRUFBa0JFLEVBRGxCO0FBRUpOLHVCQUFXUTtBQUZQO0FBSEssU0FBYjtBQVFEO0FBaEJPLEs7Ozs7OzZCQWtCRDtBQUNQLFVBQUlELE9BQU8sSUFBWDtBQUNBLHFCQUFLTyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hULGVBQUtSLE1BQUwsR0FBY2lCLElBQUlDLFlBQWxCO0FBQ0FWLGVBQUtULEtBQUwsR0FBYWtCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS1AsT0FBTCxDQUFhO0FBQ1hDLGFBQUssZ0NBRE07QUFFWEMsZ0JBQVEsTUFGRztBQUdYRSxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCVCxlQUFLVixLQUFMLEdBQWFtQixJQUFJcEIsSUFBakI7QUFDQVcsZUFBS1ksT0FBTCxDQUFhO0FBQ1h0QixtQkFBT21CLElBQUlwQjtBQURBLFdBQWI7QUFHQWEsa0JBQVFDLEdBQVIsQ0FBWU0sSUFBSXBCLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUEvQ2dDLGVBQUt3QixJOztrQkFBbkIzQixLIiwiZmlsZSI6ImRyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor5Xpqb7mtYvor4QnXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgQXJyYXk6IHt9LFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB2aWRlb3BsYXk6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXkgKGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUsICdhYWFhYWFhJylcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBhID0gc2VsZi5BcnJheVtpbmRleF0udmlkZW9wbGF5XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLkFycmF5WzBdLnZpZGVvcGxheSwgJzEnKVxuICAgICAgYSA9IGEgKyAxXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdXB2aWRlbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlbGYuQXJyYXlbaW5kZXhdLmlkLFxuICAgICAgICAgIHZpZGVvcGxheTogYVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2dldHZpZGVvJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLkFycmF5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBBcnJheTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19