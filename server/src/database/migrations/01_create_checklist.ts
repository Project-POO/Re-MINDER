import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('checklist', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.timestamp('data')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('checklist');
}