import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotificacionInferior({openNotificacion, setOpenNotificacion, mensajeNotificacion, notificacionTipo}) {
  const [open, setOpen] = useState(openNotificacion);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotificacion(false)
  };

  useEffect(() => {
    setOpen(openNotificacion)
  }, [openNotificacion])
  

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notificacionTipo} sx={{ width: '100%' }}>
          {mensajeNotificacion}
        </Alert>
      </Snackbar>
    </Stack>
  );
}