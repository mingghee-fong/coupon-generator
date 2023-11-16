export async function seed(knex) {
  // Inserts seed entries
  await knex('vendor_table').insert([
    { vendor_name: 'Wilson Bros' },
    { vendor_name: 'Stussy' },
    { vendor_name: 'Hallensteins' },
    { vendor_name: 'Farmers' },
    { vendor_name: 'Lady Godiva' },
    { vendor_name: 'Armstrong Motors' },
    { vendor_name: 'Toys R Us' },
    { vendor_name: 'Laverlys' },
    { vendor_name: 'Schrodinger Books' },
    { vendor_name: 'JD Sports' },
  ])
}
