//logs.js
// const util = require('../../utils/util.js')
const app = getApp()
const URL = 'http://t.yushu.im/v2/movie'

Page({
  data: {
    // logs: []
    loading: true,
    imgUrl: '',
    title: '',
    commit: 0,
    directors: '',
    actors: '',
    summary: '',
    actorList: []
  },
  onLoad: function (option) {
    console.log(option)
    var that = this;
    wx.request({
      // url: "http://t.yushu.im/v2/movie/subject/"+option.id,
      url: URL+"/subject/"+option.id,
      data: {},
      header: {
      'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        // var actorList = res.data.casts.slice(1);
        // console.log(actorList)
        that.setData({
          imgUrl: res.data.images.large,
          title: res.data.title,
          commit: res.data.rating.average,
          directors: res.data.directors[0].name,
          // actors: res.data.casts.slice(1),
          actorList: res.data.casts.slice(1),
          summary: res.data.summary,
          loading: false
        })
      }
    })
    
  }
})
