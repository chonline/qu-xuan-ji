Page({
  data: {
    lotteryTypes: [
      { type: 'guanyin', name: '观音灵签' },
      { type: 'zhuge', name: '诸葛神算' },
      { type: 'yuelao', name: '月老姻缘签' }
    ],
    currentType: 'guanyin',
    result: null,
    drawing: false
  },

  onLoad() {
    // Load user profile if needed
  },

  selectType(e) {
    this.setData({ currentType: e.currentTarget.dataset.type });
  },

  drawLottery() {
    this.setData({ drawing: true });
    
    wx.request({
      url: 'https://your-api.com/api/lottery/draw',
      method: 'POST',
      header: { 'X-User-Id': getApp().globalData.userId },
      data: { type: this.data.currentType },
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({ result: res.data.data });
        }
      },
      complete: () => {
        this.setData({ drawing: false });
      }
    });
  },

  drawAgain() {
    this.setData({ result: null });
    this.drawLottery();
  },

  shareResult() {
    // Share logic
    wx.showShareMenu();
  }
});