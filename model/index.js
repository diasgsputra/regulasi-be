const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
const NodesModel = require('./nodesModel');
const CategoriesModel = require('./categoriesModel');
const ParentChildRelationModel = require('./parentChildRelationModel');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    database: 'freedb_freedbmysql',
    username: 'freedb_freedbroot',
    password: '9RqAzd@%N3mG!rr'
});

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     database: 'regulasi',
//     username: 'root',
//     password: ''
// });

const Nodes = NodesModel(sequelize);
const Categories = CategoriesModel(sequelize);
const ParentChild = ParentChildRelationModel(sequelize);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error synchronizing the database:', err);
    });

module.exports = {
    sequelize,
    Nodes,
    Categories,
    ParentChild
};
