import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useContext, useState } from 'react';
import AppContext from 'context/AppContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { convertDateToAPIString } from 'utils'

const gamesOptions = [
  '2021PRE',
  2021,
  '2021POST',
  '2021FINAL',
  '2022PRE',
  2022,
  '2022POST',
  '2022FINAL',
  2023
];
const gamesByDateOptions = [
  'SEP'
]

const DataOptions = () => {

  const {
    queryData,
    changeQueryParam
  } = useContext(AppContext);
  const handleDateChange = (dat: any) => {
    changeQueryParam('season', convertDateToAPIString(dat))
  }

  const handleChange = ({ target: { value } }: any) => {
    changeQueryParam('season', value)
  }

  switch (queryData.resourceType) {
    case 'Games':
      const parsedList = gamesOptions.map(each => <MenuItem
        key={each}
        value={each}
      >
        {each}
      </MenuItem>)
      return (
        <FormControl>
          <InputLabel id='season-select-label'>Season</InputLabel>

          <Select
            labelId='season-select-label'
            value={queryData.season}
            onChange={handleChange}
          >
            {parsedList}
          </Select>
        </FormControl>
      )
    case 'GamesByDate':
      return <div
        style={{
          margin: '0 auto',
          width: 'fit-content',
          maxWidth: '100vw',
          // margin: 10
        }}
      >
        <Calendar
          defaultValue={new Date('2020-09-15T12:00:00')}
          onChange={handleDateChange}
        />
      </div>
    default:
      return null;

  }



}
export default DataOptions;