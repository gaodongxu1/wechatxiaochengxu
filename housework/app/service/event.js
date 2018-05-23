/**
 * 2015-5-10 gaodongxu
 */
'use strict';
module.exports = app => {
  class Event extends app.Service {
    * eventcreate(param) {
      try {
        yield app.mysql.insert('event', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * eventselect(req) {
      let res;
      try {
        res = yield app.mysql.select('event', {
          where: { eventname: req.eventname, state: 1 },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * eventdelete(param) {
      try {
        yield app.mysql.delete('event', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
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
  return Event;
};

