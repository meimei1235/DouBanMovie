//logs.js
const util = require('../../utils/util.js')
const URL = 'http://t.yushu.im/v2/movie'

Page({
  data: {
    inputValue: '',
    showDelete: false,
    warnFlag: false,
    searchList: [],
    actors: ''
  },
  onLoad: function () {

  },
  bindSearchInput: function(e) {
      // console.log(e)
    if (e.detail.cursor > 0) {
      this.setData({
        showDelete: true,
        inputValue: e.detail.value
      })
    } else {
      this.setData({
        showDelete: false,
        warnFlag: false
      })
    }
  },
  bindSearchDelete: function(e) {
    // console.log(e);
    this.setData({
        showDelete: false,
        inputValue: ""
      })
  },
  search: function(e) {
    // console.log(e.detail.value)
      // var url = "https://douban.uieee.com/v2/movie/search";
      var that = this;

      // var url = "http://t.yushu.im/v2/movie/search";
      var url = URL+"/search";
      wx.request({
        url: url,
        data: {
          /*start: 0,
          count: 20,
          city: '西安',*/
          q: e.detail.value
        },
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data.subjects)
          if (res.data.count == 0) {
            that.setData({
              warnFlag: true
            })
          } else {
            that.setData({
              warnFlag: false,
              searchList: res.data.subjects
            });
            // res.data.
          }
        }
      })
  }
})
