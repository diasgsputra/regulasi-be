const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Categories = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false }
    });
    return Categories;
};