export default {
  // 消息提示
  msg(content:string) {
    uni.showToast({
      title: content,
      icon: 'none'
    })
  },
  // 错误消息
  msgError(content:string) {
    uni.showToast({
      title: content,
      icon: 'error'
    })
  },
  // 成功消息
  msgSuccess(content:string) {
    uni.showToast({
      title: content,
      icon: 'success'
    })
  },
  // 隐藏消息
  hideMsg(content:string) {
    uni.hideToast()
  },
  // 弹出提示
  alert(content:string) {
    uni.showModal({
      title: '提示',
      content: content,
      showCancel: false
    })
  },
  // 确认窗体
  confirm(content:string) {
    return new Promise((resolve:Function, reject:Function) => {
      uni.showModal({
        title: '系统提示',
        content: content,
        cancelText: '取消',
        confirmText: '确定',
        success: function(res) {
          if (res.confirm) {
            resolve(res.confirm)
          }
        }
      })
    })
  },
  // 提示信息
  showToast(option: string | object) {
    if (typeof option === "object") {
      uni.showToast(option)
    } else {
      uni.showToast({
        title: option,
        icon: "none",
        duration: 2500
      })
    }
  },
  // 打开遮罩层
  loading(content:string) {
    uni.showLoading({
      title: content
    })
  },
  // 关闭遮罩层
  closeLoading() {
    uni.hideLoading()
  }
}
