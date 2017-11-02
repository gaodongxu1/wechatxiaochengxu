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
    * videoupdate(param) {
      try {
        yield app.mysql.update('video', param);
      } catch (e) {
        this.ctx.logger.error(e);
        this.ctx.logger.warn();
        return false;
      }
      return true;
    }
    * videocreate(param) {
      try {
        yield app.mysql.insert('video', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * videoselect() {
      let res;
      try {
        res = yield app.mysql.select('video');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Student;
};

