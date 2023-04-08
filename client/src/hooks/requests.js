import API_URL from '../config/api';

// Load planets and return as JSON.
const httpGetPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
};

// Load launches, sort by flight number, and return as JSON.
const httpGetLaunches = async () => {
  const response = await fetch(`${API_URL}/launches`);
  const launchedData = await response.json();
  return launchedData.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
};

// Submit given launch data to launch system.
const httpSubmitLaunch = async (launch) => {};

// Delete launch with given ID.
const httpAbortLaunch = async (id) => {};

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
