import React from 'react';
import {Typography, Table,TableRow, TableCell, tableCellClasses, AppBar, CssBaseline , Toolbar, Container} from '@mui/material'
import BasicTabs from './Tab';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import about from './pages/about';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<about/>}/>
      </Routes>
    </BrowserRouter>
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
