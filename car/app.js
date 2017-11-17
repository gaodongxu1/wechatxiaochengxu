'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasCar = yield app.mysql.query(knex.schema.hasTable('collectcar').toString());
    if (hasCar.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('collectcar', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('address', 1024).notNullable().defaultTo('');
        table.string('price').notNullable().defaultTo('');
        table.boolean('elect').notNullable().defaultTo(false);
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasGarage = yield app.mysql.query(knex.schema.hasTable('garage').toString());
    if (hasGarage.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('garage', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('address').notNullable().defaultTo('');
        table.string('price').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasVideo = yield app.mysql.query(knex.schema.hasTable('video').toString());
    if (hasVideo.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('video', function(table) {
        table.increments();
        table.string('slogan').notNullable().defaultTo('');
        table.string('videoaddress', 1024).notNullable().defaultTo('');
        table.integer('videoplay').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasSearch = yield app.mysql.query(knex.schema.hasTable('search').toString());
    if (hasSearch.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('search', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('address').notNullable().defaultTo('');
        table.string('price').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasHistory = yield app.mysql.query(knex.schema.hasTable('history').toString());
    if (hasHistory.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('history', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });
};
