Page({
  data: {
    masters: [
      {style: 'yuelao', name: '温柔月老', avatar: '🌸'},
      {style: 'daozhang', name: '古风道长', avatar: '🧘'},
      {style: 'huxian', name: '毒舌狐仙', avatar: '🦊'},
      {style: 'psychologist', name: '现代心理师', avatar: '🧠'}
    ],
    currentMaster: {},
    messages: [],
    inputValue: '',
    sessionId: ''
  },

  onLoad() {
    this.switchMaster({currentTarget: {dataset: {style: 'yuelao'}}});
  },

  switchMaster(e) {
    const style = e.currentTarget.dataset.style;
    const master = this.data.masters.find(m => m.style === style);
    this.setData({ currentMaster: master });
    this.createSession(style);
  },

  createSession(style) {
    wx.request({
      url: '/api/master/session',
      method: 'POST',
      data: { style },
      success: (res) => {
        this.setData({ sessionId: res.data.data.sessionId });
        this.addSystemMessage('大师已上线，随时为您解答～');
      }
    });
  },

  onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },

  sendMessage() {
    if (!this.data.inputValue.trim()) return;

    const userMsg = { id: Date.now(), content: this.data.inputValue, isUser: true };
    this.setData({
      messages: [...this.data.messages, userMsg],
      inputValue: ''
    });

    wx.request({
      url: '/api/master/chat',
      method: 'POST',
      data: {
        sessionId: this.data.sessionId,
        message: userMsg.content
      },
      success: (res) => {
        const aiMsg = { id: Date.now() + 1, content: res.data.data.content || res.data.data, isUser: false };
        this.setData({ messages: [...this.data.messages, aiMsg] });
      }
    });
  },

  addSystemMessage(text) {
    this.setData({
      messages: [...this.data.messages, {id: Date.now(), content: text, isUser: false}]
    });
  }
});