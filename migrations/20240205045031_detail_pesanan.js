/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('detail_pesanan', (table => {
        table.increments('id').primary()
        table.integer('pesanan_id').unsigned()
        table.foreign('pesanan_id').references('pesanan.id')
        table.integer('produk_id').unsigned()
        table.foreign('produk_id').references('produk.id')
        table.integer('jumlah')
        table.decimal('harga_satuan')
      }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
