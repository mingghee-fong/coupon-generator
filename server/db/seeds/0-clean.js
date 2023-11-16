export async function seed(knex) {
  await knex('coupon_table').del()
  await knex('vendor_table').del()
  await knex('category_table').del()
}
