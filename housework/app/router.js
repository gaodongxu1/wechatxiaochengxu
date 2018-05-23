/**
 * 2018-05-8 Gao dongxu
 */
'use strict';
module.exports = app => {
  app.post('/create', 'home.allholidaycreate');
  app.post('/select', 'home.allholidayselect');

  app.post('/build', 'home.eventcreate');
  app.post('/get', 'home.eventselect');
  app.post('/delete', 'home.eventdelete');

  app.post('/buildvideo', 'home.videocreate');
  app.post('/getvideo', 'home.videoselect');
  app.post('/upvideo', 'home.videoupdate');
};
