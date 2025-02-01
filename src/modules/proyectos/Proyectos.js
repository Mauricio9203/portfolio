import React from 'react'
import Pokedex from './Pokedex'
import PanelAdmin from './PanelAdmin'
import {Grid } from '@mui/material'
import DepositPredictor from './DepositPredictor'
import TituloProyectos from './TituloProyectos'



const Proyectos = () => {
  return (
    <>
    <TituloProyectos/>
    <Grid container  marginBottom={4}  spacing={2} flex={1} justifyContent="center" alignContent="center" >
      <DepositPredictor/>
      <PanelAdmin/>
      <Pokedex/>
    </Grid>
    </>
  )
}

export default Proyectos
