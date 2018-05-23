'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasHoliday = yield app.mysql.query(knex.schema.hasTable('allholiday').toString());
    if (hasHoliday.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('allholiday', function(table) {
        table.increments();
        table.string('yearmonth').notNullable().defaultTo('');
        table.string('day').notNullable().defaultTo('');
        table.string('week').notNullable().defaultTo('');
        table.string('festival').notNullable().defaultTo('');
        table.integer('state').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    
    const hasEvent = yield app.mysql.query(knex.schema.hasTable('event').toString());
    if (hasEvent.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('event', function(table) {
        table.increments();
        table.string('yearmonthday').notNullable().defaultTo('');
        table.string('eventname').notNullable().defaultTo('');
        table.string('arrange', 1024).notNullable().defaultTo('');
        table.integer('state').notNullable().defaultTo(1);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
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
  });
};
