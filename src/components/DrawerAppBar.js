import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Proyectos from '../modules/proyectos/Proyectos';
import Habilidades from '../modules/habilidades/Habilidades';
import Contacto from '../modules/contacto/Contacto';
import Educacion from '../modules/educacion/Educacion';
import { useTranslation } from '../context/i18nContext';
import Trabajo from '../modules/trabajo/Trabajo';



function DrawerAppBar({ window }) {
  const { translate } = useTranslation();
  const drawerWidth = 240;
  const navItems = [translate("Proyectos"), translate("Habilidades"),translate("Trabajo"),translate("Educacion") ,translate("Contacto")];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false)
  

  const proyectosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const trabajoRef = useRef(null);
  const educacionRef = useRef(null);
  const contactoRef = useRef(null);

  const handleDrawerToggle = (item) => {
    setMobileOpen(!mobileOpen);
    switch (item) {
      case translate("Proyectos"):
        proyectosRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case translate("Habilidades"):
        habilidadesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case translate("Trabajo"):
        trabajoRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case translate("Educacion"):
        educacionRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case translate("Contacto"):
        contactoRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const handleDownloadCv = () => {
    // Ruta del archivo que quieres descargar
    const fileUrl = process.env.PUBLIC_URL + '/documents/cv.pdf'
    
    // Nombre del archivo que se mostrará al guardar
    const fileName = 'Mauricio_Garrido_CV.pdf';

    // Crear un elemento <a> para descargar el archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Simular un clic en el enlace para comenzar la descarga
    link.click();
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 500);
  }, [])
  

  const drawer = (
    <Box onClick={() => handleDrawerToggle()} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Mauricio Garrido
        <br/>
        <Button onClick={handleDownloadCv} sx={{  margin: '0 auto', backgroundColor: 'black', color: 'white', ':hover': { backgroundColor: '#330065' } }}>
          {translate('Curriculum')}
        </Button>
      </Typography>
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleDrawerToggle(item)}
            >
              <ListItemText secondary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Slide in={open}  style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1500 } : {})}>
      <AppBar component="nav" sx={{ backgroundColor: '#800080' }}>
        
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleDrawerToggle()}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', display: { xs: 'none', sm: 'block'} }}
            >
              Mauricio Garrido
            </Typography>
            <Button onClick={handleDownloadCv}  sx={{ display: { xs: 'none', sm: 'block'}, backgroundColor: "black", color: "white",   ":hover": {backgroundColor: "#330065" }}}>
            {translate("Curriculum")}
              </Button>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: '#fff' }}
                  onClick={() => handleDrawerToggle(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        
      </AppBar>
      </Slide>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={() => handleDrawerToggle()}
          ModalProps={{
            keepMounted: true, // Mejora el rendimiento en dispositivos móviles.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <div ref={proyectosRef}>
        </div>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      
          <Proyectos />
        
        <div ref={habilidadesRef}>
          <Habilidades />
        </div>
        <div ref={trabajoRef}>
          <Trabajo />
        </div>
        <div ref={educacionRef}>
          <Educacion/>
        </div>
        <div ref={contactoRef}>
          <Contacto />
        </div>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
