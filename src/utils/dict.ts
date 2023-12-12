import store from "@/store";
import { getDicts } from "@/api/system/dict/data";
import { Ref, ref, toRefs } from "vue";

/**
 * 获取字典数据
 */
export function useDict(...args: any[]) {
  const res: Ref<any> = ref({});
  return (() => {
    args.forEach(async (dictType: string, index) => {
      res.value[dictType] = [];
      const dicts = await store.dispatch("getDict", dictType);
      if (dicts) {
        res.value[dictType] = dicts;
      } else {
        getDicts(dictType).then((resp) => {
          res.value[dictType] = resp.data.map((p: any) => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass,
          }));
          store.dispatch("setDict", {
            key: dictType,
            value: res.value[dictType],
          });
        });
      }
    });
    return toRefs(res.value);
  })();
}
