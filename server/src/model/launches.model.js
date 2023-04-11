const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler exploration x',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

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

module.exports = {
  launches,
  addNewLaunch,
};
