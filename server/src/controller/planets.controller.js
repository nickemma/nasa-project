const { planets } = require('../model/planets.model');

/*
 * @route   GET /planets
 * @desc    Get all planets
 * @access  Public
 */

const getAllPlanets = (req, res) => {
  return res.status(200).json(planets);
};

module.exports = {
  getAllPlanets,
};
