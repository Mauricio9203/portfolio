import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, CircularProgress } from '@mui/material';
import NotificacionInferior from '../../components/NotificacionInferior';
import { useDarkMode } from '../../context/darkModeContext';
import { useTranslation } from '../../context/i18nContext';

const SendEmail = ({ openEmail }) => {
  const { darkMode} = useDarkMode();
  const { translate } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openNotificacion, setOpenNotificacion] = useState(false)
  const [mensajeNotificacion, setMensajeNotificacion] = useState("")
  const [notificacionTipo, setNotificacionTipo] = useState("success")
  const [cargando, setCargando] = useState(false)
  
  const handleSubmit = async (e) => {
    if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
        handleNotificacion(true, "Debe completar todos los campos", "warning")
    }else if(hanldeValidateEmail() === false){
        handleNotificacion(true, "El correo no cumple con el formato correcto.", "warning")
    }
    else
    {
        setCargando(true)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        const response = await fetch('https://formspree.io/f/xpzgrqdn', {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
            },
          });

          setCargando(false)
      
          setOpenNotificacion(true)
          if (response.ok) {
            setMensajeNotificacion("Correo enviado con éxito.")
            handleNotificacion(true, "Correo enviado con éxito.", "success")
            handleCleanForm()
          } else {
            handleNotificacion(true, "Error al enviar correo.", "error")
          }
    }
  };

  const hanldeValidateEmail = () => {
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return emailRegex.test(email);
  };

  const handleNotificacion = (open, mensaje, tipo) => {
    setOpenNotificacion(open)
    setMensajeNotificacion(mensaje)
    setNotificacionTipo(tipo)
  }

  const handleCleanForm = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Card sx={{backgroundColor: darkMode ? "grey": "white", color: darkMode ? "white": "black"}}>
        <NotificacionInferior 
        openNotificacion={openNotificacion} 
        setOpenNotificacion={setOpenNotificacion} 
        mensajeNotificacion={mensajeNotificacion}
        notificacionTipo={notificacionTipo}
        />
      <CardContent>
        <Typography variant="h5" gutterBottom>
        {translate("TituloFormulario")}
        </Typography>
          <TextField
            label={translate("NombreCompania")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: darkMode ? 'white': '' } 
            }}
            InputLabelProps={{
              style: { color: darkMode ? 'white': '', outlineColor: "white" } 
            }}
          />
          <TextField
            label={translate("CorreoContacto")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: darkMode ? 'white': '' } 
            }}
            InputLabelProps={{
              style: { color: darkMode ? 'white': '', outlineColor: "white" } 
            }}
          />
          <TextField
            label={translate("Mensaje")}
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: darkMode ? 'white': '' } 
            }}
            InputLabelProps={{
              style: { color: darkMode ? 'white': '', outlineColor: "white" } 
            }}
          />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            {translate("Enviar")}  {cargando && <CircularProgress color="inherit" size={20} style={{ marginLeft: '8px' }} />} {/* Muestra la animación de progreso si isLoading es true */}
          </Button>
      </CardContent>
    </Card>
  );
};

export default SendEmail;
