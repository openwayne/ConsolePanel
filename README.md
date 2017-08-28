# ConsolePanel
仅用作支付宝小程序调试，方便调试和查看日志


添加css到`app.acss`中

```css
.console-container {
    width: 100%;
    height: 100%;
    position: absolute;
}

.console-show-btn {
    border: 1px solid #CCCCCC;
    border-radius: 60px;
    height: 60px;
    width: 60px;
    display: table;
    text-align: center;
    background-color: darkcyan;
    top: 50%;
    position: absolute;
    right: 0px;
    z-index: 1;
}

.console-show-btn-content {
    display: table-cell;
    vertical-align: middle;
}

.console-panel {
    z-index: 99999;
    width: 100%;
    height: 100%;
    background-color: bisque;
    position: absolute;
    opacity: 0.8;
}

.console-panel-close {
    float: right;
    font-size: 40px;
}

.console-btn {
    display: inline;
    margin: 10px;
}

.console-btn-panel {
    border: 1.5px solid black;
}

.console-line {
    border-top: 1.5px solid black;
}

.console-log-item {
    display: flex;
}

.console-log-error {
    background-color: red;
}

.console-log-warn {
    background-color: orange;
}

```



拷贝 `utils/log.js`到你工程相应目录



拷贝`pages/console.axml`到你工程相应目录下



修改你想要引入的页面js代码

```javascript
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


```



TODO:

---------

- 网络请求的截取与格式化展示
- 降低消耗（此版本消耗很大）

