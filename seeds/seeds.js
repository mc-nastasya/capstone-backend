/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const booksData = require('../seed_data/books');
const faqData = require('../seed_data/faq');
const reviewsData = require('../seed_data/reviews');

exports.seed = function (knex) {
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert(booksData);
    })
    .then(() => {
      return knex('reviews').del();
    })
    .then(() => {
      return knex('reviews').insert(reviewsData);
    })
    .then(() => {
      return knex('faq').del();
    })
    .then(() => {
      return knex('faq').insert(faqData);
    });
};