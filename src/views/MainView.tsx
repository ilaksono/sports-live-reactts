import React from 'react';
import { Props } from 'types';
import EventList from 'components/EventList';
import DataOptions from 'components/DataOptions';
const MainView: React.FC<Props> = (props) => {
 
  return (
    <div>
      <DataOptions />
      <EventList />
    </div>
  )
}
export default MainView;