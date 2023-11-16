/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('category_table', (table) => {
    table.increments('category_id').primary()
    table.string('category_name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('category_table')
}
