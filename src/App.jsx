import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material';


const App = () => {
  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera/>
        <Typography variant='h6' marginLeft="8px">
          Photo Album
        </Typography>
      </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' color="textSecondary" align='center' paragraph>
              Hello, everyone. This is a paragraph that I'm trying to write to make the sentence look bigger. This is not enough yet so, I'm still writing something.

            </Typography>
          </Container>
        </div>
      </main>

    </>
  );
}

export default App;
