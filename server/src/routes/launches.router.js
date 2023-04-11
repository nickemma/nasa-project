const express = require('express');
const {
  getAllLaunches,
  createNewLaunch,
  deleteLaunch,
} = require('../controller/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', createNewLaunch);
launchesRouter.delete('/launches/:id', deleteLaunch);

module.exports = launchesRouter;
