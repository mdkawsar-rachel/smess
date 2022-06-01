import React from 'react';
import {Typography, Table,TableRow, TableCell, tableCellClasses, AppBar, CssBaseline , Toolbar, Container} from '@mui/material'
import BasicTabs from './Tab';


const App = () => {

  return (
    <>
      <CssBaseline/>
      <AppBar position='relative' elevation={0}>
      <Toolbar>
          <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
          }
        }}
      >
              <TableRow>
                  <TableCell align='center'>
                      <Typography variant='h4'>
                      Smess
                      </Typography>
                  
                  </TableCell>
              </TableRow>
          </Table>
      </Toolbar>
      </AppBar>
      <BasicTabs/>

    </>
  );
}

export default App;
