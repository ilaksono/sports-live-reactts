import React from 'react';
import { Props } from 'types';
import useSportsData from 'hooks/useSportsData';
import EventList from 'components/EventList';
const MainView: React.FC<Props> = (props) => {
  console.log();
  const {
    sportsData
  } = useSportsData();

  console.log(sportsData);

  return (
    <div>
      I am main view
      <EventList />
    </div>
  )
}
export default MainView;