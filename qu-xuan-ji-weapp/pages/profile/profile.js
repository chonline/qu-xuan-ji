Page({
  data: {
    userInfo: {},
    isVip: false,
    vipExpire: ''
  },
  onShow() {
    this.loadProfile();
  },
  loadProfile() {
    // 调用后端 /api/user/profile
    wx.request({
      url: getApp().globalData.baseUrl + '/api/user/profile',
      header: { 'X-User-Id': wx.getStorageSync('userId') },
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({ userInfo: res.data.data, isVip: res.data.data.isVip });
        }
      }
    });
  },
  showVipCenter() {
    wx.navigateTo({ url: '/pages/vip/vip' });
  }
});