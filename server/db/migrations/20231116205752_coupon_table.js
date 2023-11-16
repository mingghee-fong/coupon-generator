/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('coupon_table', (table) => {
    table.integer('id').primary()
    table.string('value')
    table.string('item_name')
    table.integer('vendor_id').references('vendor_table.vendor_id')
    table.integer('category_id').references('category_table.category_id')
    table.string('expiration_date')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('coupon_table')
}
