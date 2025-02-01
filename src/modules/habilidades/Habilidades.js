import { Grid } from '@mui/material'
import React from 'react'
import ContenidoHabilidades from './ContenidoHabilidades'
import TituloHabilidades from './TituloHabilidades'

const Habilidades = () => {
  return (
    <>
    <TituloHabilidades/>
    <Grid container mt={6} >
      <ContenidoHabilidades/>
    </Grid>
    </>
  )
}

export default Habilidades
