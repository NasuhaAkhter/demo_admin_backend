'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BlogPost extends Model {
    user() {
        return this.belongsTo('App/Models/User', 'user_id')
      }
    //   status_comment() {
    //     return this.hasMany('App/Models/StatusComment')
    //   }
    //   total_comment() {
    //     return this.hasOne('App/Models/StatusComment')
    //       .select('status_id', Database.raw('count(id) as totalcomment'))
    //       .groupBy('status_id');
    //   }
    //   total_like() {
    //     return this.hasOne('App/Models/StatusLike')
    //       .select('status_id', Database.raw('count(id) as totalLike'))
    //       .groupBy('status_id');
    //   }
}

module.exports = BlogPost
