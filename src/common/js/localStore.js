/**
 * Created by Alan on 2017/6/7.
 */

let ls = window.localStorage

/**
 * 存储数据至 localStorage 中指定的 store
 * @param id
 * @param key
 * @param value
 * @param storeName
 */
export function saveToLocal (id, key, value, storeName) {
  storeName = storeName || '__technician__'
  let store = ls[storeName]
  if (!store) {
    store = {}
    store[id] = {}
  } else {
    store = JSON.parse(store)
    if (!store[id]) {
      store[id] = {}
    }
  }
  store[id][key] = value
  ls[storeName] = JSON.stringify(store)
}

/**
 * 从 localStorage 中 指定的 store 读取指定 Id 记录
 * @param id
 * @param key
 * @param def
 * @param storeName
 * @return {*}
 */
export function loadFromLocal (id, key, def, storeName) {
  storeName = storeName || '__technician__'
  let store = ls[storeName]
  if (!store) {
    return def
  } else {
    store = JSON.parse(store)
    if (!store[id]) {
      return def
    } else {
      return store[id][key]
    }
  }
}
