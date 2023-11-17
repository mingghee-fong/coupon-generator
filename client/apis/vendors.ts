import request from 'superagent'
import type { Vendor } from '../../models/vendors'

const rootUrl = '/api/v1'

export async function getVendors() {
  // return request.get(rootUrl + '/coupons').then((res) => {
  //   return res.body as Coupon[]
  // })

  const response = await request.get(rootUrl + '/vendor')
  return response.body as Vendor[]
}
