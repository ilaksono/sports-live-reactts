
// const nfetch = require('node-fetch');
// const app = require('express')();

import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors())

const PORT = process.env.PORT || 8080;

const errorResponse = (rex: any, er: any) => {
  rex.json({
    status: 'failure',
    msg: 'Request failed',
    data: er
  });
}

const done = (data: any, rex: any) => {
  rex.json({
    status: 'success',
    msg: null,
    data
  })
}

app.get('/', async (req: any, rex: any) => {
  // return done({key: process.env.SPORTS_KEY}, rex);
  try {
    const season = '2018';
    const res = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Games/${season}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPORTS_KEY
      }
    })
    return done(res, rex);
  } catch (er) {
    console.error(er);
    errorResponse(rex, er);
  }


  // rex.json({ hiya: 'hiya' });


})
app.listen(PORT, () => console.log('listening on ', PORT))

console.log(process.env);