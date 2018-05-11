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
  }
  return HomeController;
};

