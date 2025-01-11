const { sequelize, Node, Category, ParentChild } = require('../model');
// const sequelize = require("../config/db");

const getNodesByCategory = async (categoryName) => {
  const query = `
    SELECT
        n.id AS node_id,
        n.name AS node_name,
        n.category_id AS node_category,
        r.parent_id AS parent_id,
        r.parent_category_id AS parent_category
    FROM nodes n
    LEFT JOIN parent_child_relations r ON n.id = r.child_id
    WHERE n.category_id = (SELECT id FROM categories WHERE name = ?)
  `;

  const nodes = await sequelize.query(query, {
    replacements: [categoryName],
    type: sequelize.QueryTypes.SELECT,
  });

  const buildHierarchy = (nodeList, parentId = null) => {
    return nodeList
      .filter((node) => node.parent_id === parentId)
      .map((node) => ({
        id: node.node_id,
        name: node.node_name,
        category: node.node_category,
        child: buildHierarchy(nodeList, node.node_id),
      }));
  };

  return buildHierarchy(nodes);
};

module.exports = { getNodesByCategory };
