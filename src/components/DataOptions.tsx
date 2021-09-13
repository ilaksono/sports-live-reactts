import { Select, MenuItem } from '@material-ui/core';
import { useContext } from 'react';
import AppContext from 'context/AppContext';

const gamesOptions = [
  2021,
  2022,
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

  const handleChange = ({ target: { value } }: any) => {
    changeQueryParam('season', value)
  }

  const parsedList = gamesOptions.map(each => <MenuItem
    key={each}
    value={each}
  >
    {each}
  </MenuItem>)
  return (
    <Select
      value={queryData.season}
      onChange={handleChange}
    >
      {parsedList}
    </Select>
  )
}
export default DataOptions;