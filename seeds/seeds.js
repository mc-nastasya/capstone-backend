/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const booksData = require('../seed_data/books');
const faqData = require('../seed_data/faq');

exports.seed = function (knex) {
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert(booksData);
    })
    .then(() => {
      return knex('faq').del();
    })
    .then(() => {
      return knex('faq').insert(faqData);
    });
};