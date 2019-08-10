Tips.isLoading = false;

// 提示工具加载类
export default class Tips {
    constructor() {
        this.isLoading = false;
    }

    static toast(title, duration = 500, icon = "success") {
        wx.showToast({
            title: title,
            icon: icon,
            mask: true,
            duration: duration
        });
    }

    static success(title, duration = 500) {
        setTimeout(() => {
            this.toast(title, duration, "success");
        }, 300);
        if (duration > 0) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, duration);
            });
        }
    }

    /**
 * 错误框
 */
    static error(title, onHide) {
        this.toast(title, duration, "error");
        // 隐藏结束回调
        if (onHide) {
            setTimeout(() => {
                onHide();
            }, 500);
        }
    }

    static showToast(title, onHide, icon = "success") {
        setTimeout(() => {
            this.toast(title, duration, icon);
        }, 300);

        // 隐藏结束回调
        if (onHide) {
            setTimeout(() => {
                onHide();
            }, 500);
        }
    }

    /**
 * 警告框
 */
    static alert(title) {
        wx.showToast({
            title: title,
            image: "../images/alert.png",
            mask: true,
            duration: 1500
        });
    }

    /**
     * 弹出确认窗口
     */
    static confirm(text, payload = {}, title = "提示") {
        return new Promise((resolve, reject) => {
            wx.showModal({
                title: title,
                content: text,
                showCancel: true,
                success: res => {
                    if (res.confirm) {
                        resolve(payload);
                    } else if (res.cancel) {
                        reject(payload);
                    }
                },
                fail: res => {
                    reject(payload);
                }
            });
        });
    }

    /**
     * 弹出加载提示
     */
    static loading(title = "加载中") {
        if (Tips.isLoading) {
            return;
        }
        Tips.isLoading = true;
        wx.showLoading({
            title: title,
            mask: true
        });
    }

    /**
   * 加载完毕
   */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false;
            wx.hideLoading();
        }
    }
    //   分享
    static share(title, url, desc) {
        return {
            title: title,
            path: url,
            desc: desc,
            success: function (res) {
                Tips.toast("分享成功");
            }
        };
    }
}
