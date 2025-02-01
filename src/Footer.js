import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#222',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="body2">
            © {new Date().getFullYear()} Mauricio Garrido
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://github.com/Mauricio9203/portfolio"
            target="_blank"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#f5a623' },
            }}
          >
            <GitHubIcon sx={{ marginRight: '6px', fontSize: '20px' }} />
            Explore my portfolio repository
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
