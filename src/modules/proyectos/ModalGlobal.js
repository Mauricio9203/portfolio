import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article"; // Icono de informe 📝
import { useDarkMode } from "../../context/darkModeContext";

const ModalGlobal = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { darkMode } = useDarkMode();

  const handleOpen = () => {
    setModalContent(content); // Cargar el contenido al hacer clic
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Botón para abrir el modal */}
      <Button
        color="primary"
        variant="contained"
        size="small"
        startIcon={<ArticleIcon />}
        onClick={handleOpen}
        sx={{ ml: 1 }}
      >
        Detail
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            maxWidth: "800px", // Limita el ancho máximo
            height: "90vh",
            bgcolor:  darkMode ? "#2E2E2E" : "white",
            color: darkMode ? "white" : "black",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Título dinámico */}
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            {title}
          </Typography>

          {/* Contenido dinámico con HTML y barra de desplazamiento */}
          <Box
            sx={{
              flex: 1, // Para que el contenido se ajuste al tamaño disponible
              overflowY: "auto", // Barra de desplazamiento vertical
              maxHeight: "60vh", // Limitar la altura del contenido
              mb: 2,
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </Box>

          {/* Footer con botón de Cerrar */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: "auto" }}>
            <Button
              onClick={handleClose}
              sx={{ width: "150px", height: "30px" }}
              variant="contained"
            >
              Cerrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalGlobal;
