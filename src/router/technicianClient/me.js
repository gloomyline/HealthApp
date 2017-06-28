/**
 * Created by Alan on 2017/6/26.
 */

'use strict'

import technicianMe from '@/views/technician/me'
import information from '@/views/technician/me/information'
export default {
  path: '/technician/me',
  name: 'technicianMe',
  component: technicianMe,
  children: [
    {
      path: '/information',
      name: 'information',
      component: information
    }
  ]
}
