/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('nakup', (table) => {
        table.increments('id').primary();
        table.string('idUser').notNullable();
        table.string('products');
        table.decimal('totalAmount').notNullable(); 
        table.date('dateOfPurchase').notNullable(); 
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('nakup');
};
