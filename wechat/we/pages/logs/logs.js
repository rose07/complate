//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    titleIndex: 1,
    logs: [
      {
        name: '题目一', data: [{
          name: 'aaaa',
          open: false
        },
        {
          name: 'aaaa',
          open: true
        },
        {
          name: 'bbbbb',
          open: false
        },
        {
          name: 'ccccccccccccc',
          open: false
        }, {
          name: 'ddddddddddddddddd',
          open: false
        }]
      }

    ]
  },
  onLoad: function () {
    
    this.setData({
      // logs: (wx.getStorageSync('logs') || []).map(log => {
      //   return util.formatTime(new Date(log))
      // })
    })
  },
  //事件处理函数
  bindViewTap: function () {
    this.data.logs.map((it) => {
      it.data.map((item) => {
        if (item.open) {
          this.next()
        }
      })
    })

  },
  next:function(){
    this.setData({
      titleIndex: this.data.titleIndex++,
      logs: [
        {
          name: '题目二', data: [{
            name: 'aaaa',
            open: false
          },
          {
            name: 'aaaa',
            open: false
          },
          {
            name: 'bbbbb',
            open: false
          },
          {
            name: 'ccccccccccccc',
            open: false
          }, {
            name: 'ddddddddddddddddd',
            open: false
          }]
        }

      ]
    })
  },
  buttonNext: function (e) {
    var it = e.target.dataset.it;
    it = it.split('-');
    var logs = this.data.logs;
    logs.map((it) => {
      it.data.map((item) => {
        item.open = false;
      })
    })
    logs[it[0]].data[it[1]].open = true;

    this.setData({
      logs: logs
    })
  }
})
