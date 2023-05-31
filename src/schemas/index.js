const { DataTypes } = require('sequelize');
const conn = require('./conn');

const chaves = conn.define(
    'chaves',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chave_id: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        chave: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    },
    { freezeTableName: true, hooks: true, paranoid: false }
);

const init = async () => await chaves.sync();
init();

module.exports = { chaves }