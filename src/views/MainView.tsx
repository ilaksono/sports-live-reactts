import React, { useContext } from 'react';
import { Props } from 'types';
import EventList from 'components/EventList';
import DataOptions from 'components/DataOptions';
import ResourceOptions from 'components/ResourceOptions';
import AppContext from 'context/AppContext';

const MainView: React.FC<Props> = (props) => {

  const {
    queryData
  } = useContext(AppContext);

  return (
    <div>
      <div className='transition-height'
        style={{
          maxHeight: (queryData.resourceType === 'Games' ? 48 : '')
        }}
      >
        <DataOptions />
      </div>
      <ResourceOptions />
      <EventList />
    </div>
  )
}
export default MainView;