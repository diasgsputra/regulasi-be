const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Nodes = sequelize.define('nodes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        category_id: { type: DataTypes.INTEGER, allowNull: false }
    });
    return Nodes;
};