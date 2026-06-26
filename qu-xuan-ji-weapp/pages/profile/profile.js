// VIP支付页面交互优化
Page({
  data: {
    vipOptions: [
      {type: 1, name: '月卡', price: 19.9},
      {type: 2, name: '季卡', price: 49},
      {type: 3, name: '年卡', price: 168}
    ]
  },
  subscribeVip(e) {
    const type = e.currentTarget.dataset.type;
    wx.request({
      url: 'http://localhost:8080/api/payment/create',
      method: 'POST',
      data: {productType: 'vip', vipType: type},
      success: res => {
        if (res.data.code === 200) {
          wx.showToast({title: '支付成功'});
        }
      }
    });
  }
});