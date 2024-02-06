/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produk').del()
  await knex('produk').insert([
    {nama_produk: 'Golden Ring', deskripsi: 'Cincin berlapis emas 14 karat.',
    harga: 12.000, stok: 5},
    {nama_produk: 'Cincin Emas', deskripsi: 'Cincin berlapis emas 14 karat.',
    harga: 20.000, stok: 5},
    {nama_produk: 'Cincin Emas', deskripsi: 'Cincin berlapis emas 14 karat.',
    harga: 38.000, stok: 5},
    {nama_produk: 'Cincin Emas', deskripsi: 'Cincin berlapis emas 14 karat.',
    harga: 45.000, stok: 5},
    {nama_produk: 'Gelang Emas', deskripsi: 'Gelang berlapis emas 14 karat.',
    harga: 10.000, stok: 5},
    {nama_produk: 'Gelang Emas Putih', deskripsi: 'Gelang berlapis emas putih.',
    harga: 9.500, stok: 5},
    {nama_produk: 'Gelang Emas', deskripsi: 'Gelang berlapis emas 14 karat.',
    harga: 11.000, stok: 5},
    {nama_produk: 'Gelang Emas', deskripsi: 'Gelang berlapis emas 14 karat.',
    harga: 11.000, stok: 5},
    {nama_produk: 'Kalung Emas Putih', deskripsi: 'Kalung berlapis emas putih.',
    harga: 15.000, stok: 5},
    {nama_produk: 'Kalung Mutiara', deskripsi: 'Kalung yang memiliki kandungan emas dengan mutiara.',
    harga: 25.000, stok: 5},
    {nama_produk: 'Kalung Berlian', deskripsi: 'Kalung yang memiliki kandungan emas dengan berlian.',
    harga: 35.000, stok: 5},
    {nama_produk: 'kalung Bunga', deskripsi: 'Kalung yang berbentuk bunga denganlapisan emas putih.',
    harga: 17.000, stok: 5},
    {nama_produk: 'Anting Bunga', deskripsi: 'Anting berlapis emas yang dibentuk bunga.',
    harga: 7.000, stok: 5},
    {nama_produk: 'Anting Mutiara', deskripsi: 'Anting yang memiliki kandungan emas putih dengan mutiara.',
    harga: 25.000, stok: 5},
    {nama_produk: 'Anting Emas Putih', deskripsi: 'Anting berlapis emas putih.',
    harga: 15.000, stok: 5},
    {nama_produk: 'Anting Emas', deskripsi: 'Anting berlapis emas 14 karat.',
    harga: 20.000, stok: 5},
    {nama_produk: 'Paket A', deskripsi: 'Pasangan Kalung dan anting.',
    harga: 50.000, stok: 5},
    {nama_produk: 'Paket B', deskripsi: 'Pasangan Kalung dan anting.',
    harga: 67.000, stok: 5},
    {nama_produk: 'Paket C', deskripsi: 'Pasangan Kalung dan anting.',
    harga: 85.000, stok: 5},
    {nama_produk: 'Paket D', deskripsi: 'Pasangan Kalung dan anting.',
    harga: 75.000, stok: 5},
  ]);
};
