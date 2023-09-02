const event: { [key: string]: Function } = {}
/** 事件句柄 */
export default {
  /** 绑定一个事件 */
  $on(eventName: string, eventFun: Function) {
    if (event.hasOwnProperty('key1')) {
      throw new Error(`存在事件 => ${eventName}`)
    } else {
      event[eventName] = eventFun
    }
  },
  /** 解绑一个事件 */
  $off(eventName: keyof typeof event) {
    if (event.hasOwnProperty('key1')) {
      delete event[eventName]
    } else {
      throw new Error(`不存在事件 => ${eventName}`)
    }
  },
  /** 触发一个事件 */
  $emit<T>(eventName: keyof typeof event, ...args: any):T {
    if (event.hasOwnProperty('key1')) {
      return event[eventName](...args)
    } else {
      throw new Error(`不存在事件 => ${eventName}`)
    }
  }
}
