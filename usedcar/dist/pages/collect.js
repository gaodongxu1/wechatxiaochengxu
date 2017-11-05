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
      navigationBarTitleText: '我的收藏'
    }, _this.data = {
      Array: [],
      elect: '../photo/round.png',
      AstonMartin: 'http://img3.imgtn.bdimg.com/it/u=3953604106,2693623020&fm=214&gp=0.jpg',
      height: 0,
      width: 0
    }, _this.methods = {
      select: function select(e) {
        var self = this;
        var index = e.currentTarget.id;
        var Array = self.Array;
        var elect = Array[index].elect;
        Array[index].elect = !elect;
        self.setData({
          Array: Array
        });
      },
      move: function move(e) {
        var self = this;
        var selected = [];
        for (var i = 0; i < self.Array.length; i++) {
          if (self.Array[i].elect) {
            selected.push(self.Array[i].id);
          }
        }
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/delete',
          method: 'POST',
          data: {
            id: selected
          }
        });
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/select',
          method: 'POST',
          success: function success(res) {
            self.Array = res.data;
            console.log(res.data, 'res.data');
            self.setData({
              Array: res.data
            });
          }
        });
      },
      zoom: function zoom() {}
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
        url: 'http://127.0.0.1:7001/select',
        method: 'POST',
        success: function success(res) {
          self.Array = res.data;
          console.log(res.data, 'res.data');
          self.setData({
            Array: res.data
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collect'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIkFycmF5IiwiZWxlY3QiLCJBc3Rvbk1hcnRpbiIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsInNlbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJzZXREYXRhIiwibW92ZSIsInNlbGVjdGVkIiwiaSIsImxlbmd0aCIsInB1c2giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ6b29tIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxhQUFPLG9CQUZGO0FBR0xDLG1CQUNFLHdFQUpHO0FBS0xDLGNBQVEsQ0FMSDtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSxZQUFJWCxRQUFRUSxLQUFLUixLQUFqQjtBQUNBLFlBQU1DLFFBQVFELE1BQU1TLEtBQU4sRUFBYVIsS0FBM0I7QUFDQUQsY0FBTVMsS0FBTixFQUFhUixLQUFiLEdBQXFCLENBQUNBLEtBQXRCO0FBQ0FPLGFBQUtJLE9BQUwsQ0FBYTtBQUNYWixpQkFBT0E7QUFESSxTQUFiO0FBR0QsT0FWTztBQVdSYSxVQVhRLGdCQVdITixDQVhHLEVBV0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJTSxXQUFXLEVBQWY7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsS0FBS1IsS0FBTCxDQUFXZ0IsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLGNBQUlQLEtBQUtSLEtBQUwsQ0FBV2UsQ0FBWCxFQUFjZCxLQUFsQixFQUF5QjtBQUN2QmEscUJBQVNHLElBQVQsQ0FBY1QsS0FBS1IsS0FBTCxDQUFXZSxDQUFYLEVBQWNKLEVBQTVCO0FBQ0Q7QUFDRjtBQUNELHVCQUFLTyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4QkFETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hyQixnQkFBTTtBQUNKWSxnQkFBSUc7QUFEQTtBQUhLLFNBQWI7QUFPQSx1QkFBS0ksT0FBTCxDQUFhO0FBQ1hDLGVBQUssOEJBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCZCxpQkFBS1IsS0FBTCxHQUFhc0IsSUFBSXZCLElBQWpCO0FBQ0F3QixvQkFBUUMsR0FBUixDQUFZRixJQUFJdkIsSUFBaEIsRUFBc0IsVUFBdEI7QUFDQVMsaUJBQUtJLE9BQUwsQ0FBYTtBQUNYWixxQkFBT3NCLElBQUl2QjtBQURBLGFBQWI7QUFHRDtBQVRVLFNBQWI7QUFXRCxPQXJDTztBQXNDUjBCLFVBdENRLGtCQXNDRCxDQUFFO0FBdENELEs7Ozs7OzZCQXdDRDtBQUNQLFVBQUlqQixPQUFPLElBQVg7QUFDQSxxQkFBS2tCLGFBQUwsQ0FBbUI7QUFDakJMLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGQsZUFBS0wsTUFBTCxHQUFjbUIsSUFBSUssWUFBbEI7QUFDQW5CLGVBQUtKLEtBQUwsR0FBYWtCLElBQUlNLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS1YsT0FBTCxDQUFhO0FBQ1hDLGFBQUssOEJBRE07QUFFWEMsZ0JBQVEsTUFGRztBQUdYQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCZCxlQUFLUixLQUFMLEdBQWFzQixJQUFJdkIsSUFBakI7QUFDQXdCLGtCQUFRQyxHQUFSLENBQVlGLElBQUl2QixJQUFoQixFQUFzQixVQUF0QjtBQUNBUyxlQUFLSSxPQUFMLENBQWE7QUFDWFosbUJBQU9zQixJQUFJdkI7QUFEQSxXQUFiO0FBR0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUF2RWdDLGVBQUs4QixJOztrQkFBbkJqQyxLIiwiZmlsZSI6ImNvbGxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5pS26JePJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIEFycmF5OiBbXSxcbiAgICBlbGVjdDogJy4uL3Bob3RvL3JvdW5kLnBuZycsXG4gICAgQXN0b25NYXJ0aW46XG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9Mzk1MzYwNDEwNiwyNjkzNjIzMDIwJmZtPTIxNCZncD0wLmpwZycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VsZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGxldCBBcnJheSA9IHNlbGYuQXJyYXlcbiAgICAgIGNvbnN0IGVsZWN0ID0gQXJyYXlbaW5kZXhdLmVsZWN0XG4gICAgICBBcnJheVtpbmRleF0uZWxlY3QgPSAhZWxlY3RcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIEFycmF5OiBBcnJheVxuICAgICAgfSlcbiAgICB9LFxuICAgIG1vdmUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLkFycmF5W2ldLmVsZWN0KSB7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaChzZWxmLkFycmF5W2ldLmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZGVsZXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZWN0ZWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHNlbGYuQXJyYXkgPSByZXMuZGF0YVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAncmVzLmRhdGEnKVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBBcnJheTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgem9vbSgpIHt9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLkFycmF5ID0gcmVzLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgQXJyYXk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19