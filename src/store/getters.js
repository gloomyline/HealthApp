/**
 * Created by Alan on 2017/6/5.
 */
export const isLoading = state => {
  return state.technicians._isLoading
}

export const tabShow = state => {
  return state.common.tabShow
}

export const appStat = state => state.common.appStat
