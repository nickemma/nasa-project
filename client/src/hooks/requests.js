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
const httpSubmitLaunch = async (launch) => {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
};

// Delete launch with given ID.
const httpAbortLaunch = async (id) => {};

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
