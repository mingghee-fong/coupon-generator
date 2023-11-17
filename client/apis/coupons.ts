import request from 'superagent'

const rootUrl = '/api/v1'


export function getCoupons(): Promise<string[]> {
  return request.get(rootUrl + '/coupons').then((res) => {
    return res.body.coupons
  })
}