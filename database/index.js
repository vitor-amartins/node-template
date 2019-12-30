const Sequelize = require('sequelize');
const dbConfig = require('./../config/database');
const models = require('./../models');

const connection = new Sequelize(dbConfig);

// ================ CONNECTIONS ================ //

// ---------------- PEOPLE ---------------- //
models.User.init(connection);
models.UserRole.init(connection);

// ---------------- LOGS ---------------- //
models.RequestLog.init(connection);

// ================ ASSOCIATIONS ================ //

// ---------------- PEOPLE ---------------- //
models.User.associate(connection.models);
models.UserRole.associate(connection.models);

// ---------------- LOGS ---------------- //
models.RequestLog.associate(connection.models);

module.exports = connection;
