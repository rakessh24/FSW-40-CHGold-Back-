/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('detail_pesanan').del()
  await knex('detail_pesanan').insert([
    { jumlah: 1, harga_satuan: 12.000},
  ]);
};
