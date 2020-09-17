import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('checklist_valor', table =>{
        table.increments('id').primary();
        table.text('valor').notNullable();
        table.boolean('check').notNullable();
        
        table.integer('checklist_id')
            .notNullable()
            .references('id')
            .inTable('checklist')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('checklist_valor');
}