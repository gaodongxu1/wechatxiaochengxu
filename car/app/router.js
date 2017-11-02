/**
 * 2017-11-1 Gao dongxu
 */
'use strict';
module.exports = app => {
  app.post('/create', 'home.collectcarcreate');
  app.get('/select', 'home.collectcarselect');
  app.post('/delete', 'home.collectcardelete');
  app.post('/build', 'home.garagecreate');
  app.get('/get', 'home.garageselect');
  app.post('/move', 'home.garagedelete');
};
