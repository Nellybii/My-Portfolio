import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';

const Skills = () => {
  return (
    <Box
      name='skills'
      className='w-full h-screen bg-[#0a192f] text-gray-300'
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#0a192f' }}
    >
      <Container maxWidth="md">
        <Box sx={{ p: 4 }}>
          <Typography variant="h2" sx={{ borderBottom: '4px solid #00acc1', textAlign: 'center', mb: 4, color:'white' }}>
            Skills
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, color:'white' }}>
            Here's a list of technologies I've worked with:
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                HTML
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                CSS
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                JavaScript
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                React
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                TypeScript
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                GitHub
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                Node.js
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                Flask
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                Django
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                MySQL
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                PostgreSQL
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#00796b', color: 'white' }}>
                MongoDB
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
