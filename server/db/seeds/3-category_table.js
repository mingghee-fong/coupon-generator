export async function seed(knex) {

  // Inserts seed entries
  await knex('category_table').insert([
    { category_name: 'Food' },
    { category_name: 'Electronics' },
    { category_name: 'Clothing' },
    { category_name: 'Furniture' },
    { category_name: 'Home and Garden' },
    { category_name: 'Beauty and Personal Care' },
    { category_name: 'Toys and Games' },
    { category_name: 'Automotive' },
    { category_name: 'Books and Media' },
    { category_name: 'Sports and Outdoors' },
  ])
}