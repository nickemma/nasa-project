const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
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
const port = process.env.PORT || 8080;
const CONNECTION = process.env.MONGO_URI || '';

mongoose.set('strictQuery', false);
// mongoose
//   .connect(CONNECTION)
//   .then((con) => {
//     app.listen(port, () => {
//       console.log(`Connected to ${con.connection.name} successfully...`);
//       console.log('Host:', con.connection.host);
//       console.log('Port:', port.toString());
//     });
//   }).catch((err) => {
//     console.log(err.message)
//   })

mongoose.connection.once('open', () => {
  console.log('mongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});
const startServer = async () => {
  await mongoose.connect(CONNECTION);
  await loadPlanetsData();
  app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
  });
};
startServer();

app.get('/', (req, res) => {
  res.send('Hello From Nasa API');
});
