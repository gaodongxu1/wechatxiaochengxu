/**
 * 2017-11-1 Gao dongxu
 */
'use strict';
module.exports = app => {
  app.post('/create', 'home.collectcarcreate');
  app.post('/select', 'home.collectcarselect');
  app.post('/delete', 'home.collectcardelete');

  app.post('/build', 'home.garagecreate');
  app.post('/get', 'home.garageselect');
  app.post('/move', 'home.garagedelete');

  app.post('/buildvideo', 'home.videocreate');
  app.post('/getvideo', 'home.videoselect');
  app.post('/upvideo', 'home.videoupdate');

  app.post('/search', 'home.searchselect');

  app.post('/historys', 'home.historyselect');
  app.post('/historyd', 'home.historydelete');
  app.post('/historyc', 'home.historycreate');
};
