/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('produk', (table => {
    table.increments('id').primary()
    table.string('nama_produk')
    table.string('deskripsi')
    table.decimal('harga', { precision: 10, scale: 2 })
    table.integer('stok')
    table.string('gambar')
    table.integer('kategori_id').unsigned()
    table.foreign('kategori_id').references('kategori.id')
  }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
