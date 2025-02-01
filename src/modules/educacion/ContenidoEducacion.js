import React, { useEffect, useState } from 'react';
import { Grid, Grow, Card, CardContent, Typography, Divider, Tooltip } from '@mui/material';
import { useDarkMode } from '../../context/darkModeContext';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from '../../context/i18nContext';




const ContenidoEducacion = () => {
  const [open, setOpen] = useState(false);
  const { darkMode} = useDarkMode();
  const { translate } = useTranslation();

  const SmallButton = ({fileUrl, nombre}) => {

    const handleDownload = () => {
      handleDownloadDocument(fileUrl, nombre);
    };
  
    return (
    <Tooltip title={translate("DescargarDocumento")} arrow placement='top'>
      <Button
      onClick={handleDownload}
      size="small"
      variant="contained"
      style={{
        marginRight:"10px",
        borderRadius: '50%',
        width: '25px',
        height: '25px',
        minWidth: 'auto'
      }}
      >
        <DownloadIcon fontSize='small' style={{ fontSize: '14px', animation: "rotate 2s linear infinite" }} />
      </Button>
    </Tooltip>
    );
  }
  
  const handleDownloadDocument = (fileUrl, fileName) => {
    
    // Crear un elemento <a> para descargar el archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
  
    // Simular un clic en el enlace para comenzar la descarga
    link.click();
  };
  

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);




  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1000 } : {})}>
        <Grid item md={9} xs={12}>
          <Card sx={{backgroundColor: darkMode ? "#2E2E2E": "white", color: darkMode ? "white": "black"}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'left' }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{width: "100%"}}
              >
                <Grid item md={4} xs={12}>
                  <Typography variant='h6'>{translate("Educacion")}</Typography>
                  <Divider sx={{width: "95%", marginBottom: "20px"}}/>
                  <Typography variant='subtitle2'><HistoryEduIcon fontSize='4px' sx={{marginRight: "10px"}}/>{translate("Ingeniero")}</Typography>
                  <Typography variant='subtitle2'><LocationOnIcon fontSize='4px' sx={{marginRight: "10px"}}/>{translate("Universidad")}</Typography>
                  <Typography variant='subtitle2'><CalendarMonthIcon fontSize='4px' sx={{marginRight: "10px"}}/>2015 - 2019</Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Typography variant='h6'>{translate("ExperienciaLaboralEducativa")}</Typography>
                  <Divider sx={{width: "95%", marginBottom: "20px"}}/>
                  <Typography variant='subtitle2'><LaptopChromebookIcon fontSize='4px' sx={{marginRight: "10px"}}/><b>2016 - 2018:</b> {translate("AyudanteTi")}</Typography>
                  <Typography variant='subtitle2'><LaptopChromebookIcon fontSize='4px' sx={{marginRight: "10px"}}/><b>2019:</b> {translate("AyudanteEstrategia")}</Typography>                
                </Grid>
                <Grid item md={4} xs={12} >
                  <Typography variant='h6'>{translate("Certificados")}</Typography>
                  <Divider sx={{width: "95%", marginBottom: "20px"}}/>
                  <Typography variant='subtitle2'>
                    <SmallButton fileUrl={process.env.PUBLIC_URL + '/documents/Titulo.pdf'} nombre={translate("TituloUniversitario")} />
                    {translate("Ingeniero")}
                  </Typography>
                  <Typography variant='subtitle2' sx={{marginTop: "10px"}}>
                    <SmallButton fileUrl={process.env.PUBLIC_URL + '/documents/Licenciatura.pdf'} nombre={translate("LicenciaturaUniversitaria")}  />
                    {translate("NombreLicencia")}
                  </Typography>
                  <Typography variant='subtitle2' sx={{marginTop: "10px"}}>
                    <SmallButton fileUrl={process.env.PUBLIC_URL + '/documents/CertificadoZendesk.pdf'} nombre={"Mauricio Garrido - Zendesk Support Certified Expert I"}  />
                    {translate("CertificadoZendesk")}
                  </Typography>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
}

export default ContenidoEducacion;
