const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:rodrigosql@localhost:5432/simpsons', { logging: false })

module.exports={ sequelize, DataTypes }