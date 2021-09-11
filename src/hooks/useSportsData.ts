import { useState, useEffect } from 'react';
import axios from 'axios';


type GenericObject = {
  [key: string]: any;
}

type SportsDataType = {
  [key: string]: GenericObject[];
}

// type SportsDataCustom {
//   sportsData: SportsDataType,
//   setSportsData: () => {};
// }



const useSportsData = () => {

  const [sportsData, setSportsData] = useState({});
  useEffect(() => {
    const fetchEspnData = async () => {
      try {
        // const res = await axios.get('https://espn.com/sports');
        const res = await axios.get('http://localhost:8080/', {
          proxy: {
            host: 'localhost',
            port: 8080,
        }
        });
        console.log(res.data);
      }catch(er) {
        console.error(er)
      }
    }
    fetchEspnData();
  }, [])

  return {
    sportsData,
    setSportsData
  }
}
export default useSportsData;