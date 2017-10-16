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
      },

      // onShareTap: function (event) {
      //   let self = this
      //   self.itemList = [
      //     '分享给微信好友',
      //     '分享到朋友圈',
      //     '分享到微博',
      //     '分享到QQ'
      //   ]
      //   // wx.showActionSheet({
      //   //   itemList:itemList,
      //   //   itemcolor: '#405f8',
      //   //   success:function(ree) {
      //   //     wx.showModal ({
      //   //       title: '用户'+itemList [res.tapIndex],
      //   //       content: '用户是否取消?'+res.cancel+'现在无法实现分享功能'
      //   //     })
      //   //   }
      //   // })
      // }
      share: function share() {
        wx.showShareMenu({
          withShareTicket: true
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      // return {
      //   title: '自定义转发标题',
      //   path: '/pages/user?id=123',
      //   success: function(res) {
      //     // 转发成功
      //   },
      //   fail: function(res) {
      //     // 转发失败
      //   }
      // }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Freetestdrive'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZyZWV0ZXN0ZHJpdmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInZpZGVvcyIsInNwb3J0c2NhciIsInBsYXkiLCJSZW5hdWx0IiwiUmVuYXVsdHMiLCJhdHoiLCJmb3J3YXJkaW5nIiwiY29tbWVudGFyaWVzIiwiZGVhbGVyIiwiY2FyaWNvbiIsIm1ldGhvZHMiLCJzZWxmIiwic2hhcmUiLCJ3eCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJyZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxpQkFESDtBQUVMQyxpQkFBVyx3QkFGTjtBQUdMQyxZQUFNLG1CQUhEO0FBSUxDLGVBQVMsRUFKSjtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLFdBQUssRUFOQTtBQU9MQyxrQkFBWSx5QkFQUDtBQVFMQyxvQkFBYywyQkFSVDtBQVNMQyxjQUFRLHFCQVRIO0FBVUxDLGVBQVM7QUFWSixLLFFBWVBDLE8sR0FBVTtBQUNSUixVQURRLGtCQUNEO0FBQ0wsWUFBSVMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLE9BQUw7QUFDQVEsYUFBS04sR0FBTDtBQUNBTSxhQUFLUCxRQUFMO0FBQ0QsT0FOTzs7QUFPUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUSxXQTFCUSxtQkEwQkE7QUFDTkMsV0FBR0MsYUFBSCxDQUFpQjtBQUNmQywyQkFBaUI7QUFERixTQUFqQjtBQUdEO0FBOUJPLEs7Ozs7OzZCQWdDRCxDQUNSOzs7c0NBQ2lCQyxHLEVBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQTdEZ0MsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJGcmVldGVzdGRyaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFjei0ueivlempvidcbiAgfVxuICBkYXRhID0ge1xuICAgIHZpZGVvczogJy4uL3Bob3RvL3YyLm1wNCcsXG4gICAgc3BvcnRzY2FyOiAnLi4vcGhvdG8vc3BvcnRzY2FyLnBuZycsXG4gICAgcGxheTogJy4uL3Bob3RvL3BsYXkucG5nJyxcbiAgICBSZW5hdWx0OiAxMCxcbiAgICBSZW5hdWx0czogNDAsXG4gICAgYXR6OiAyMCxcbiAgICBmb3J3YXJkaW5nOiAnLi4vcGhvdG8vZm9yd2FyZGluZy5wbmcnLFxuICAgIGNvbW1lbnRhcmllczogJy4uL3Bob3RvL2NvbW1lbnRhcmllcy5wbmcnLFxuICAgIGRlYWxlcjogJy4uL3Bob3RvL2RlYWxlci5wbmcnLFxuICAgIGNhcmljb246ICcuLi9waG90by9jYXJpY29uLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuUmVuYXVsdCsrXG4gICAgICBzZWxmLmF0eisrXG4gICAgICBzZWxmLlJlbmF1bHRzKytcbiAgICB9LFxuICAgIC8vIG9uU2hhcmVUYXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBzZWxmLml0ZW1MaXN0ID0gW1xuICAgIC8vICAgICAn5YiG5Lqr57uZ5b6u5L+h5aW95Y+LJyxcbiAgICAvLyAgICAgJ+WIhuS6q+WIsOaci+WPi+WciCcsXG4gICAgLy8gICAgICfliIbkuqvliLDlvq7ljZonLFxuICAgIC8vICAgICAn5YiG5Lqr5YiwUVEnXG4gICAgLy8gICBdXG4gICAgLy8gICAvLyB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgIC8vICAgLy8gICBpdGVtTGlzdDppdGVtTGlzdCxcbiAgICAvLyAgIC8vICAgaXRlbWNvbG9yOiAnIzQwNWY4JyxcbiAgICAvLyAgIC8vICAgc3VjY2VzczpmdW5jdGlvbihyZWUpIHtcbiAgICAvLyAgIC8vICAgICB3eC5zaG93TW9kYWwgKHtcbiAgICAvLyAgIC8vICAgICAgIHRpdGxlOiAn55So5oi3JytpdGVtTGlzdCBbcmVzLnRhcEluZGV4XSxcbiAgICAvLyAgIC8vICAgICAgIGNvbnRlbnQ6ICfnlKjmiLfmmK/lkKblj5bmtog/JytyZXMuY2FuY2VsKyfnjrDlnKjml6Dms5Xlrp7njrDliIbkuqvlip/og70nXG4gICAgLy8gICAvLyAgICAgfSlcbiAgICAvLyAgIC8vICAgfVxuICAgIC8vICAgLy8gfSlcbiAgICAvLyB9XG4gICAgc2hhcmUoKSB7XG4gICAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcbiAgICAvLyAgIHBhdGg6ICcvcGFnZXMvdXNlcj9pZD0xMjMnLFxuICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgIC8vICAgICAvLyDovazlj5HlpLHotKVcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==