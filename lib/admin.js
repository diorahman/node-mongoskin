/*!
 * mongoskin - admin.js
 * 
 * Copyright(c) 2011 - 2012 kissjs.org
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Admin = require('mongodb').Admin;
var makeSkinClass = require('./utils').makeSkinClass;

// hack!!!
for (var k in Admin()) {
  Admin.prototype[k] = Admin()[k];
}

var SkinAdmin = exports.SkinAdmin = makeSkinClass(Admin);

SkinAdmin.prototype._open = function(callback) {
  var skindb = this._construct_args[0];
  skindb.open(function(err, p_db) {
      if(err) return callback(err);
      callback(null, p_db.admin());
  })
}
