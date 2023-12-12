import user from '@/store/modules/user'
import dict from '@/store/modules/dict'
import getters from './getters'
import { createStore } from "vuex";
const store = createStore<any>({
  modules: {
    user,
    dict
  },
  getters
});
export default store;