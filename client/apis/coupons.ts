import request from 'superagent'

const rootUrl = '/api/v1'

export function getCoupons(): Promise<string[]> {
  return request.get(rootUrl + '/coupons').then((res) => {
    return res.body.coupons
  })
}

export function getVendors(): Promise<string[]> {
  return request.get(rootUrl + '/vendor').then((res) => {
    return res.body.coupons
  })
}

export function getCategories(): Promise<string[]> {
  return request.get(rootUrl + '/categories').then((res) => {
    return res.body.coupons
  })
}
