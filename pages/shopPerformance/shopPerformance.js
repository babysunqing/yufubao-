// pages/shopPerformance/shopPerformance.js
let flag = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['预存记录', '门店收入'],
    currentTab: 0,
    showList: false
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  linkToGatheringSuccess: function(){
    wx.navigateTo({
      url: '../gatheringSuccess/gatheringSuccess',
    })
  },
  showList: function () {
    var that = this
    if (flag == true) {
      that.setData({
        showList: true
      })
      flag = false
    } else {
      that.setData({
        showList: false
      })
      flag = true
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})