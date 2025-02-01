import React, { useEffect, useState } from 'react';
import { Grid, Grow, Card, CardContent, Typography } from '@mui/material';
import { useDarkMode } from '../../context/darkModeContext';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from '../../context/i18nContext';


const TituloTrabajo = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const { translate } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);


  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4} mb={-5} mt={1}>
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1000 } : {})}>
        <Grid item md={9} xs={12} >
          <Card sx={{ backgroundColor: darkMode ? "black" : "black", color: darkMode ? "white" : "white", height: "60px" }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <WorkIcon sx={{ fontSize: 30, marginRight: 2 }} />
              <Typography variant="h5">
              {translate("Trabajo")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
}

export default TituloTrabajo;
