// 塔罗占卜前端页面逻辑
Page({
  data: { cards: [], interpretation: '' },
  drawTarot() {
    wx.request({ url: '/api/tarot/draw', method: 'POST', success: (res) => this.setData({interpretation: res.data.data}) });
  }
});