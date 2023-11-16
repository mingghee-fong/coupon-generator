
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('vendor_table', (table) => {
    table.increments('vendor_id').primary()
    table.string('vendor_name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('vendor_table')
}
