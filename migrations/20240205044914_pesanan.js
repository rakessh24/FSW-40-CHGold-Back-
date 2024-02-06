/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pesanan', (table => {
        table.increments('id').primary()
        table.integer('user_id')
        table.foreign('user_id').references('pengguna.id')
        table.timestamps('tanggal_pesanan')
        table.decimal('total_harga')
        table.integer('stok')
        table.string('status_pesanan')
      }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
