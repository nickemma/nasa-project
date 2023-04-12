const planets = require('../model/planets.mongodb');
/*
 * @route   GET /planets
 * @desc    Get all planets
 * @access  Public
 */

const getAllPlanets = async (req, res) => {
  const newPlanets = await planets.find({}, { _id: 0, __v: 0 });
  return res.status(200).json(newPlanets);
};

module.exports = {
  getAllPlanets,
};
