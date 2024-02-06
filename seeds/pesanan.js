/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pesanan').del()
  await knex('pesanan').insert([
    {total_harga:12.000, stok: 5, status_pesanan:'Terkirim' },
  ]);
};
