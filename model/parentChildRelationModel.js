const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ParentChild = sequelize.define('parent_child_relations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        child_id: { type: DataTypes.INTEGER, allowNull: false },
        parent_id: { type: DataTypes.INTEGER, allowNull: false },
        parent_category_id: { type: DataTypes.INTEGER, allowNull: false }
    });
    return ParentChild;
};