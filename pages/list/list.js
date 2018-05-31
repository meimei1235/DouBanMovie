const URL = 'http://t.yushu.im/v2/movie'

Page({
	data:{
		currentTitle: 'loading...',
		loading: true,
		list: [],
		warnFlag: false
	},
	onLoad:function(options){
		// console.log(options)
		var that = this;
		this.setData({
			currentTitle: options.title
		});
		if (options.type == "weekly" || options.type == "us_box" || options.type == "new_movies") {
			this.setData({
				warnFlag: true,
				loading: false
			});
		} else {
			// var url = 'http://t.yushu.im/v2/movie/'+options.type;
			var url = URL+'/'+options.type;
			wx.request({
				url: url,
				data: [],
				header: {
			        'content-type': 'application/json'
			    },
			    success: function(res) {
			    	// console.log(res.data.subjects);
			    	that.setData({
			    		list: res.data.subjects,
			    		loading: false
			    	})
			    }
			})
		}
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		wx.showNavigationBarLoading() 
	    /*setTimeout(function(){
	      // complete
	      wx.hideNavigationBarLoading() //完成停止加载
	      wx.stopPullDownRefresh() //停止下拉刷新
	    },1500);*/
	},
	onReachBottom:function(){
		
	}
})		