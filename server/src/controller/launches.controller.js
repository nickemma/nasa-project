const {
  launches,
  addNewLaunch,
  existingLaunch,
  abortLaunchById,
} = require('../model/launches.model');

/*
 * @route   GET /Launches
 * @desc    Get all Launches
 * @access  Public
 */

const getAllLaunches = (req, res) => {
  return res.status(200).json(Array.from(launches.values()));
};

/*
 * @route   POST /Launch
 * @desc    Create a new Launch
 * @access  Public
 */

const createNewLaunch = (req, res) => {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: 'Missing required launch properties',
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid date',
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};

/*
 * @route   DELETE /Launch
 * @desc    Delete a Launch based on the id
 * @access  Public
 */

const deleteLaunch = (req, res) => {
  const launchId = Number(req.params.id);

  if (!existingLaunch(launchId)) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
};

module.exports = {
  getAllLaunches,
  createNewLaunch,
  deleteLaunch,
};
