/**
 * 2018-5-8 gaodongxu
 */
'use strict';
module.exports = app => {
  class Housework extends app.Service {
    * allholidayselect() {
      let res;
      const myDate = new Date();
      try {
        res = yield app.mysql.select('allholiday', { where: { state: myDate.getMonth() + 1 } });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * allholidaycreate(param) {
      try {
        yield app.mysql.insert('allholiday', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

  }
  return Housework;
};

