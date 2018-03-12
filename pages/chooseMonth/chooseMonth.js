// pages/chooseDate/chooseDate.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  if(i <= 9){
    months.push('0' + i)
  }else{
    months.push(i)
  }
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  linkToChooseDay: function () {
    wx.redirectTo({
      url: '../chooseDay/chooseDay'
    })
  },
  
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
  
  },
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  
  },
  //  生命周期函数--监听页面显示
  onShow: function () {
  
  }
})