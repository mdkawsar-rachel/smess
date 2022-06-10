import React from 'react'
import {Typography, Table,TableRow, TableCell, tableCellClasses, AppBar , Toolbar, Container, ThemeProvider, createTheme} from '@mui/material'

const logoFont = createTheme({
  typography: {
    fontFamily: [
      'Madrigal'
    ],
},});

const header = () => {
  return (
    <>
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
                  <ThemeProvider theme={logoFont}>
                      <Typography variant='h4'>
                      Smess
                      </Typography>
                  </ThemeProvider>
                  </TableCell>
              </TableRow>
          </Table>
      </Toolbar>
      </AppBar>
    </>
  )
}

export default header