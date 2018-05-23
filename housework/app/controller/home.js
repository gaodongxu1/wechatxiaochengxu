'use strict';

module.exports = app => {
  class HomeController extends app.Controller {

    * allholidayselect() {
      this.ctx.body = yield this.service.allholiday.allholidayselect(this.ctx.request.body);
    }
    * allholidaycreate() {
      this.ctx.body = yield this.service.allholiday.allholidaycreate(this.ctx.request.body);
    }

    * eventcreate() {
      this.ctx.body = yield this.service.event.eventcreate(this.ctx.request.body);
    }

    * eventselect() {
      this.ctx.body = yield this.service.event.eventselect(this.ctx.request.body);
    }
    * eventdelete() {
      this.ctx.body = yield this.service.event.eventdelete(this.ctx.request.body);
    }
    * videoupdate() {
      this.ctx.body = yield this.service.event.videoupdate(this.ctx.request.body);
    }
    * videoselect() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.event.videoselect(this.ctx.request.body);
    }
    * videocreate() {
      this.ctx.body = yield this.service.event.videocreate(this.ctx.request.body);
    }
  }
  return HomeController;
};

