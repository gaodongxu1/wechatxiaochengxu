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
        var index = e.currentTarget.dataset.index;
        var self = this;
        var a = self.Array[index].videoplay;
        console.log(self.Array[0].videoplay, '1');
        a = a + 1;
        console.log(a, '2');
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/upvideo',
          method: 'POST',
          data: {
            id: self.Array[index].id,
            videoplay: a
            // success: function (res) {
            //   res.data = self.Array
            //   self.setData({
            //     Array: res.data.videoplay
            //   })
            //   console.log(res.data, 'res.data')
            // }
          } });
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
        // method: 'GET',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiQXJyYXkiLCJ3aWR0aCIsImhlaWdodCIsInZpZGVvcGxheSIsIm1ldGhvZHMiLCJwbGF5IiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxmIiwiYSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaWQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxpQkFBVztBQUpOLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0ZDLENBREUsRUFDQztBQUNQLFlBQU1DLFFBQVFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlHLE9BQU8sSUFBWDtBQUNBLFlBQUlDLElBQUlELEtBQUtWLEtBQUwsQ0FBV08sS0FBWCxFQUFrQkosU0FBMUI7QUFDQVMsZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBS1YsS0FBTCxDQUFXLENBQVgsRUFBY0csU0FBMUIsRUFBcUMsR0FBckM7QUFDQVEsWUFBSUEsSUFBSSxDQUFSO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlGLENBQVosRUFBZSxHQUFmO0FBQ0EsdUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLCtCQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGpCLGdCQUFNO0FBQ0prQixnQkFBSVAsS0FBS1YsS0FBTCxDQUFXTyxLQUFYLEVBQWtCVSxFQURsQjtBQUVKZCx1QkFBV1E7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZNLFdBSEssRUFBYjtBQWVEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlELE9BQU8sSUFBWDtBQUNBLHFCQUFLUSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hWLGVBQUtSLE1BQUwsR0FBY2tCLElBQUlDLFlBQWxCO0FBQ0FYLGVBQUtULEtBQUwsR0FBYW1CLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS1IsT0FBTCxDQUFhO0FBQ1hDLGFBQUssZ0NBRE07QUFFWDtBQUNBSSxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCVixlQUFLVixLQUFMLEdBQWFvQixJQUFJckIsSUFBakI7QUFDQVcsZUFBS2EsT0FBTCxDQUFhO0FBQ1h2QixtQkFBT29CLElBQUlyQjtBQURBLFdBQWI7QUFHQWEsa0JBQVFDLEdBQVIsQ0FBWU8sSUFBSXJCLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUF0RGdDLGVBQUt5QixJOztrQkFBbkI1QixLIiwiZmlsZSI6ImRyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor5Xpqb7mtYvor4QnXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgQXJyYXk6IHt9LFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICB2aWRlb3BsYXk6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXkgKGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGEgPSBzZWxmLkFycmF5W2luZGV4XS52aWRlb3BsYXlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuQXJyYXlbMF0udmlkZW9wbGF5LCAnMScpXG4gICAgICBhID0gYSArIDFcbiAgICAgIGNvbnNvbGUubG9nKGEsICcyJylcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91cHZpZGVvJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5BcnJheVtpbmRleF0uaWQsXG4gICAgICAgICAgdmlkZW9wbGF5OiBhXG4gICAgICAgIH1cbiAgICAgICAgLy8gc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyAgIHJlcy5kYXRhID0gc2VsZi5BcnJheVxuICAgICAgICAvLyAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIC8vICAgICBBcnJheTogcmVzLmRhdGEudmlkZW9wbGF5XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgLy8gfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9nZXR2aWRlbycsXG4gICAgICAvLyBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLkFycmF5ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBBcnJheTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19