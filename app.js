require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const cors = require('cors');
const app = express();

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    console.log('Database connected');
  } catch (e) {
    console.log(e);
  }
}
connectToDB();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

/*
app.get('/', (req, res) => {
  res.status(200).json({message: 'OK'})
})
*/


module.exports = app;