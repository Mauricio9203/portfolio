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

const PanelAdmin = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const { translate } = useTranslation();
  const imagen = process.env.PUBLIC_URL + "/img/png/panel_admin_mg.png";

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
          <CardMedia component="img" alt="Panel Admin" image={imagen} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {translate("NombreProyecto_PanelAdminApp")}
            </Typography>
            <Divider sx={{ backgroundColor: darkMode ? "#555555" : "" }} />
            <Typography variant="body2">
              {translate("DescripcionProyecto_PanelAdminApp")}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Javascript">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/js.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="Python">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/png/python.png"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="Flask">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/flask_logo.svg"}
                style={{ width: "50px" }}
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
            <Tooltip title="Bootstrap">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/bootstrap.svg"}
                style={{ width: "30px" }}
                alt="Logo"
              />
            </Tooltip>
            <Tooltip title="Supabase">
              <img
                className="zoom-svg"
                src={process.env.PUBLIC_URL + "/img/svg/supabase.svg"}
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
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Button
              color="secondary"
              target="_blank"
              variant="contained"
              href="https://myadminpanel-x318.onrender.com/login"
              size="small"
              startIcon={<PlayCircleOutlineIcon />}
              sx={{  fontSize: "0.6rem"}}
            >LIVE</Button>
            <Button
              target="_blank"
              variant="contained"
              href="https://github.com/Mauricio9203/myadminpanel"
              size="small"
              startIcon={<GitHubIcon />}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
                fontSize: "0.6rem"
              }}
            >GITHUB</Button>
            <ModalGlobal
              title="Admin Panel"
              content={translate("DescripcionAdminPanel")}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grow>
  );
};

export default PanelAdmin;