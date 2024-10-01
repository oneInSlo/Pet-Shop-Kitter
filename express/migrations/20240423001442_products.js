/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('produkti', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('price', 10, 2).notNullable(); 
        table.string('nutrition').notNullable(); 
        table.string('src').notNullable(); 
        table.decimal('discount', 5, 2).notNullable(); 
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('produkti');
};
