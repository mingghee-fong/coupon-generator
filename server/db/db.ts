import connection from './connection.ts'
import { Coupon } from '../../models/coupons.js'
import { Category } from '../../models/categories.js'

export async function getAllCoupons(db = connection): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table')
      .join('vendor_table', 'vendor_table.vendor_id', 'coupon_table.vendor_id')
      .join(
        'category_table',
        'category_table.category_id',
        'coupon_table.category_id',
      )
      .select(
        'id',
        'item_name as itemName',
        'value',
        'vendor_table.vendor_id as vendorId',
        'category_table.category_id as categoryId',
        'expiration_date as expirationDate',
        'vendor_name as vendorName',
        'category_name as categoryName',
      )
    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function addACoupon(coupon, db = connection): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table').insert(coupon)

    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

//updateACoupon
export async function updateACoupon(
  coupon,
  db = connection,
): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table').update(coupon).where('id', coupon.id)

    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

//deleteACoupon

export async function deleteACoupon(
  coupon,
  db = connection,
): Promise<[Coupon]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('coupon_table').delete(coupon).where('id', coupon.id)

    //console.log(result)
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
    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function getAllCatgories(db = connection): Promise<[Category]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('category_table').select(
      'category_id as categoryId',
      'category_name as categoryName',
    )
    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function getAllVendors(db = connection): Promise<[Category]> {
  // TODO: use knex to get the real location data from the database
  try {
    const result = db('vendor_table').select(
      'vendor_id as vendorId',
      'vendor_name as vendorName',
    )
    //console.log(result)
    return result
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}
