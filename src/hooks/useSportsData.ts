import { useState, useEffect } from 'react';
import ax from 'ax';


type GenericObject = {
  [key: string]: any;
}

type SportsDataType = {
  [key: string]: GenericObject[];
}

const useSportsData = (init: any) => {
  console.log(init);

  const [sportsData, setSportsData] = useState({
    Games: {
      nba: {
        2021: {}
      }
    },
    GamesByDate: {
      nba: {
        '2021-SEP-01': {}
      }
    }
  });
  const fetchEspnData = async ({
    resourceType = init.resourceType,
    sportType= init.sportType,
    season= init.season,
  }, pageNum = 1,) => {
    // if(!resourceType)
    //  return null;
    try {
      const res = await ax('http://localhost:8080/', {
        pageNum,
        resourceType,
        sportType,
        season,
      });
      if (res)
        setPageResourceData(res, resourceType, sportType, season, pageNum);
    } catch (er) {
      console.error(er)
    }
  }
  const setPageResourceData = (res: any, resourceType: string | number, sportType: string, season: string, pageNum: number) => {
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
    fetchEspnData({});
  }, [])
  return {
    sportsData,
    setSportsData,
    fetchEspnData
  }
}
export default useSportsData;