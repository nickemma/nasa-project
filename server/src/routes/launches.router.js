const express = require('express');
const {
  getAllLaunches,
  createNewLaunch,
} = require('../controller/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', createNewLaunch);

module.exports = launchesRouter;
