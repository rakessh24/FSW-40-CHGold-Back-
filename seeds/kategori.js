/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kategori').del()
  await knex('kategori').insert([
    {nama_kategori: 'Cincin'},
    {nama_kategori: 'Gelang'},
    {nama_kategori: 'Kalung'},
    {nama_kategori: 'Anting'},
    {nama_kategori: 'Paket'},
  ]);
};
