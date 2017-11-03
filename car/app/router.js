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

  app.post('/buildvideoo', 'home.videocreate');
  app.post('/getvideo', 'home.videoselect');
  app.post('/upvideo', 'home.videoupdate');
};
