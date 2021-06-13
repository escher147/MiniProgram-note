// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'mini',
    list: ['red', 'green', 'blue', 'white', 'black'],
    count: 0,
    userInfo: {},
    showImg: [],
    nowTime: new Date().toLocaleString(),
    clicked: false,
    fruit: ['apple', 'orange', 'banana']
  },
  incrementHandler() {
    // 和vue不同，不是响应式
    // this.data.count += 1;
    // console.log(this.data.count);
    this.setData({
      count: this.data.count + 1
    })
  },
  // 获取用户信息
  handleGetUserInfo(event) {
    wx.getUserProfile({
      desc: 'desc',
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新');
  },
  // 选择图片
  chooseImg() {
    const that = this;
    wx.chooseImage({
      success(res) {
        console.log(res);
        that.setData({
          showImg: res.tempFilePaths[0]
        })

      }
    })
  },
  // inpu相关
  inputFocus(event) {
    console.log('获得焦点:', event);
  },
  inputContent(event) {
    console.log('输入内容:', event);
  },
  inputBlur(event) {
    console.log('失去焦点:', event);
  },

  // 点击切换颜色
  switchColor() {
    this.setData({
      clicked: !this.data.clicked
    })
  },

  // 事件参数传递
  fruitClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item  = dataset.item;
    console.log(index, item);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
    // console.log(Object.keys(this.data.userInfo).length);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


})