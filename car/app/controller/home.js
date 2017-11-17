'use strict';

module.exports = app => {
  class HomeController extends app.Controller {

    * collectcardelete() {
      this.ctx.body = yield this.service.collectcar.collectcardelete(this.ctx.request.body);
    }
    * collectcarselect() {
      this.ctx.body = yield this.service.collectcar.collectcarselect(this.ctx.request.body);
    }
    * collectcarcreate() {
      this.ctx.body = yield this.service.collectcar.collectcarcreate(this.ctx.request.body);
    }
    * garagedelete() {
      this.ctx.body = yield this.service.collectcar.garagedelete(this.ctx.request.body);
    }
    * garageselect() {
      this.ctx.body = yield this.service.collectcar.garageselect(this.ctx.request.body);
    }
    * garagecreate() {
      this.ctx.body = yield this.service.collectcar.garagecreate(this.ctx.request.body);
    }
    * videoupdate() {
      this.ctx.body = yield this.service.collectcar.videoupdate(this.ctx.request.body);
    }
    * videoselect() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.collectcar.videoselect(this.ctx.request.body);
    }
    * videocreate() {
      this.ctx.body = yield this.service.collectcar.videocreate(this.ctx.request.body);
    }
    * searchselect() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.collectcar.searchselect(this.ctx.request.body);
    }
    * historydelete() {
      this.ctx.body = yield this.service.collectcar.historydelete(this.ctx.request.body);
    }
    * historyselect() {
      this.ctx.body = yield this.service.collectcar.historyselect(this.ctx.request.body);
    }
    * historycreate() {
      this.ctx.body = yield this.service.collectcar.historycreate(this.ctx.request.body);
    }
  }
  return HomeController;
};

