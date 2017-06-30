/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import technicianMe from '@/views/technician/me'
import information from '@/views/technician/me/information'
import balance from '@/views/technician/me/balance'
import deposit from '@/views/technician/me/deposit'
import password from '@/views/technician/me/password'
export default {
  path: '/technician/me',
  name: 'technicianMe',
  component: technicianMe,
  children: [
    {
      path: 'information',
      name: 'information',
      component: information
    },
    {
      path: 'balance',
      name: 'balance',
      component: balance,
      children: [
        {
          path: 'deposit',
          name: 'deposit',
          component: deposit
        }
      ]
    },
    {
      path: 'password',
      name: 'password',
      component: password
    }
  ]
}
