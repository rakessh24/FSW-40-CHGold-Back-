/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pengguna', (table => {
        table.increments('id').primary()
        table.string('nama')
        table.string('email')
        table.string('password')
        table.string('alamat')
        table.string('no_telepon')
      }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
