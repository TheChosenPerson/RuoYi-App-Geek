import config from "@/config";
import storage from "@/utils/storage";
import constant from "@/utils/constant";
import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { dictStateType, dictType } from "@/types/store";
import { Module } from "vuex";

const baseUrl = config.baseUrl;

const dict: Module<dictStateType, dictStateType> = {
  state: {
    dict: new Array(),
  },
  actions: {
    // 获取字典
    getDict({ state }, _key) {
      if (_key == null && _key == "") {
        return null;
      }
      try {
        for (let i = 0; i < state.dict.length; i++) {
          if (state.dict[i].key == _key) {
            return state.dict[i].value;
          }
        }
      } catch (e) {
        return null;
      }
    },
    // 设置字典
    setDict({ state }, dict: dictType) {
      if (dict.key !== null && dict.key !== "") {
        state.dict.push({
          key: dict.key,
          value: dict.value,
        });
      }
    },
    // 删除字典
    removeDict({ state }, _key) {
      var bln = false;
      try {
        for (let i = 0; i < state.dict.length; i++) {
          if (state.dict[i].key == _key) {
            state.dict.splice(i, 1);
            return true;
          }
        }
      } catch (e) {
        bln = false;
      }
      return bln;
    },
    // 清空字典
    cleanDict({ state }) {
      state.dict = new Array();
    },
    // 初始字典
    initDict() {},
  },
};

export default dict;
