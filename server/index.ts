
// const nfetch = require('node-fetch');
// const app = require('express')();

import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// first key will be nba
// second key will be season
const memo: any = {
  scores: {
    nba: {
      2021: null
    }
  }
}

//every page with be a slice of 10;

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
const fetchSportsApi = async (resourceType: string, sportType: string, season: string) => {
  try {
    const res = await axios.get(`https://api.sportsdata.io/v3/${sportType}/${resourceType}/json/Games/${season}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPORTS_KEY
      }
    })
    if (res.data)
      memo[resourceType][sportType][season] = res.data;

  } catch (er) {
    // console.error(er);
    throw new Error();
  }
  console.log(memo[resourceType][sportType][season])

}


app.post('/', async (req: any, rex: any) => {
  // return done({key: process.env.SPORTS_KEY}, rex);
  const resourceType = req.body.resourceType;
  const sportType = req.body.sportType;
  const season = req.body.season;
  const pageNum = req.body.pageNum
  let data = memo[resourceType][sportType][season]
    ?.slice(10 * (pageNum - 1), 10 * pageNum);
  if (!data) {
    try {
      fetchSportsApi(resourceType, sportType, season);
      data = memo[resourceType][sportType][season]
        ?.slice(10 * (pageNum - 1), 10 * pageNum);
      if (data)
        return done({
          list: data,
          count: memo[resourceType][sportType][season].length
        }, rex);
    } catch (er) {
      console.error(er);
      errorResponse(rex, er);
    }
    return;
  }
  return done(
    {
      list: data,
      count: memo[resourceType][sportType][season].length
    }
    , rex);
  // rex.json({ hiya: 'hiya' });

})
app.listen(PORT, () => console.log('listening on ', PORT))
