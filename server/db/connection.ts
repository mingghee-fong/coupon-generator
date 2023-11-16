import knex from 'knex'
import config from './knexfile.js'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])

export async function getAllCoupons(): Promise<[]> {
  // TODO: use knex to get the real location data from the database
  try{
    return await connection('coupon_table').select()
  } catch (err: any){
    console.log(err.message)
    return err.message
  }
}


export default connection
