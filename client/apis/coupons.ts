import request from 'superagent'
import type { Coupon } from '../../models/coupons'

const rootUrl = '/api/v1'

export async function getCoupons() {
  // return request.get(rootUrl + '/coupons').then((res) => {
  //   return res.body as Coupon[]
  // })

  const response = await request.get(rootUrl + '/coupons')
  return response.body as Coupon[]
}
