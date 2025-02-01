import React, { useEffect, useState } from 'react';
import { Grid, Grow, Typography } from '@mui/material';
import { useTranslation } from '../context/i18nContext';
import { useDarkMode } from '../context/darkModeContext';


const Home = () => {
  const { translate } = useTranslation();
  const { darkMode} = useDarkMode();
  const [open, setOpen] = useState(false);
  const [openBienvenido, setOpenBienvenido] = useState(false)
  const [openNombre, setOpenNombre] = useState(false)
  const [openDescripcion, setOpenDescripcion] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpenBienvenido(false)
      setOpenNombre(true)
    }, 2000);

    setTimeout(() => {
      setOpenDescripcion(true)
    }, 3000);
    setOpenBienvenido(true)
    setOpen(true);
  }, []);

  return (
    <Grid container spacing={2} sx={{ margin: -1, padding: 0 }} mr={-2} >
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 500 } : {})}>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: 0, color: "white", backgroundColor: "#2E2E2E"}}
      >
        {!openBienvenido && 
            <Grow in={openNombre} style={{ transformOrigin: '0 0 0' }} {...(openNombre ? { timeout: 2000 } : {})}>
              <Grid item md={7} xs={12} sx={{ textAlign: "center", margin: 0 }}>
                <Typography variant='h4' sx={{ margin: 0, color:  darkMode ? "white":"white" }} >
                    Mauricio Garrido
                </Typography>
              </Grid>
            </Grow>
        }
        {
          openBienvenido &&
          <Grow in={openBienvenido} style={{ transformOrigin: '0 0 0' }} {...(openBienvenido ? { timeout: 2000 } : {})}>
            <Grid item md={7} xs={12} sx={{ textAlign: "center", margin: 0 }}>
              <Typography variant='h4' sx={{ margin: 0, color:  darkMode ? "white":"white" }} >
                {translate('Bienvenido')}
              </Typography>
            </Grid>
          </Grow>
        }
        <Grow in={openDescripcion} style={{ transformOrigin: '0 0 0' }} {...(openDescripcion ? { timeout: 3000 } : {})}>
          <Grid item md={6} xs={12} sx={{ textAlign: "center", margin: 0 }}>
            <Typography variant='body2' sx={{ margin: 0, color:  "white"}} >
              {translate('Descripcion')}            
            </Typography>
          </Grid>
        </Grow>
      </Grid>
      </Grow>
    </Grid>
  );
}

export default Home;
