import connection from './connection.ts'
import { Coupon } from '../../models/coupons.js'

export async function getAllCoupons(db = connection): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table').select(
      'id',
      'item_name as itemName',
      'value',
      'vendor_id as vendorId',
      'category_id as categoryId',
      'expiration_date as expirationDate',
    )
    console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function getACoupon(id, db = connection): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table').select().where('id', id).first()
    console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}
