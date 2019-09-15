import React from 'react';
import './App.css';

import { Grid, Box } from 'grommet';

function App() {
  return (
    <div className="App">
      <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="brand">
          <header className="App-header">
            Soundboard
          </header>
        </Box>

        <Box gridArea="nav" background="light-5">
          Nav
        </Box>

        <Box gridArea="main" background="light-2">
          Main
        </Box>
      </Grid>
    </div>
  );
}

export default App;
