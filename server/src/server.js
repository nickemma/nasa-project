const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets.router');
const launchesRouter = require('./routes/launches.router');
const { loadPlanetsData } = require('./model/planets.model');

// Middlewares

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb' }));

// Routes
app.use(planetsRouter);
app.use(launchesRouter);

// Connections
const port = process.env.PORT || 8000;

async function startServer() {
  await loadPlanetsData();
  app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
  });
}
startServer();

app.get('/', (req, res) => {
  res.send('Hello From Nasa API');
});
