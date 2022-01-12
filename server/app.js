require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const app = express()

const connectToDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync() 
    console.log('Database connected')
  } catch (e) {
    console.log(e)
  }
}
connectToDB()



module.exports = app