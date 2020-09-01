import React from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import SimpleTable from './table';
import MyChart from './chart';
import ContainedButtons from './button';
import Data from './data.json';
import { green, blue } from '@material-ui/core/colors';
import LiveStreaming from './liveStreaming';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          primary: green,
        }
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid container item xs={8} spacing={4}>
          <Grid container item xs={6} spacing={2}>
            <SimpleTable rows={Data.table1} headers={Data.table1Headers} />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <SimpleTable rows={Data.table1} headers={Data.table1Headers} />
          </Grid>
          <Grid container item xs={8} spacing={1}>
            <SimpleTable rows={Data.table2} headers={Data.table3Headers} />
          </Grid>
          <Grid container item xs={4} spacing={4}>
            <Grid container item xs={12} spacing={3}>
              <ContainedButtons />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <ContainedButtons />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4} spacing={3}>
          <Grid item xs={6}>
            <MyChart size='small' />
          </Grid>
          <Grid item xs={6}>
            <MyChart />
          </Grid>
          <Grid item xs={6}>
            <MyChart />
          </Grid>
          <Grid item xs={6}>
            <MyChart />
          </Grid>
          <Grid item xs={6}>
            <MyChart />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <Grid container item xs={6} spacing={1}><SimpleTable isCell={false} rows={Data.table4} headers={Data.table4Headers} /></Grid>
          <Grid container item xs={6} spacing={1}><SimpleTable isCell={false} rows={Data.table4} headers={Data.table4Headers} /></Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <LiveStreaming />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
