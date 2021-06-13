// app.js
const TOKEN = 'token';
App({
  globalData: {
    token: ''
  },
  onLaunch() {
    // 从storage中取出token
   const token =  wx.getStorageSync(TOKEN);
    // 判断是否有token 
   if (token && token.length !== 0) {
      // 验证token是否过期
      this.check_token(token) 
   } else {
    //  弱token无效则重新登录
     this.login();
   }
  },
  check_token(token) {
    console.log('验证token');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: res => {
        console.log(res);
        if (!res.data.errCode) {
          console.log('token有效');
          this.globalData.token = token;
        } else {
          this.login();
        }
      },
      fail: err => {
        console.log(err);
      }
    })
  },
  login() {
     console.log('登录');
     wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res);
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          method: 'POST',
          success: res => {
            // console.log(res);
            const token = res.data.token;
            // 将token保存到globalData中
            this.globalData.token = token;
            // 将token存储到本地
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
  
 
})
