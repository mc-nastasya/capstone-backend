exports.up = function (knex) {
    return knex.schema
      .createTable('books', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable().defaultTo('image.png');
        table.text('description').notNullable();
        table.string('amazon_link').notNullable().defaultTo('/links/link');
        table.string('sample_link').notNullable("liiink");
        table.string('age').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('faq', (table) => {
        table.increments('id').primary();
        table.text('question').notNullable();
        table.text('answer').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('emails', (table)=> {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('contact', (table)=>{
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name');
        table.string('email').notNullable();
        table.text('subject').notNullable();
        table.text('message').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('contact').dropTable('emails').dropTable('faq').dropTable('books');
  };
