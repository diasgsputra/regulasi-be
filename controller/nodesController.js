const { getNodesByCategory } = require('../service/nodesService');

// Handler untuk mendapatkan data bertingkat berdasarkan kategori
async function getNodes(req, res) {
  const { categoryName } = req.params;

  try {
    console.log("category name : ",categoryName)
    const tree = await getNodesByCategory(categoryName);
    res.json(tree);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching nodes' });
  }
}

module.exports = {
  getNodes,
};
