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
  }
  return HomeController;
};

