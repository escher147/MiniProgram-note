// pages/apis/apis.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	// wx.showToast
	showToast() {
		wx.showToast({
			title: 'loading...',
			icon: 'loading',
			duration: 3000,
			mask: true
		})
	},
	// wx.showModal
	showModal() {
		wx.showModal({
			title:'提示',
			content: '确认提交？',
			confirmColor: 'green',
			cancelColor: 'red',
			success(res) {
				if (res.confirm) {
					console.log('点击确认');
				}
				if (res.cancel) {
					console.log('点击取消');
				}
			}
		})
	},
	// wx.showLoading, wx.hideLoading
	showLoading() {
		wx.showLoading({
			title: 'loading',
			mask: true
		})
		setTimeout(() => {
			wx.hideLoading({
				success: (res) => {
					console.log('加载成功', res);
				},
			})
		}, 2000)
	},

	// wx.showActionSheet
	showActionSheet() {
		wx.showActionSheet({
			itemList: ['1', '2', '3'],
			// alertText: '请选择',
			success(res) {
				console.log(res);
				switch (res.tapIndex) {
					case 0:
						console.log('选择了第一项');
						break;
					case 1:
						console.log('选择了第二项');
						break;
					case 2:
						console.log('选择了第三项');
						break;
					default:
						break;
				}
			},
		})
	},
	// wx.navigateTo
	handleNaviTo() {
		wx.navigateTo({
			url: '/pages/about/about?name=foo',
		})
	},
	onShareAppMessage: function(options) {
		return {
			title: 'apis',
			path: '/pages/apis/apis',
			imageUrl: 'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed71dc2ab1bc1c8701a08bfbd1?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto'
		}
	}

})