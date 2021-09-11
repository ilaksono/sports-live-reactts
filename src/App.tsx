import React from 'react';
// import React from ''
import './App.css';
// import { Props } from 'types';
type Props = {
  /** color to use for the background */
  // color?: string;
  /** standard children prop: accepts any valid React Node */
  // children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  // onClick: ()  => void;
}
const App: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <div className="App">
      Sports Live
    </div>
  );
}

export default App;
