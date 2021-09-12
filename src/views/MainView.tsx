import React from 'react';
import { Props } from 'types';
import EventList from 'components/EventList';
const MainView: React.FC<Props> = (props) => {
 
  return (
    <div>
      <EventList />
    </div>
  )
}
export default MainView;