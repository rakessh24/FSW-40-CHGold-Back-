/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pengguna').del()
  await knex('pengguna').insert([
    {nama: 'rahma', email:'rahma123@yh.com', password:'abcd',
    alamat:'Depok', no_telepon:'087654321'},
  ]);
};
