/** 
 * 通配符比较
 * @param {*} str 待比较的字符串
 * @param {*} pattern 含有*或者?通配符的字符串
 * @returns 
 */
export function wildcardCompare(str: string, pattern: string): boolean {
    const regex = pattern.replace(/[*?]/g, (match) => {
        if (match === '*') {
            return '.*';
        } else if (match === '?') {
            return '.';
        } else {
            return match
        }
    });
    const regexPattern = new RegExp('^' + regex + '$');
    return regexPattern.test(str);
}


// 日期格式化
/**
 * 
 * @param {*} time 时间(Date对象、时间戳、时间字符串)
 * @param {*} pattern 格式模板 默认'{y}-{m}-{d} {h}:{i}:{s}'  y:年 m:月 d:日 h:时 i:分 s:秒 a:星期
 * @returns 按照模板格式的时间字符串
 */
export function parseTime(time: string | Date | number, pattern: string) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date: Date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }

    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: any, key: keyof typeof formatObj) => {
        let value = formatObj[key]
        if (key === 'a') { 
            return ['日', '一', '二', '三', '四', '五', '六'][value] 
        }
        if (result.length > 0 && value < 10) { 
            return '0' + value 
        }
        return String(value || 0)
    })
    return time_str
}

/**
 * 编码请求参数
 * @param params 要编码的参数
 * @returns 
 */
export function tansParams(params:any) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName];
		var part = encodeURIComponent(propName) + "=";
		if (value !== null && typeof (value) !== "undefined") {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && typeof (value[key]) !== 'undefined') {
						let params = propName + '[' + key + ']';
						var subPart = encodeURIComponent(params) + "=";
						result += subPart + encodeURIComponent(value[key]) + "&";
					}
				}
			} else {
				result += part + encodeURIComponent(value) + "&";
			}
		}
	}
	return result
}

/**
 * 解码请求参数
 * @param str 要解码的字符串
 * @returns 
 */
export function untansParams(str:string){
    const params = {}
    const pairs = decodeURIComponent(str).split('&');
    for (const pair of pairs) {
        if(pair == '') continue
        let [k, v] = pair.split('=');
        let o = undefined
        if (k.indexOf('[')) {
            const regex = /(\w+)\[(\w+)\]/;
            const match = k.match(regex);
            if (match) {
                o = match[1];
                k = match[2];
            }
        }
        if(o == undefined){
            // @ts-ignore
            params[k] = v
        }else{
            // @ts-ignore
            if(params[o] == undefined)params[o] = {}
            // @ts-ignore
            params[o][k] = v
        }
    }
    return params
}