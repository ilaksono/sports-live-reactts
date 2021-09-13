import React, {useContext} from 'react';
// import React from ''
import './App.css';
import MainView from 'views/MainView';
// import { Props } from 'types';
import {Props} from 'types';
import NavBar from 'components/NavBar'
import TemplateModal from 'components/TemplateModal';
import AppContext from 'context/AppContext';

const App: React.FC<Props> = (props) => {
  const {
    error,
    handleResetError
  } = useContext(AppContext);
  return (
    <div className="App">
      <NavBar a={1}/>
      <MainView />
      <TemplateModal 
        open={error.open}
        handleClose={handleResetError}
        text={error.text}
      />
    </div>
  );
}

export default App;
