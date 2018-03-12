// pages/chooseDay/chooseDay.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  if (i <= 9) {
    months.push('0' + i)
  } else {
    months.push(i)
  }
}

for (let i = 1; i <= 31; i++) {
  if (i <= 9) {
    days.push('0' + i)
  } else {
    days.push(i)
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: '02',
    days: days,
    day: '02',
    year: date.getFullYear(),
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    const val = e.detail.value
    // year = this.data.years[val[0]]
    // month = this.data.months[val[1]]
    // day = this.data.days[val[2]]
    const beginTime = this.data.years[val[0]] + '-' + this.data.months[val[1]] + '-' + this.data.days[val[2]]
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      beginTime: beginTime

    })
  },
  linkToChooseMonth: function(){
    wx.redirectTo({
      url: '../chooseMonth/chooseMonth',
    })
    wx.na
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