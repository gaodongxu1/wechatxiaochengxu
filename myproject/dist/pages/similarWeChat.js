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
      dasauto: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4147580671,689854096&fm=27&gp=0.jpg',
      toyota: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735717787&di=8d6c3603419ae312ae42ee808ee25efc&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fauto%2Fpics%2Fhv1%2F26%2F63%2F1765%2F114785216.jpg',
      honda: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1135878436,225409949&fm=27&gp=0.jpg',
      bmw: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508491726102&di=5c817959392d2c077e15d667e9b74a02&imgtype=0&src=http%3A%2F%2Fimg0.pcauto.com.cn%2Fpcauto%2F1108%2F02%2F1589644_3a721c3b7033a6fbd5622599.jpg',
      kia: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735762701&di=347314d63daaa2dea1e149701a2c3ed2&imgtype=0&src=http%3A%2F%2Fwww.btcha.com%2Fuploadfile%2F2015%2F0807%2F20150807102808147.jpg',
      benz: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508735800804&di=537cce927c2668faca4515ac4fd70ca9&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D79b8cdd1cbea15ce41bbe80d833016c5%2F4bed2e738bd4b31cfd8237ef85d6277f9e2ff82c.jpg',
      Mazda: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1828279604,1147942714&fm=27&gp=0.jpg',
      Passat: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2839208880,426618188&fm=27&gp=0.jpg',
      bmwz4: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1955450579,719589159&fm=27&gp=0.jpg',
      Coupe: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=682775739,1835787007&fm=27&gp=0.jpg',
      Q3: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=536353817,2649111440&fm=27&gp=0.jpg',
      BYDF6: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=244129384,2970359811&fm=27&gp=0.jpg',
      songchart: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281112483,3687288800&fm=200&gp=0.jpg',
      corolla: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1005930254,1734777824&fm=27&gp=0.jpg',
      cars: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3506956454,823506059&fm=27&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508248999937&di=9161b94e0e491120904088018eee42f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13a75d3ee1fd03918fa0ecc068.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508248950008&di=e293f3b5ca669891e4bf565138364c08&imgtype=0&src=http%3A%2F%2Fwww.sinaimg.cn%2Fqc%2Fphoto%2F78thgmslivep%2FU2050P33T148D227030F2100DT20080305111926.jpg'],
      colorwant: 'black',
      colortryon: 'green'
    }, _this.methods = {
      changeIndicatorDots: function changeIndicatorDots(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay: function changeAutoplay(e) {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange: function intervalChange(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      want: function want() {
        var self = this;
        self.colorwant = 'green';
        self.colortryon = 'balck';
      },
      tryon: function tryon() {
        var self = this;
        self.colorwant = 'black';
        self.colortryon = 'green';
      },
      Freetestdrive: function Freetestdrive() {
        _wepy2.default.navigateTo({
          url: './Freetestdrive'
        });
      },
      bmw: function bmw() {
        _wepy2.default.navigateTo({
          url: './bmw'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/similarWeChat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbWlsYXJXZUNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhc2F1dG8iLCJ0b3lvdGEiLCJob25kYSIsImJtdyIsImtpYSIsImJlbnoiLCJNYXpkYSIsIlBhc3NhdCIsImJtd3o0IiwiQ291cGUiLCJRMyIsIkJZREY2Iiwic29uZ2NoYXJ0IiwiY29yb2xsYSIsImNhcnMiLCJjb2xvcndhbnQiLCJjb2xvcnRyeW9uIiwibWV0aG9kcyIsImNoYW5nZUluZGljYXRvckRvdHMiLCJlIiwic2V0RGF0YSIsImluZGljYXRvckRvdHMiLCJjaGFuZ2VBdXRvcGxheSIsImF1dG9wbGF5IiwiaW50ZXJ2YWxDaGFuZ2UiLCJpbnRlcnZhbCIsImRldGFpbCIsInZhbHVlIiwid2FudCIsInNlbGYiLCJ0cnlvbiIsIkZyZWV0ZXN0ZHJpdmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsK0ZBREo7QUFFTEMsY0FBUSxzTkFGSDtBQUdMQyxhQUFPLCtGQUhGO0FBSUxDLFdBQUssaU9BSkE7QUFLTEMsV0FBSyxtTkFMQTtBQU1MQyxZQUFNLDhSQU5EO0FBT0xDLGFBQU8sZ0dBUEY7QUFRTEMsY0FBUSwrRkFSSDtBQVNMQyxhQUFPLCtGQVRGO0FBVUxDLGFBQU8sK0ZBVkY7QUFXTEMsVUFBSSwrRkFYQztBQVlMQyxhQUFPLCtGQVpGO0FBYUxDLGlCQUFXLGdHQWJOO0FBY0xDLGVBQVMsZ0dBZEo7QUFlTEMsWUFBTSxDQUNKLCtGQURJLEVBRUosdU9BRkksRUFHSiw0T0FISSxDQWZEO0FBb0JMQyxpQkFBVyxPQXBCTjtBQXFCTEMsa0JBQVk7QUFyQlAsSyxRQXVCUEMsTyxHQUFVO0FBQ1JDLDJCQUFxQiw2QkFBU0MsQ0FBVCxFQUFZO0FBQy9CLGFBQUtDLE9BQUwsQ0FBYTtBQUNYQyx5QkFBZSxDQUFDLEtBQUt0QixJQUFMLENBQVVzQjtBQURmLFNBQWI7QUFHRCxPQUxPO0FBTVJDLHNCQUFnQix3QkFBU0gsQ0FBVCxFQUFZO0FBQzFCLGFBQUtDLE9BQUwsQ0FBYTtBQUNYRyxvQkFBVSxDQUFDLEtBQUt4QixJQUFMLENBQVV3QjtBQURWLFNBQWI7QUFHRCxPQVZPO0FBV1JDLHNCQUFnQix3QkFBU0wsQ0FBVCxFQUFZO0FBQzFCLGFBQUtDLE9BQUwsQ0FBYTtBQUNYSyxvQkFBVU4sRUFBRU8sTUFBRixDQUFTQztBQURSLFNBQWI7QUFHRCxPQWZPO0FBZ0JSQyxVQWhCUSxrQkFnQkQ7QUFDTCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS2QsU0FBTCxHQUFpQixPQUFqQjtBQUNBYyxhQUFLYixVQUFMLEdBQWtCLE9BQWxCO0FBQ0QsT0FwQk87QUFxQlJjLFdBckJRLG1CQXFCQTtBQUNOLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLZCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FjLGFBQUtiLFVBQUwsR0FBa0IsT0FBbEI7QUFDRCxPQXpCTztBQTBCUmUsbUJBMUJRLDJCQTBCUTtBQUNkLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BOUJPO0FBK0JSOUIsU0EvQlEsaUJBK0JGO0FBQ0osdUJBQUs2QixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbkNPLEs7Ozs7OzZCQXFDRCxDQUVSOzs7O0VBbEVnQyxlQUFLQyxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6InNpbWlsYXJXZUNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix6L2m5pePJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgZGFzYXV0bzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MTQ3NTgwNjcxLDY4OTg1NDA5NiZmbT0yNyZncD0wLmpwZycsXG4gICAgdG95b3RhOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4NzM1NzE3Nzg3JmRpPThkNmMzNjAzNDE5YWUzMTJhZTQyZWU4MDhlZTI1ZWZjJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZzEuZ3RpbWcuY29tJTJGYXV0byUyRnBpY3MlMkZodjElMkYyNiUyRjYzJTJGMTc2NSUyRjExNDc4NTIxNi5qcGcnLFxuICAgIGhvbmRhOiAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTExMzU4Nzg0MzYsMjI1NDA5OTQ5JmZtPTI3JmdwPTAuanBnJyxcbiAgICBibXc6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg0OTE3MjYxMDImZGk9NWM4MTc5NTkzOTJkMmMwNzdlMTVkNjY3ZTliNzRhMDImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nMC5wY2F1dG8uY29tLmNuJTJGcGNhdXRvJTJGMTEwOCUyRjAyJTJGMTU4OTY0NF8zYTcyMWMzYjcwMzNhNmZiZDU2MjI1OTkuanBnJyxcbiAgICBraWE6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg3MzU3NjI3MDEmZGk9MzQ3MzE0ZDYzZGFhYTJkZWExZTE0OTcwMWEyYzNlZDImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGd3d3LmJ0Y2hhLmNvbSUyRnVwbG9hZGZpbGUlMkYyMDE1JTJGMDgwNyUyRjIwMTUwODA3MTAyODA4MTQ3LmpwZycsXG4gICAgYmVuejogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODczNTgwMDgwNCZkaT01MzdjY2U5MjdjMjY2OGZhY2E0NTE1YWM0ZmQ3MGNhOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZjLmhpcGhvdG9zLmJhaWR1LmNvbSUyRnpoaWRhbyUyRndoJTI1M0Q0NTAlMjUyQzYwMCUyRnNpZ24lM0Q3OWI4Y2RkMWNiZWExNWNlNDFiYmU4MGQ4MzMwMTZjNSUyRjRiZWQyZTczOGJkNGIzMWNmZDgyMzdlZjg1ZDYyNzdmOWUyZmY4MmMuanBnJyxcbiAgICBNYXpkYTogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xODI4Mjc5NjA0LDExNDc5NDI3MTQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIFBhc3NhdDogJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yODM5MjA4ODgwLDQyNjYxODE4OCZmbT0yNyZncD0wLmpwZycsXG4gICAgYm13ejQ6ICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTk1NTQ1MDU3OSw3MTk1ODkxNTkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIENvdXBlOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTY4Mjc3NTczOSwxODM1Nzg3MDA3JmZtPTI3JmdwPTAuanBnJyxcbiAgICBRMzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT01MzYzNTM4MTcsMjY0OTExMTQ0MCZmbT0yNyZncD0wLmpwZycsXG4gICAgQllERjY6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjQ0MTI5Mzg0LDI5NzAzNTk4MTEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHNvbmdjaGFydDogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yODExMTI0ODMsMzY4NzI4ODgwMCZmbT0yMDAmZ3A9MC5qcGcnLFxuICAgIGNvcm9sbGE6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTAwNTkzMDI1NCwxNzM0Nzc3ODI0JmZtPTI3JmdwPTAuanBnJyxcbiAgICBjYXJzOiBbXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM1MDY5NTY0NTQsODIzNTA2MDU5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDgyNDg5OTk5MzcmZGk9OTE2MWI5NGUwZTQ5MTEyMDkwNDA4ODAxOGVlZTQyZjImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaW1nc3JjLmJhaWR1LmNvbSUyRmltZ2FkJTJGcGljJTJGaXRlbSUyRjU2MmMxMWRmYTllYzhhMTNhNzVkM2VlMWZkMDM5MThmYTBlY2MwNjguanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDgyNDg5NTAwMDgmZGk9ZTI5M2YzYjVjYTY2OTg5MWU0YmY1NjUxMzgzNjRjMDgmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGd3d3LnNpbmFpbWcuY24lMkZxYyUyRnBob3RvJTJGNzh0aGdtc2xpdmVwJTJGVTIwNTBQMzNUMTQ4RDIyNzAzMEYyMTAwRFQyMDA4MDMwNTExMTkyNi5qcGcnXG4gICAgXSxcbiAgICBjb2xvcndhbnQ6ICdibGFjaycsXG4gICAgY29sb3J0cnlvbjogJ2dyZWVuJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlSW5kaWNhdG9yRG90czogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQXV0b3BsYXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGF1dG9wbGF5OiAhdGhpcy5kYXRhLmF1dG9wbGF5XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW50ZXJ2YWxDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGludGVydmFsOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIHdhbnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3J3YW50ID0gJ2dyZWVuJ1xuICAgICAgc2VsZi5jb2xvcnRyeW9uID0gJ2JhbGNrJ1xuICAgIH0sXG4gICAgdHJ5b24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3J3YW50ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcnRyeW9uID0gJ2dyZWVuJ1xuICAgIH0sXG4gICAgRnJlZXRlc3Rkcml2ZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vRnJlZXRlc3Rkcml2ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBibXcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2JtdydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcblxuICB9XG59XG4iXX0=