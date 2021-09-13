import React from 'react';
import { Props } from 'types';
import EventList from 'components/EventList';
import DataOptions from 'components/DataOptions';
import ResourceOptions from 'components/ResourceOptions';
const MainView: React.FC<Props> = (props) => {
 
  return (
    <div>
      <DataOptions />
      <ResourceOptions />
      <EventList />
    </div>
  )
}
export default MainView;