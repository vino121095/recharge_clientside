const Seequlize = require('sequelize');

const db = new Seequlize('reacharge', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;