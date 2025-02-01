import React, { useEffect, useState } from 'react';
import { Grid, Grow, Card, CardContent, Typography, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import { useDarkMode } from '../../context/darkModeContext';
import { useTranslation } from '../../context/i18nContext';

const ContenidoTrabajo = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const { translate } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  // Definir las experiencias y traducir dinámicamente con translate
  const experiences = [
    {
      company: translate("ExperiencesCompanyZerviZ"),
      role: translate("ExperiencesRoleZerviZ"),
      years: translate("ExperiencesYearsZerviZ"),
      responsibilities: [
        translate("ExperiencesZendeskConfigurationZerviZ"),
        translate("ExperiencesClientMeetingsZerviZ"),
        translate("ExperiencesApplicationDevelopmentZerviZ"),
        translate("ExperiencesDataExtractionETLZerviZ")
      ]
    },
    {
      company: translate("ExperiencesCompanyKamaleon"),
      role: translate("ExperiencesRoleKamaleon"),
      years: translate("ExperiencesYearsKamaleon"),
      responsibilities: [
        translate("ExperiencesDatabaseDesignKamaleon"),
        translate("ExperiencesFrontEndDevelopmentKamaleon"),
        translate("ExperiencesBackEndDevelopmentKamaleon")
      ]
    },
    {
      company: translate("ExperiencesCompanyFreelance"),
      role: translate("ExperiencesRoleFreelance"),
      years: translate("ExperiencesYearsFreelance"),
      responsibilities: [
        translate("ExperiencesProjectDevelopmentFreelance"),
        translate("ExperiencesZendeskConsultancyFreelance"),
        translate("ExperiencesDataExtractionETLFreelance")
      ]
    }
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grow in={open} style={{ transformOrigin: '0 0 0' }} {...(open ? { timeout: 1000 } : {})}>
        <Grid item md={9} xs={12}>
          <Card sx={{ backgroundColor: darkMode ? "#2E2E2E" : "white", color: darkMode ? "white" : "black" }}>
            <CardContent>
              <Grid container spacing={3}>
                {experiences.map((exp, index) => (
                  <Grid item md={4} xs={12} key={index}>
                    <Typography variant="h6" sx={{ color: darkMode ? "white" : "black" }}>{exp.company}</Typography>
                    <Divider sx={{ width: "100%", marginBottom: "10px" }} />
                    <Typography variant="subtitle2" display="flex" alignItems="center" sx={{ color: darkMode ? "white" : "gray" }}>
                      <PersonIcon fontSize="small" sx={{ marginRight: "5px", fontSize: "16px" }} /> {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" display="flex" alignItems="center" sx={{ color: darkMode ? "white" : "gray", marginTop: "5px" }}>
                      <CalendarTodayIcon fontSize="small" sx={{ marginRight: "5px", fontSize: "16px" }} /> {exp.years}
                    </Typography>
                    {/* Título de responsabilidades */}
                    <Typography variant="body2" display="flex" alignItems="center" sx={{ marginTop: "10px", fontWeight: "bold", color: darkMode ? "white" : "#575757" }}>
                      <DescriptionIcon fontSize="small" sx={{ marginRight: "5px", fontSize: "16px" }} /> {translate("Responsabilidades")}
                    </Typography>
                    <ul style={{ marginTop: "5px", paddingLeft: "20px", color: darkMode ? "white" : "gray" }}>
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: "5px", listStyleType: darkMode ? '"- "' : '"• "' }}>
                          <Typography variant="body2" sx={{ color: darkMode ? "white" : "gray" }}>
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
};

export default ContenidoTrabajo;
