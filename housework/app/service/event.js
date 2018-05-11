/**
 * 2015-5-10 gaodongxu
 */
'use strict';
module.exports = app => {
  class Car extends app.Service {
    * eventcreate(param) {
      try {
        yield app.mysql.insert('event', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Car;
};

