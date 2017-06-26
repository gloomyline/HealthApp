/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import technicianHome from '@/views/technician/home'
import technicianOrder from '@/views/technician/order'
import technicianMe from '@/views/technician/me'

export const home = {
  path: '/technician/home',
  name: 'technicianHome',
  component: technicianHome
}

export const order = {
  path: '/technician/order',
  name: 'technicianOrder',
  component: technicianOrder
}

export const me = {
  path: '/technician/me',
  name: 'technicianMe',
  component: technicianMe
}

