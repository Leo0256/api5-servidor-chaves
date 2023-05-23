const { Sequelize } = require('sequelize');


// Define a conexão com o banco
const conn = new Sequelize(
    process.env.DATABASE, //Database
    process.env.USER,  //User
    process.env.PASS,  //Password
    {
        host: process.env.HOST, // Host
        dialect: 'mysql',
        define: {
            freezeTableName: true
        },
        timezone: '-03:00' // timezone GMT-3 de Brasília
    }
);

// Confere a conexão com o banco
conn.authenticate()
.then(() => {
    console.log('\n------------ Conectado no banco ------------\n')
})
.catch(() => {
    console.log('\n-------- Falha ao conectar no banco --------\n')
});

module.exports = conn;