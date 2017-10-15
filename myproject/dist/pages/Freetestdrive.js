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
            Amountofplay: 10,
            forwarding: '../photo/forwarding.png',
            commentaries: '../photo/commentaries.png'
        }, _this.methods = {
            play: function play() {
                var self = this;
                self.Amountofplay++;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZyZWV0ZXN0ZHJpdmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInZpZGVvcyIsInNwb3J0c2NhciIsInBsYXkiLCJBbW91bnRvZnBsYXkiLCJmb3J3YXJkaW5nIiwiY29tbWVudGFyaWVzIiwibWV0aG9kcyIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsb0JBQVEsaUJBREw7QUFFSEMsdUJBQVcsd0JBRlI7QUFHSEMsa0JBQU0sbUJBSEg7QUFJSEMsMEJBQWMsRUFKWDtBQUtIQyx3QkFBWSx5QkFMVDtBQU1IQywwQkFBYztBQU5YLFMsUUFRUEMsTyxHQUFVO0FBQ05KLGdCQURNLGtCQUNDO0FBQ0gsb0JBQUlLLE9BQU8sSUFBWDtBQUNBQSxxQkFBS0osWUFBTDtBQUNIO0FBSkssUzs7Ozs7aUNBTUQsQ0FDUjs7OztFQW5COEIsZUFBS0ssSTs7a0JBQW5CWixLIiwiZmlsZSI6IkZyZWV0ZXN0ZHJpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWN6LS56K+V6am+J1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgICB2aWRlb3M6ICcuLi9waG90by92Mi5tcDQnLFxuICAgICAgICBzcG9ydHNjYXI6ICcuLi9waG90by9zcG9ydHNjYXIucG5nJyxcbiAgICAgICAgcGxheTogJy4uL3Bob3RvL3BsYXkucG5nJyxcbiAgICAgICAgQW1vdW50b2ZwbGF5OiAxMCxcbiAgICAgICAgZm9yd2FyZGluZzogJy4uL3Bob3RvL2ZvcndhcmRpbmcucG5nJyxcbiAgICAgICAgY29tbWVudGFyaWVzOiAnLi4vcGhvdG8vY29tbWVudGFyaWVzLnBuZydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgc2VsZi5BbW91bnRvZnBsYXkrK1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG59XG4iXX0=