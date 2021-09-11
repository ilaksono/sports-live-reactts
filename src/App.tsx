import React from 'react';
// import React from ''
import './App.css';
import MainView from 'views/MainView';
// import { Props } from 'types';
import {Props} from 'types';
import NavBar from 'components/NavBar'

const App: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <div className="App">
      <NavBar a={1}/>
      <MainView />
    </div>
  );
}

export default App;
