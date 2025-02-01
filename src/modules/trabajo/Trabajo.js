import { Grid } from '@mui/material'
import React from 'react'
import ContenidoTrabajo from './ContenidoTrabajo'
import TituloTrabajo from './TituloTrabajo'

const Trabajo = () => {
  return (
    <>
    <TituloTrabajo/>
    <Grid container marginTop={6} >
      <ContenidoTrabajo/>
    </Grid>
    </>
  )
}

export default Trabajo
