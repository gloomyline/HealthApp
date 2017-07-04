/**
 * Created by Alan on 2017/6/30.
 */

import captainMe from '@/views/captain/me'
import balance from '@/views/captain/me/balance'
export default {
  path: '/captain/me',
  name: 'captainMe',
  component: captainMe,
  children: [
    {
      path: 'balance',
      name: 'balance',
      component: balance
    }
  ]
}
