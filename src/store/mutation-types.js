/**
 * Created by Alan on 2017/6/5.
 */

// common
export const SEND_REQUEST = 'SEND_REQUEST'                    // 发送请求
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'              // 请求成功
export const REQUEST_FAILURE = 'REQUEST_FAILURE'              // 请求失败
export const CUSTOMER_APP_STATUS = 'CUSTOMER_APP_STATUS'      // 切换app状态到客户端(0: 客户端, 1: 技师端)
export const TECHNICIAN_APP_STATUS = 'TECHNICIAN_APP_STATUS'  // 切换app状态到技师端(0: 客户端, 1: 技师端)
export const CAPTAIN_APP_STATUS = 'CAPTAIN_APP_STATUS'        // 切换app状态到技师端(0: 客户端, 1: 技师端, 2: 领班端)
export const SHOWTAB = 'SHOWTAB'                              // 显示主页导航
export const HIDETAB = 'HIDETAB'                              // 隐藏主页导航

// technicians
export const RECEIVE_TECHLIST = 'RECEIVE_TECHLIST'            // 接受技师列表
export const RECEIVE_TECH = 'RECEIVE_TECH'                    // 接收技师
export const TOGGLE_TECH_DETAIL = 'TOGGLE_TECH_DETAIL'        // 切换技师详情
export const SELECT_TECHNICIAN = 'SELECT_TECHNICIAN'          // 选择技师
export const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE'            // 切换预约
export const SELECT_SUBSCRIBE = 'SELECT_SUBSCRIBE'            // 选择预约技师
export const CONFIRMED_SUBSCRIBE = 'CONFIRMED_SUBSCRIBE'      // 确认预约订单

// orders
export const RECEIVE_ITEM_LIST = 'RECEIVE_ITEM_LIST'          // 接收项目列表
export const TOGGLE_ORDER = 'TOGGLE_ORDER'                    // 切换订单详情

// users
export const RECEIVE_FAVORITE_LIST = 'RECEIVE_FAVORITE_LIST'  // 接收用户收藏列表

