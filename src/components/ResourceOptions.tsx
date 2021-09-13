import { CircularProgress, Container, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AppContext from 'context/AppContext.js';

const ResourceOptions = () => {


  const {
    
    changeQueryParam
  } = useContext(AppContext) as any;

  return (
    <>
      <Button
        onClick={() => {
          changeQueryParam('resourceType', 'Games')
          changeQueryParam('season', '2021');
        }
        }
      >Games</Button>
      <Button
        onClick={() => {
          changeQueryParam('resourceType', 'GamesByDate')
          changeQueryParam('season', '2020-SEP-15');

        }

        }
      >Games By Date
      </Button>
    </>
  )
}
export default ResourceOptions;