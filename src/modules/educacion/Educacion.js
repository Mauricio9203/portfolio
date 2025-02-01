import { Grid } from '@mui/material'
import React from 'react'
import ContenidoEducacion from './ContenidoEducacion'
import TituloEducacion from './TituloEducacion'

const Educacion = () => {
  return (
    <>
    <TituloEducacion/>
    <Grid container marginTop={6} >
      <ContenidoEducacion/>
    </Grid>
    </>
  )
}

export default Educacion
