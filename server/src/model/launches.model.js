const launches = new Map();

// Getting all the launches

let latestFlightNumber = 1;
const launch = {
  flightNumber: 1,
  mission: 'Kepler exploration x',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

// Creating a new launch mission

const addNewLaunch = (launch) => {
  latestFlightNumber++,
    launches.set(
      latestFlightNumber,
      Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['LazyCoders', 'Zero To Mastery'],
        flightNumber: latestFlightNumber,
      })
    );
};

// Get a single launch and delete it based on the id

const existingLaunch = (launchId) => {
  return launches.has(launchId);
};

// Abort a function based on the id
const abortLaunchById = (launchId) => {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

module.exports = {
  launches,
  addNewLaunch,
  existingLaunch,
  abortLaunchById,
};
