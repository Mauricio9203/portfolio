import React, { useEffect, useRef, useState } from 'react';
import { Fab, Grid, Grow, Card, CardContent, Collapse } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import SendEmail from './SendEmail';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDarkMode } from '../../context/darkModeContext';



const ContenidoContacto = () => {
  const [open, setOpen] = useState(false);
  const { darkMode} = useDarkMode();
  const [openEmail, setOpenEmail] = useState(false);
  const sendEmailRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '64273893855';
    const message = 'Hello Mauricio';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
  };

  const handleGithubClick = () => {
    const linkGithub = "https://github.com/Mauricio9203";
    window.open(linkGithub);
  }

  const handleLinkedinClick = () => {
    const linkLinkedin = "https://www.linkedin.com/in/mauricio-garrido-b7bb51242/";
    window.open(linkLinkedin);
  }

  const handleShowSendEmail = () => {
    setOpenEmail(!openEmail);

    if (!openEmail && sendEmailRef.current) {
      setTimeout(() => {
        sendEmailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      
    }
  }

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1000 } : {})}>
        <Grid item md={9} xs={12}>
          <Card sx={{backgroundColor: darkMode ? "#2E2E2E": "white", color: darkMode ? "white": "black"}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <Fab size="small" color="primary" sx={{ marginRight: "10px" }} onClick={handleLinkedinClick}>
                <LinkedInIcon />
              </Fab>
              <Fab size="small" color='secondary' sx={{ marginRight: "10px" }} onClick={handleGithubClick}>
                <GitHubIcon />
              </Fab>
              <Fab size="small" color='success' sx={{ marginRight: "10px" }} onClick={handleWhatsAppClick}>
                <WhatsAppIcon />
              </Fab>
              <Fab size="small" color={openEmail ? "error" : "info"} sx={{ marginRight: "10px" }} onClick={handleShowSendEmail}>
                {openEmail ? <CancelIcon /> : <MailIcon />}
              </Fab>
            </CardContent>
            <div ref={sendEmailRef}>
            <Collapse in={openEmail}>
         
              <SendEmail openEmail={openEmail} />
            
            </Collapse>
            </div>
           
          </Card>
        </Grid>
      </Grow>
     
    
      
    </Grid>
  );
}

export default ContenidoContacto;
