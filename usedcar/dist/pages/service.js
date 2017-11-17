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
      navigationBarTitleText: '服务'
    }, _this.data = {
      tab: ['经历', '热点', '保定', '保养', '生活'],
      service: 0,
      search: '../photo/search.png',
      width: 0,
      height: 0,
      advertising: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509352596440&di=ba62bcf7fb114799903b8a969cde9b08&imgtype=0&src=http%3A%2F%2Fpic.xcarimg.com%2Fimg%2Fnews_photo%2F2014%2F04%2F23%2FIrlX6OYFaT3696.jpg',
      tire: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510047764159&di=e862b7d7e21f71eaff36f5419e7658e3&imgtype=0&src=http%3A%2F%2Fpic.qp110.com%2Fnews%2Fpic_tupian%2F2016%2F06%2F20160608100100237.jpg'
    }, _this.methods = {
      tab: function tab(e) {
        var self = this;
        self.service = e.currentTarget.id;
        var where = e.currentTarget.id;
        console.log(self.service, 'aaaaa');
        console.log(self.tab[where], 'bbbbbb');
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/service'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYiIsInNlcnZpY2UiLCJzZWFyY2giLCJ3aWR0aCIsImhlaWdodCIsImFkdmVydGlzaW5nIiwidGlyZSIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIndoZXJlIiwiY29uc29sZSIsImxvZyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQURBO0FBRUxDLGVBQVMsQ0FGSjtBQUdMQyxjQUFRLHFCQUhIO0FBSUxDLGFBQU8sQ0FKRjtBQUtMQyxjQUFRLENBTEg7QUFNTEMsbUJBQWEsMk5BTlI7QUFPTEMsWUFBTTtBQVBELEssUUFTUEMsTyxHQUFVO0FBQ1JQLFNBRFEsZUFDSFEsQ0FERyxFQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLE9BQUwsR0FBZU8sRUFBRUUsYUFBRixDQUFnQkMsRUFBL0I7QUFDQSxZQUFJQyxRQUFRSixFQUFFRSxhQUFGLENBQWdCQyxFQUE1QjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZTCxLQUFLUixPQUFqQixFQUEwQixPQUExQjtBQUNBWSxnQkFBUUMsR0FBUixDQUFZTCxLQUFLVCxHQUFMLENBQVNZLEtBQVQsQ0FBWixFQUE2QixRQUE3QjtBQUNEO0FBUE8sSzs7Ozs7NkJBU0Q7QUFDUCxVQUFJSCxPQUFPLElBQVg7QUFDQSxxQkFBS00sYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLTCxNQUFMLEdBQWNhLElBQUlDLFlBQWxCO0FBQ0FULGVBQUtOLEtBQUwsR0FBYWMsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBOUJnQyxlQUFLQyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6InNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pyN5YqhJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHRhYjogWyfnu4/ljoYnLCAn54Ot54K5JywgJ+S/neWumicsICfkv53lhbsnLCAn55Sf5rS7J10sXG4gICAgc2VydmljZTogMCxcbiAgICBzZWFyY2g6ICcuLi9waG90by9zZWFyY2gucG5nJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgYWR2ZXJ0aXNpbmc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkzNTI1OTY0NDAmZGk9YmE2MmJjZjdmYjExNDc5OTkwM2I4YTk2OWNkZTliMDgmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljLnhjYXJpbWcuY29tJTJGaW1nJTJGbmV3c19waG90byUyRjIwMTQlMkYwNCUyRjIzJTJGSXJsWDZPWUZhVDM2OTYuanBnJyxcbiAgICB0aXJlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTEwMDQ3NzY0MTU5JmRpPWU4NjJiN2Q3ZTIxZjcxZWFmZjM2ZjU0MTllNzY1OGUzJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy5xcDExMC5jb20lMkZuZXdzJTJGcGljX3R1cGlhbiUyRjIwMTYlMkYwNiUyRjIwMTYwNjA4MTAwMTAwMjM3LmpwZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhYiAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNlcnZpY2UgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHZhciB3aGVyZSA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgY29uc29sZS5sb2coc2VsZi5zZXJ2aWNlLCAnYWFhYWEnKVxuICAgICAgY29uc29sZS5sb2coc2VsZi50YWJbd2hlcmVdLCAnYmJiYmJiJylcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==