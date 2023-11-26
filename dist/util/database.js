"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('cha', 'root', '12345896456', {
    dialect: 'mysql',
    host: 'localhost'
});
exports.default = sequelize;
