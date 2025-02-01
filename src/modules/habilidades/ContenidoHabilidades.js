import React, { useEffect, useState } from 'react';
import { Grid, Grow, Card, CardContent, Tooltip, Zoom } from '@mui/material';
import { useDarkMode } from '../../context/darkModeContext';

const ContenidoContacto = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  // Estado individual para cada Tooltip
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);
  const [tooltipOpen5, setTooltipOpen5] = useState(false);
  const [tooltipOpen6, setTooltipOpen6] = useState(false);
  const [tooltipOpen7, setTooltipOpen7] = useState(false);
  const [tooltipOpen8, setTooltipOpen8] = useState(false);
  const [tooltipOpen9, setTooltipOpen9] = useState(false);
  const [tooltipOpen10, setTooltipOpen10] = useState(false);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} >
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1000 } : {})}>
        <Grid item md={9} xs={12}>
          <Card sx={{ backgroundColor: darkMode ? "#2E2E2E" : "white", color: darkMode ? "white" : "black" }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: "15px" }}>
              <Tooltip
                title="Javascript"
                arrow
                placement="top"
                open={tooltipOpen1}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen1(true)}
                onMouseLeave={() => setTooltipOpen1(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/svg/js.svg'}
                  alt="JavaScript"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>

              <Tooltip
                title="Python"
                arrow
                placement="top"
                open={tooltipOpen2}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen2(true)}
                onMouseLeave={() => setTooltipOpen2(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/python.png'}
                  alt="Python"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
              <Tooltip
                title="PHP"
                arrow
                placement="top"
                open={tooltipOpen7}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen7(true)}
                onMouseLeave={() => setTooltipOpen7(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/php.png'}
                  alt="php"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>

              <Tooltip
                title="React"
                arrow
                placement="top"
                open={tooltipOpen3}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen3(true)}
                onMouseLeave={() => setTooltipOpen3(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/svg/react.svg'}
                  alt="React"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>

              <Tooltip
                title="Bootstrap"
                arrow
                placement="top"
                open={tooltipOpen4}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen4(true)}
                onMouseLeave={() => setTooltipOpen4(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/svg/bootstrap.svg'}
                  alt="Bootstrap"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>

             
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: "15px", marginTop: "-20px" }}>
            <Tooltip
                title="Material-UI"
                arrow
                placement="top"
                open={tooltipOpen5}
                TransitionComponent={Zoom}
                onMouseOver={() => setTooltipOpen5(true)}
                onMouseLeave={() => setTooltipOpen5(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/svg/material-ui.svg'}
                  alt="Material-UI"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
              <Tooltip
                title="MySQL"
                arrow
                placement="top"
                open={tooltipOpen6}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen6(true)}
                onMouseLeave={() => setTooltipOpen6(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/mysql.png'}
                  alt="JavaScript"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
              <Tooltip
                title="Jquery"
                arrow
                placement="top"
                open={tooltipOpen9}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen9(true)}
                onMouseLeave={() => setTooltipOpen9(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/jquery.png'}
                  alt="Jquery"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
              <Tooltip
                title="REST API"
                arrow
                placement="top"
                open={tooltipOpen8}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen8(true)}
                onMouseLeave={() => setTooltipOpen8(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/apiRest.png'}
                  alt="JavaScript"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
              <Tooltip
                title="NPM"
                arrow
                placement="top"
                open={tooltipOpen10}
                TransitionComponent={Zoom}
                onMouseEnter={() => setTooltipOpen10(true)}
                onMouseLeave={() => setTooltipOpen10(false)}
              >
                <img
                  className="zoom-svg"
                  src={process.env.PUBLIC_URL + '/img/png/npm.png'}
                  alt="NPM"
                  style={{ width: "50px", height: "auto" }}
                />
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
}

export default ContenidoContacto;
