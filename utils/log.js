const Log = {
    consoleShowPanel() {
        let tmp = Object.assign({}, this.data.logs);
        tmp.hideConsolePanel = false;
        this.setData({
            logs: tmp
        });
    },
    consoleClosePanel() {
        let tmp = Object.assign({}, this.data.logs);
        tmp.hideConsolePanel = true;
        this.setData({
            logs: tmp
        });
    },
    log(type, data) {
        // TODO 如果未展示，那么只push就好，如果展示，则强制刷一次
        let tmpLog = Object.assign({}, this.data.logs);
        let tmp = tmpLog.data;
        let msg = this.format(data);
        let nowDate = new Date();
        let obj = {
            type,
            time: nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds() + '.' + nowDate.getMilliseconds(),
            msg
        };
        tmp.push(obj);
        this.setData({
            logs: tmpLog
        });
    },
    format(data) {
        if(data.length <= 0) {
            return '';
        }

        let dataDump = [];

        data.forEach((element, idx) => {
            if(typeof element == 'object') {
                dataDump.push(JSON.stringify(element));
            } else {
                dataDump.push(element);
            }
        });

        let pattern = new RegExp("%([1-" + dataDump[0].length + "])", "g");
        return String(dataDump[0]).replace(pattern, (match, index) => {
           return dataDump[index];
        });
    },
    consoleClearLog() {
        this.setData({
            logs: {
                data: [],
                hideConsolePanel: false
            }
        });

    },
    logI(...data) {
        this.log('info', data);
    },
    logW(...data) {
        this.log('warn', data);
    },
    logE(...data) {
        this.log('error', data);
    }
}

export function bind(obj) {
    return Object.assign(Log, obj);
}
