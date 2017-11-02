/**
 * 2017-9-27 gaodongxu
 */
'use strict';
module.exports = app => {
  class Student extends app.Service {
    * collectcarcreate(param) {
      try {
        yield app.mysql.insert('collectcar', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * collectcarselect() {
      let res;
      try {
        res = yield app.mysql.select('collectcar');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * collectcardelete(param) {
      try {
        yield app.mysql.delete('collectcar', param);
      } catch (e) {
        this.ctx.logger.error(e);
        this.ctx.logger.warn();
        return false;
      }
      return true;
    }
    * garagecreate(param) {
      try {
        yield app.mysql.insert('garage', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * garageselect() {
      let res;
      try {
        res = yield app.mysql.select('garage');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * garagedelete(param) {
      try {
        yield app.mysql.delete('garage', param);
      } catch (e) {
        this.ctx.logger.error(e);
        this.ctx.logger.warn();
        return false;
      }
      return true;
    }

  }
  return Student;
};

