import { Card, CardHeader } from '@material-ui/core';
import AppContext from 'context/AppContext';
import { useContext } from 'react';
import * as utils from 'utils';
const EventTitle = () => {
  const {
    queryData,
  } = useContext(AppContext) as any;
  return (
    <Card>
      <CardHeader
        title={`${queryData.sportType?.toUpperCase()} - Season ${queryData.season}`}
        subheader={`${utils.snakeToTitle(queryData.resourceType)}`}
      />
    </Card>
  )
}
export default EventTitle;