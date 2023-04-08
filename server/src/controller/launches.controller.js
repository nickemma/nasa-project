const { launches } = require('../model/launches.model');

/*
 * @route   GET /planets
 * @desc    Get all planets
 * @access  Public
 */

const getAllLaunches = (req, res) => {
  return res.status(200).json(Array.from(launches.values()));
};

module.exports = {
  getAllLaunches,
};
