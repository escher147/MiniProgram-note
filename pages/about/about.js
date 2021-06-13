// pages/about/about.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 从home页面跳转过来时由url传递的数据
		console.log(options);
	},
	onUnload() {
		// 返回home时修改首页中的数据
		// 获取当前栈中的页面
		const pages = getCurrentPages();
		console.log(pages);
		// 获取home页面
		const home = pages[pages.length - 2];
		// 修改home的数据
		home.setData({
			count: 50
		})
	}
})