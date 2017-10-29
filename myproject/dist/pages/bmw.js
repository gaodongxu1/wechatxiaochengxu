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
      navigationBarTitleText: '宝马_抽奖活动'
    }, _this.data = {
      show: true,
      refresh: '../photo/refresh.png',
      bmw1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508839462112&di=3b91b411f14964f9fc0cfb913b747150&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130524%2F9885883_165508898000_2.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508839462112&di=0ae0a867f2fd5e0914d12a08b0a5e774&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131128%2F9885883_090328830000_2.jpg',
      numeral: ['http://img4.imgtn.bdimg.com/it/u=3804248273,3060415275&fm=27&gp=0.jpg', 'http://a1.ifengimg.com/autoimg/89/56/1745689_3.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509113906430&di=9e721622b2b2c39f425b3edaf49d2292&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120913%2F6488038_124557200143_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509113906430&di=9e721622b2b2c39f425b3edaf49d2292&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120913%2F6488038_124557200143_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509113906430&di=9e721622b2b2c39f425b3edaf49d2292&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120913%2F6488038_124557200143_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509113906430&di=9e721622b2b2c39f425b3edaf49d2292&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120913%2F6488038_124557200143_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509168569527&di=f8f6b57460af674896bd666d61291c8b&imgtype=0&src=http%3A%2F%2Fpic.qp110.com%2Fnews%2Fpic_tupian%2F2016%2F06%2F20160608100100237.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509168655793&di=1b862042e1e890b63464968b82fcab82&imgtype=0&src=http%3A%2F%2Fimage13-c.poco.cn%2Fmypoco%2Fqing%2F20120707%2F00%2F1554993436041796842_550x393_220.jpg'],
      toasts: ['恭喜您获得宝马1系轿车一辆', '恭喜您获得宝马X6越野车一辆', '谢谢惠顾,再接再厉', '谢谢惠顾,再接再厉', '谢谢惠顾,再接再厉', '谢谢惠顾,再接再厉', '恭喜你获得宝马专用轮胎一个', '恭喜您获得宝马蓝牙耳机一个'],
      awards: '',
      interval: null,
      num: '',
      index: null,
      toast: ''
    }, _this.methods = {
      change: function change() {
        var self = this;
        self.show = false;
      },
      start: function start() {
        var self = this;
        self.index = Math.floor(Math.random() * 8);
        console.log(self.index);
        self.awards = self.numeral[self.index];
        self.toast = self.toasts[self.index];
        self.setData({
          awards: self.numeral[self.index]
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/bmw'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJtdy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvdyIsInJlZnJlc2giLCJibXcxIiwiYm13IiwibnVtZXJhbCIsInRvYXN0cyIsImF3YXJkcyIsImludGVydmFsIiwibnVtIiwiaW5kZXgiLCJ0b2FzdCIsIm1ldGhvZHMiLCJjaGFuZ2UiLCJzZWxmIiwic3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsZUFBUyxzQkFGSjtBQUdMQyxZQUFNLDBNQUhEO0FBSUxDLFdBQUssME1BSkE7QUFLTEMsZUFBUyxDQUNQLHVFQURPLEVBRVAsb0RBRk8sRUFHUCwwTUFITyxFQUlQLDBNQUpPLEVBS1AsME1BTE8sRUFNUCwwTUFOTyxFQU9QLHdOQVBPLEVBUVAsME9BUk8sQ0FMSjtBQWVMQyxjQUFRLENBQ04sZUFETSxFQUVOLGdCQUZNLEVBR04sV0FITSxFQUlOLFdBSk0sRUFLTixXQUxNLEVBTU4sV0FOTSxFQU9OLGVBUE0sRUFRTixlQVJNLENBZkg7QUF5QkxDLGNBQVEsRUF6Qkg7QUEwQkxDLGdCQUFVLElBMUJMO0FBMkJMQyxXQUFLLEVBM0JBO0FBNEJMQyxhQUFPLElBNUJGO0FBNkJMQyxhQUFPO0FBN0JGLEssUUErQlBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtiLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FKTztBQUtSYyxXQUxRLG1CQUtBO0FBQ04sWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEtBQUwsR0FBYU0sS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLENBQTNCLENBQWI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sS0FBS0osS0FBakI7QUFDQUksYUFBS1AsTUFBTCxHQUFjTyxLQUFLVCxPQUFMLENBQWFTLEtBQUtKLEtBQWxCLENBQWQ7QUFDQUksYUFBS0gsS0FBTCxHQUFhRyxLQUFLUixNQUFMLENBQVlRLEtBQUtKLEtBQWpCLENBQWI7QUFDQUksYUFBS08sT0FBTCxDQUFhO0FBQ1hkLGtCQUFRTyxLQUFLVCxPQUFMLENBQWFTLEtBQUtKLEtBQWxCO0FBREcsU0FBYjtBQUdEO0FBZE8sSzs7Ozs7NkJBZ0JELENBQ1I7Ozs7RUFwRGdDLGVBQUtZLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoiYm13LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WunemprF/mir3lpZbmtLvliqgnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIHJlZnJlc2g6ICcuLi9waG90by9yZWZyZXNoLnBuZycsXG4gICAgYm13MTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODgzOTQ2MjExMiZkaT0zYjkxYjQxMWYxNDk2NGY5ZmMwY2ZiOTEzYjc0NzE1MCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMyOS5uaXBpYy5jb20lMkYyMDEzMDUyNCUyRjk4ODU4ODNfMTY1NTA4ODk4MDAwXzIuanBnJyxcbiAgICBibXc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg4Mzk0NjIxMTImZGk9MGFlMGE4NjdmMmZkNWUwOTE0ZDEyYTA4YjBhNWU3NzQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzYubmlwaWMuY29tJTJGMjAxMzExMjglMkY5ODg1ODgzXzA5MDMyODgzMDAwMF8yLmpwZycsXG4gICAgbnVtZXJhbDogW1xuICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTM4MDQyNDgyNzMsMzA2MDQxNTI3NSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ExLmlmZW5naW1nLmNvbS9hdXRvaW1nLzg5LzU2LzE3NDU2ODlfMy5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTExMzkwNjQzMCZkaT05ZTcyMTYyMmIyYjJjMzlmNDI1YjNlZGFmNDlkMjI5MiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMyMy5uaXBpYy5jb20lMkYyMDEyMDkxMyUyRjY0ODgwMzhfMTI0NTU3MjAwMTQzXzIuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkxMTM5MDY0MzAmZGk9OWU3MjE2MjJiMmIyYzM5ZjQyNWIzZWRhZjQ5ZDIyOTImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMjMubmlwaWMuY29tJTJGMjAxMjA5MTMlMkY2NDg4MDM4XzEyNDU1NzIwMDE0M18yLmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MTEzOTA2NDMwJmRpPTllNzIxNjIyYjJiMmMzOWY0MjViM2VkYWY0OWQyMjkyJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzIzLm5pcGljLmNvbSUyRjIwMTIwOTEzJTJGNjQ4ODAzOF8xMjQ1NTcyMDAxNDNfMi5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTExMzkwNjQzMCZkaT05ZTcyMTYyMmIyYjJjMzlmNDI1YjNlZGFmNDlkMjI5MiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMyMy5uaXBpYy5jb20lMkYyMDEyMDkxMyUyRjY0ODgwMzhfMTI0NTU3MjAwMTQzXzIuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkxNjg1Njk1MjcmZGk9ZjhmNmI1NzQ2MGFmNjc0ODk2YmQ2NjZkNjEyOTFjOGImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljLnFwMTEwLmNvbSUyRm5ld3MlMkZwaWNfdHVwaWFuJTJGMjAxNiUyRjA2JTJGMjAxNjA2MDgxMDAxMDAyMzcuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkxNjg2NTU3OTMmZGk9MWI4NjIwNDJlMWU4OTBiNjM0NjQ5NjhiODJmY2FiODImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1hZ2UxMy1jLnBvY28uY24lMkZteXBvY28lMkZxaW5nJTJGMjAxMjA3MDclMkYwMCUyRjE1NTQ5OTM0MzYwNDE3OTY4NDJfNTUweDM5M18yMjAuanBnJ1xuICAgIF0sXG4gICAgdG9hc3RzOiBbXG4gICAgICAn5oGt5Zac5oKo6I635b6X5a6d6amsMeezu+i9v+i9puS4gOi+hicsXG4gICAgICAn5oGt5Zac5oKo6I635b6X5a6d6amsWDbotorph47ovabkuIDovoYnLFxuICAgICAgJ+iwouiwouaDoOmhvizlho3mjqXlho3ljoknLFxuICAgICAgJ+iwouiwouaDoOmhvizlho3mjqXlho3ljoknLFxuICAgICAgJ+iwouiwouaDoOmhvizlho3mjqXlho3ljoknLFxuICAgICAgJ+iwouiwouaDoOmhvizlho3mjqXlho3ljoknLFxuICAgICAgJ+aBreWWnOS9oOiOt+W+l+WunemprOS4k+eUqOi9ruiDjuS4gOS4qicsXG4gICAgICAn5oGt5Zac5oKo6I635b6X5a6d6ams6JOd54mZ6ICz5py65LiA5LiqJ1xuICAgIF0sXG4gICAgYXdhcmRzOiAnJyxcbiAgICBpbnRlcnZhbDogbnVsbCxcbiAgICBudW06ICcnLFxuICAgIGluZGV4OiBudWxsLFxuICAgIHRvYXN0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3cgPSBmYWxzZVxuICAgIH0sXG4gICAgc3RhcnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5pbmRleClcbiAgICAgIHNlbGYuYXdhcmRzID0gc2VsZi5udW1lcmFsW3NlbGYuaW5kZXhdXG4gICAgICBzZWxmLnRvYXN0ID0gc2VsZi50b2FzdHNbc2VsZi5pbmRleF1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGF3YXJkczogc2VsZi5udW1lcmFsW3NlbGYuaW5kZXhdXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==