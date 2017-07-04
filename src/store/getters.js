/**
 * Created by Alan on 2017/6/5.
 */
export const isLoading = state => {
  let isLoading = state.technicians._isLoading || state.item._isLoading || state.order._isLoading || state.user._isLoading
  return isLoading
}

export const tabShow = state => {
  return state.common.tabShow
}

export const appStat = state => state.common.appStat
