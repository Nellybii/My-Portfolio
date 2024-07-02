import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0a192f',
        color: 'text.primary',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          py: 16,
          borderRadius: '12px',
          backgroundColor: '#00796b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          maxWidth: '1000px',
        }}
      >
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' }, pb: 4, pl: { sm: 4 } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', borderBottom: '4px solid #00acc1', display: 'inline-block' }}>
                About
              </Typography>
            </Box>
          </Grid>
        
        </Grid>
        <Grid container spacing={4} sx={{ px: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" sx={{ textAlign: { xs: 'center', sm: 'right' }, fontWeight: 'bold', mb: 2 }}>
              Hi. I'm Nelly Chepkemoi, nice to meet you. Please take a look of my profile.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
            I am a seasoned software developer specializing in building responsive and scalable web applications. With expertise in both frontend and backend development, I bring a comprehensive understanding of industry best practices and principles.

            My proficiency spans a wide range of technologies, including React, Bootstrap, Material-UI for frontend development, and Node.js, Python (Flask, Django), MongoDB, and PostgreSQL for backend development. This diverse skill set allows me to craft robust and efficient solutions tailored to meet the unique needs of each project.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
