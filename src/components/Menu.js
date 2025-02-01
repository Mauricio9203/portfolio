import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from '../context/i18nContext';
import { useDarkMode } from '../context/darkModeContext';



const Inicio = () => {
  const {  setLanguage } = useTranslation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [idioma, setIdioma] = useState("EN")

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleButtonClick = () => {
   
    if(idioma === "ES"){
      setIdioma("EN")
      handleChangeLanguage('en')
    }else{
      setIdioma("ES")
      handleChangeLanguage('es')
    }
  };

  const handleMode = () => {
    toggleDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode === true){
      document.body.style.backgroundColor = "#666666"
    }else{
      document.body.style.backgroundColor = "#F8F8F8"

    }
  }, [darkMode])
  

  return (
    <div style={{marginTop: "50px"}}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        style={{ position: 'fixed', bottom: 10, right: 20, minWidth: "100px" }}
        onClick={handleButtonClick}
      >
        <LanguageIcon sx={{ mr: 1 }} />
        {idioma}
      </Fab>
      
        <Fab
          size="small"
          color= {darkMode ? "warning" : "secondary"}
          style={{ position: 'fixed', bottom: 10, right: 140}}
          onClick={handleMode}
        >
          {darkMode ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}

        </Fab>
    </div>
  );
};

export default Inicio;
