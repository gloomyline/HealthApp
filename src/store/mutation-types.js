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

// items
export const TOGGLE_ITEM_DETAIL = 'TOGGLE_ITEM_DETAIL'        // 切换项目详情页显示
export const SELECT_ITEM = 'SELECT_ITEM'                      // 选择项目(套餐)

// orders
export const SEND_ORDER_REQ = 'SEND_ORDER_REQ'                // 下订单请求开始
export const ORDER_REQ_SUCCESS = 'ORDER_REQ_SUCCESS'          // 下单成功
export const RECEIVE_ITEM_LIST = 'RECEIVE_ITEM_LIST'          // 接收项目列表
export const TOGGLE_ORDER = 'TOGGLE_ORDER'                    // 切换订单详情

// users
export const RECEIVE_USRE_INFO = 'RECEIVE_USRE_INFO'          // 接收用户信息
export const RECEIVE_MY_COUPONLISTS = 'RECEIVE_MY_COUPONLISTS'// 接收用户优惠券列表
export const RECEIVE_FAVORITE_LIST = 'RECEIVE_FAVORITE_LIST'  // 接收用户收藏列表
export const ORDER_RESPONSE = 'ORDER_RESPONSE'                // 用户订单确认返回结果
export const OPEN_PHONE_BINDING = 'OPEN_PHONE_BINDING'        // 用户打开绑定手机页面
export const CLOSE_PHONE_BINDING = 'CLOSE_PHONE_BINDING'      // 用户关闭绑定手机页面
export const UPDATE_USER_MOBILE_INFO = 'UPDATE_USER_MOBILE_INFO' // 更新用户绑定手机信息

