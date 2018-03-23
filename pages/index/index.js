//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  //事件处理函数
  linkToLogin: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  linkToShopCard: function () {
    wx.navigateTo({
      url: '../shopCard/shopCard'
    })
  },
  linkToShopPerformance: function () {
    wx.navigateTo({
      url: '../shopPerformance/shopPerformance'
    })
  },
  linkToMemberPerformance: function () {
    wx.navigateTo({
      url: '../memberPerformance/memberPerformance'
    })
  },
  linkToMyPerformance: function () {
    wx.navigateTo({
      url: '../myPerformance/myPerformance'
    })
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      success: (res) => {
        // this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        wx.navigateTo({
          url: '../gathering/gathering'
        })
        // that.setData({
        //   show: this.show
        // })
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })
      },
      fail: (res) => {
        // wx.showToast({
        //   title: '失败',
        //   icon: 'success',
        //   duration: 2000
        // })
      },
      complete: (res) => {}
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
