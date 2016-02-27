'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema;
/**
 * Product Schema
 */
var ProductSchema = new mongoose.Schema({
  'name': {
    type: String,
    uppercase: true
  },
  'description': String,
  'dashboards': [{
      type: Schema.Types.ObjectId,
      ref: 'Dashboard'
    }],
  'requirements': [ {
      'stakeholder': String,
      'description': String,
      'relatedDashboards': [ String ],
      'result':{
          type: Boolean,
          default: false
      }
  } ]
});
ProductSchema.index({ name: 1 }, { unique: true });
db.model('Product', ProductSchema);
