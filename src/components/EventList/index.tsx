
import React, { useContext, useState } from 'react';
import { CircularProgress, Container, Button } from '@material-ui/core';

import EventListItem from './EventListItem';
import AppContext from 'context/AppContext.js';
import Pagination from 'components/Pagination';
import EventTitle from './EventTitle';

const EventList: React.FC = (props: any) => {
  const {
    sportsData,
    fetchEspnData,
    page,
    setPage,
    queryData,
    changeQueryParam
  } = useContext(AppContext) as any;


  const {
    resourceType,
    sportType,
    season
  } = queryData;
  const pageCallback = (pageNum: number) => {
    fetchEspnData(queryData, pageNum + 1);
  }

  // if (!sportsData[resourceType][sportType][season])
  //   return null;
  const parsedList = sportsData[resourceType][sportType][season] && sportsData[resourceType][sportType][season][page]?.map((each: any) =>
    <EventListItem
      key={each.GameID}
      {...each}
    />
  )
  return (
    <>
      <EventTitle />
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        

      </div>
      {
        sportsData.loading &&
        <CircularProgress />
      }

      <Container
        style={{
          backgroundColor: '#eee',
          padding: 10,
          display: 'grid',
          gridTemplateColumns: `repeat(${window.innerWidth < 640 ? 1 : 2}, 1fr)`,
          alignItems: 'center',
          justifyItems: 'center',
          width: '100%'
        }}
      >
        {parsedList}
        <Pagination
          page={page}
          setPage={setPage}
          pageCallback={pageCallback}
          count={sportsData[resourceType][sportType] && sportsData[resourceType][sportType][season]?.count}
        />
      </Container>
    </>

  )
}

export default EventList;
