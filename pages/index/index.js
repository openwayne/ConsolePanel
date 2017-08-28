import { bind } from '../../utils/log';
// 获取应用实例
const app = getApp();

const pageData = {
  data: {
    motto: 'Hello World 4',
    userInfo: {},
    logs: {
        data: [],
        hideConsolePanel: true,
    }
  },
  // 事件处理函数
  bindViewTap() {
    my.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad() {
    console.log('onLoad');
    
    // 调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      console.warn(`==== ${JSON.stringify(userInfo)}`);
      // 更新数据
      this.setData({
        userInfo,
      });
    });
  },
    onShow() {
        setInterval(() => {
            this.randomTest();
        }, 1000);
    },


    randomTest() {
        let t = Math.floor(Math.random(new Date()) * 10 / 3);
        let msg = 'dfasdfasdfasdfasdf %1';

        if(t == 0) {
            this.logI(msg, {a:1, b:2});
        } else if(t == 1) {
            this.logW(msg, t);
        } else {
            this.logE(msg, t);
        }
    },
};

Page(bind(pageData));
