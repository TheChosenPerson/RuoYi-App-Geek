import Tab from './tab'
import Auth from './auth'
import Modal from './modal'
import { App } from 'vue';

export const tab = Tab;
export const auth = Auth;
export const modal = Modal;

export default {
  install(app: App): void {
    app.config.globalProperties.$tab = tab
    app.config.globalProperties.$auth = auth
    app.config.globalProperties.$modal = modal
  }
}
