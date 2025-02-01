import { Divider, Grid, Grow, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../../App.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useDarkMode } from "../../context/darkModeContext";
import { useTranslation } from "../../context/i18nContext";
import ModalGlobal from "./ModalGlobal";

const Pokedex = () => {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const { translate } = useTranslation();
  const [imagen, setImagen] = useState(
    process.env.PUBLIC_URL + "/img/png/Pokedex.PNG"
  );

  const handleIniciarAnimacion = () => {
    let imagenGif = process.env.PUBLIC_URL + "/img/gif/pokedex_gif.gif";
    setImagen(imagenGif);
  };

  const handleFinalizarAnimacion = () => {
    let imagen = process.env.PUBLIC_URL + "/img/png/Pokedex.PNG";
    setImagen(imagen);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <Grow
      in={open}
      style={{ transformOrigin: "0 0 0" }}
      {...(open ? { timeout: 1000 } : {})}
    >
      <Grid item md={3} xs={12} sx={{ textAlign: "left" }}>
        <Card
          className="zoom-image"
          sx={{
            backgroundColor: darkMode ? "#2E2E2E" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={imagen}
            onMouseOver={() => handleIniciarAnimacion()}
            onMouseOut={() => handleFinalizarAnimacion()}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {translate("NombreProyecto_PokemonApp")}
            </Typography>
            <Divider sx={{ backgroundColor: darkMode ? "#555555" : "" }} />
            <Typography variant="body2" >
              {translate("DescripcionProyecto_PokemonApp")}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Bootstrap">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/bootstrap.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="React">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/react.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="Javascript">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/js.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="CSS">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/css-3.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="Api REST">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/png/apiRest.png"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
          </CardActions>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center", // Centra los botones horizontalmente
              gap: 1, // Espacio entre botones (opcional)
            }}
          >
            <Button
              color="secondary"
              target="_blank"
              variant="contained"
              href="https://mauricio9203.github.io/pokedex/"
              size="small"
              startIcon={<PlayCircleOutlineIcon />}
            ></Button>
            <Button
              target="_blank"
              variant="contained"
              href="https://github.com/Mauricio9203/pokedex"
              size="small"
              startIcon={<GitHubIcon />}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333", // Opcional, para un hover más suave
                },
              }}
            >
              {" "}
            </Button>
            <ModalGlobal 
        title="Pokedex" 
        content={translate("DescripcionPokedex")}
      />
          </CardActions>
        </Card>
      </Grid>
    </Grow>
  );
};

export default Pokedex;
