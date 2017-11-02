'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasCar = yield app.mysql.query(knex.schema.hasTable('collectcar').toString());
    ctx.logger.error('e');
    if (hasCar.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('collectcar', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('address').notNullable().defaultTo('');
        table.string('price').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasGarage = yield app.mysql.query(knex.schema.hasTable('garage').toString());
    ctx.logger.error('e');
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
  });
};
