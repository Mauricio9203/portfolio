import { Divider, Grid } from '@mui/material'
import React from 'react'
import ContenidoContacto from './ContenidoContacto'
import TituloContacto from './TituloContacto'


const Contacto = () => {
  return (
    <>
    <TituloContacto/>
    <Grid container marginTop={6} >
      <ContenidoContacto/>
    </Grid>
    </>
  )
}

export default Contacto
