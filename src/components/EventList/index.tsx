
import React, { useContext } from 'react';
import { Container } from '@material-ui/core';

import EventListItem from './EventListItem';
import AppContext from 'context/AppContext.js';
import Pagination from 'components/Pagination';
import usePagination from 'hooks/usePagination';

const EventList: React.FC = (props: any) => {
  const {
    sportsData,
    fetchEspnData,
    page,
    setPage
  } = useContext(AppContext) as any;


  const pageCallback = (pageNum: number) => {
    fetchEspnData(pageNum + 1);
  }

  const parsedList = sportsData.scores.nba[2021][page + 1]?.map((each: any) =>
    <EventListItem
      key={each.GameID}
      {...each}
    />
  )
  return (
    <Container
      style={{
        backgroundColor: '#eee',
        padding: 24,
        display:'grid',
        gridTemplateColumns: `repeat(${window.innerWidth < 640 ? 1 : 2}, 1fr)`,
        alignItems:'center',
        justifyItems:'center',
        width: '100%'
      }}
    >
    {/* <div className='event-list'> */}
      {/* <EventListItem /> */}
      {parsedList}
    {/* </div> */}
    <Pagination 
    page={page}
    setPage={setPage}
    pageCallback={pageCallback}
    count={sportsData.scores.nba[2021]?.count}
    />
    </Container>

  )
}

export default EventList;
