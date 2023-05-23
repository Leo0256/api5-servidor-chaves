const { DataTypes } = require('sequelize');
const conn = require('./conn');

const chaves = conn.define(
    'chaves',
    {
        id: {
            type: DataTypes.STRING(70),
            primaryKey: true,
            allowNull: false
        },
        chave: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    },
    { freezeTableName: true, hooks: true }
);

const init = async () => await chaves.sync();
init();

module.exports = { chave: chaves }