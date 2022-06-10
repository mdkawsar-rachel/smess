import React from 'react'
import { CssBaseline } from '@mui/material'
import BasicTabs from '../Tab';
import Header from './header';
const home = () => {
  return (
    <>
<CssBaseline/>
      <Header/>
      <BasicTabs/>
    </>
  )
}

export default home