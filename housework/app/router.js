/**
 * 2018-05-8 Gao dongxu
 */
'use strict';
module.exports = app => {
  app.post('/create', 'home.allholidaycreate');
  app.post('/select', 'home.allholidayselect');

  app.post('/build', 'home.eventcreate');
};
