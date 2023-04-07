import API_URL from '../config/api';

// Load planets and return as JSON.
const httpGetPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  console.log(response);
  return await response.json();
};

// Load launches, sort by flight number, and return as JSON.
const httpGetLaunches = async () => {};

// Submit given launch data to launch system.
const httpSubmitLaunch = async (launch) => {};

// Delete launch with given ID.
const httpAbortLaunch = async (id) => {};

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
