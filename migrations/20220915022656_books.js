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
        table.string('language').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('faq', (table) => {
        table.increments('id').primary();
        table.string('question').notNullable();
        table.string('answer').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('reviews', (table) => {
        table.increments('id').primary();
        table.string('reviewer').notNullable();
        table.string('review').notNullable();
        table
          .integer('book_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('books')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('reviews').dropTable('faq').dropTable('books');
  };
