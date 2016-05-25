'use strict';

var Sequelize = require('sequelize');
var secrets = require('./auth/secrets');

var databaseURI = secrets.database;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
