
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
  Games: {
    nba: {
      2021: null
    }
  },
  GamesByDate: {
    nba: {
      '2021-SEP-01': null
    }
  }
}

const queryLookup = {
  'score': 'Games',
  'gamesByDate': 'GamesByDate'
};

//every page will be a slice of 10;

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
    const res = await axios.get(`https://api.sportsdata.io/v3/${sportType}/scores/json/${resourceType}/${season}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPORTS_KEY
      }
    })
    console.log(res.data);
    if (res.data)
      memo[resourceType][sportType][season] = res.data;

  } catch (er) {
    throw new Error('Fetch Sports Api: Handled Error');
  }
  console.log(memo[resourceType][sportType][season])

}


app.post('/', async (req: any, rex: any) => {
  const resourceType = req.body.resourceType;
  const sportType = req.body.sportType;
  const season = req.body.season;
  const pageNum = req.body.pageNum
  let data;
  if (memo[resourceType] && memo[resourceType][sportType])
    data = memo[resourceType][sportType][season]
      ?.slice(10 * (pageNum - 1), 10 * pageNum);
  if (!data) {
    try {
      await fetchSportsApi(resourceType, sportType, season);
      data = memo[resourceType][sportType][season]
        ?.slice(10 * (pageNum - 1), 10 * pageNum);
    } catch (er) {
      console.error(er);
      return errorResponse(rex, er);
    }
  }
  if(!data.length)
  return errorResponse(rex, 'No Data found');

  return done(
    {
      list: data,
      count: memo[resourceType][sportType][season].length
    }
    , rex);
  // rex.json({ hiya: 'hiya' });

})
app.listen(PORT, () => console.log('listening on ', PORT))
