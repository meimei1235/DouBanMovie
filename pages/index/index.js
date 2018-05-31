//index.js
//获取应用实例
const app = getApp()
const URL = 'http://t.yushu.im/v2/movie'
Page({
   data: {
    imgUrls: [],
    list: [
      {
        title: '正在热映',
        requestUrl: URL+'/in_theaters',
        type: 'in_theaters'
      },
      {
        title: '即将上映',
        requestUrl: URL+'/coming_soon',
        type: 'coming_soon'
      },
      {
        title: 'top250',
        requestUrl: URL+'/top250',
        type: 'top250'
      },
      {
        title: '口碑榜',
        requestUrl: URL+'/weekly',
        type: 'weekly'
      },
      {
        title: '北美票房榜',
        requestUrl: URL+'/us_box',
        type: 'us_box'
      },
      {
        title: '新片榜',
        requestUrl: URL+'/new_movies',
        type: 'new_movies'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  onLoad() {
    var that = this;
    wx.request({
      // url: 'http://t.yushu.im/v2/movie/in_theaters', 
      url: URL+'/in_theaters', 
      data: {
        start: 0,
        count: 5,
        city: '西安'
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.data.subjects) {
          var list = res.data.subjects.slice(0,5);
          var imgLists = [];
          list.forEach( ele => {
            imgLists.push(ele.images.large);
          });
          that.setData({
            imgUrls: imgLists
          })
        }
      }
    })
  }
})
