import tab from './tab'
import auth from './auth'
import modal from './modal'
import common from './common'

export default {
  install(app) {
    app.config.globalProperties.$tab = tab
    app.config.globalProperties.$auth = auth
    app.config.globalProperties.$modal = modal
    app.config.globalProperties.$Common = common
  }
}
