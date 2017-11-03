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
      AstonMartin: 'http://img3.imgtn.bdimg.com/it/u=3953604106,2693623020&fm=214&gp=0.jpg',
      height: 0,
      width: 0,
      elect: '../photo/round.png'
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
        // const index = e.currentTarget.id
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIkFycmF5IiwiQXN0b25NYXJ0aW4iLCJoZWlnaHQiLCJ3aWR0aCIsImVsZWN0IiwibWV0aG9kcyIsInNlbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJzZXREYXRhIiwibW92ZSIsInNlbGVjdGVkIiwiaSIsImxlbmd0aCIsInB1c2giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLG1CQUNFLHdFQUhHO0FBSUxDLGNBQVEsQ0FKSDtBQUtMQyxhQUFPLENBTEY7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsWUFBSVgsUUFBUVEsS0FBS1IsS0FBakI7QUFDQSxZQUFNSSxRQUFRSixNQUFNUyxLQUFOLEVBQWFMLEtBQTNCO0FBQ0FKLGNBQU1TLEtBQU4sRUFBYUwsS0FBYixHQUFxQixDQUFDQSxLQUF0QjtBQUNBSSxhQUFLSSxPQUFMLENBQWE7QUFDWFosaUJBQU9BO0FBREksU0FBYjtBQUdELE9BVk87QUFXUmEsVUFYUSxnQkFXSE4sQ0FYRyxFQVdBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSU0sV0FBVyxFQUFmO0FBQ0E7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsS0FBS1IsS0FBTCxDQUFXZ0IsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLGNBQUlQLEtBQUtSLEtBQUwsQ0FBV2UsQ0FBWCxFQUFjWCxLQUFsQixFQUF5QjtBQUN2QlUscUJBQVNHLElBQVQsQ0FBY1QsS0FBS1IsS0FBTCxDQUFXZSxDQUFYLEVBQWNKLEVBQTVCO0FBQ0Q7QUFDRjtBQUNELHVCQUFLTyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4QkFETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hyQixnQkFBTTtBQUNKWSxnQkFBSUc7QUFEQTtBQUhLLFNBQWI7QUFPRDtBQTNCTyxLOzs7Ozs2QkE2QkQ7QUFDUCxVQUFJTixPQUFPLElBQVg7QUFDQSxxQkFBS2EsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYZixlQUFLTixNQUFMLEdBQWNxQixJQUFJQyxZQUFsQjtBQUNBaEIsZUFBS0wsS0FBTCxHQUFhb0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLUCxPQUFMLENBQWE7QUFDWEMsYUFBSyw4QkFETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hFLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJmLGVBQUtSLEtBQUwsR0FBYXVCLElBQUl4QixJQUFqQjtBQUNBMkIsa0JBQVFDLEdBQVIsQ0FBWUosSUFBSXhCLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0FTLGVBQUtJLE9BQUwsQ0FBYTtBQUNYWixtQkFBT3VCLElBQUl4QjtBQURBLFdBQWI7QUFHRDtBQVRVLE9BQWI7QUFXRDs7OztFQTVEZ0MsZUFBSzZCLEk7O2tCQUFuQmhDLEsiLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlLbol48nXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgQXJyYXk6IFtdLFxuICAgIEFzdG9uTWFydGluOlxuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM5NTM2MDQxMDYsMjY5MzYyMzAyMCZmbT0yMTQmZ3A9MC5qcGcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBlbGVjdDogJy4uL3Bob3RvL3JvdW5kLnBuZydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBzZWxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgbGV0IEFycmF5ID0gc2VsZi5BcnJheVxuICAgICAgY29uc3QgZWxlY3QgPSBBcnJheVtpbmRleF0uZWxlY3RcbiAgICAgIEFycmF5W2luZGV4XS5lbGVjdCA9ICFlbGVjdFxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgQXJyYXk6IEFycmF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgbW92ZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBzZWxlY3RlZCA9IFtdXG4gICAgICAvLyBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLkFycmF5W2ldLmVsZWN0KSB7XG4gICAgICAgICAgc2VsZWN0ZWQucHVzaChzZWxmLkFycmF5W2ldLmlkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZGVsZXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZWN0ZWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLkFycmF5ID0gcmVzLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgQXJyYXk6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19