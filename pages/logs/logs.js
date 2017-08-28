import { formatTime } from '../../utils/util';

Page({
  data: {
    logs: [],
  },
  onLoad() {
    const { data: { logs } } = my.getStorageSync({ key: 'logs' });
    this.setData({
      logs: logs.map(log => formatTime(new Date(log))),
    });
  },
});
