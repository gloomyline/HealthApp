/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import technicianMe from '@/views/technician/me'
import information from '@/views/technician/me/information'
// import balance from '@views/technician/me/balance'
export default {
  path: '/technician/me',
  name: 'technicianMe',
  component: technicianMe,
  children: [
    {
      path: 'technician/me/information',
      name: 'information',
      component: information
    }
    // {
    //   path: 'technician/me/balance',
    //   name: 'balance',
    //   component: balance
    // }
  ]
}
