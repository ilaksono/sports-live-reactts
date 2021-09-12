import { useState, useEffect } from 'react';
import ax from 'ax';


type GenericObject = {
  [key: string]: any;
}

type SportsDataType = {
  [key: string]: GenericObject[];
}

const useSportsData = () => {

  const [sportsData, setSportsData] = useState({
    scores: {
      nba: {
        2021: {}
      }
    }
  });
  const fetchEspnData = async (
    pageNum = 1,
    resourceType = 'scores',
    sportType = 'nba',
    season = '2021',
  ) => {
    try {
      // const res = await axios.get('https://espn.com/sports');

      const res = await ax('http://localhost:8080/', {
        pageNum,
        resourceType,
        sportType,
        season,
        proxy: {
          host: 'localhost',
          port: 8080,
        }
      });
      if (res)
        setPageResourceData(res, resourceType, sportType, season, pageNum);
    } catch (er) {
      console.error(er)
    }
  }
  const setPageResourceData = (res: any, resourceType: string, sportType: string, season: string, pageNum: number) => {
    setSportsData((prev: any) => ({
      ...prev,
      [resourceType]: {
        ...prev[resourceType],
        [sportType]: {
          ...prev[resourceType][sportType],
          [season]: {
            ...prev[resourceType][sportType][season],
            [pageNum]: res.list,
            count: res.count
          }
        }
      }
    }))
  }

  useEffect(() => {
    fetchEspnData();
  }, [])
  return {
    sportsData,
    setSportsData,
    fetchEspnData
  }
}
export default useSportsData;