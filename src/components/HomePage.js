import React from 'react';
import { Container, Box, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import image from '../MyImage';

const HomePage = () => {
  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0a192f',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', backgroundColor: '#00796b' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Avatar sx={{ width: 100, height: 100, backgroundColor: 'secondary.main' }}>
              <PersonIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Box>
          <Typography variant="h2" component="h1" gutterBottom>
            I'm a Full Stack Web Developer
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            I have a background in web development. Currently, I work on web applications using technologies like React, Tailwind CSS, Material-UI, Node.js, Python, and PostgreSQL.
          </Typography>
          <Button component={Link} to="/about" variant="contained" color="secondary" sx={{ mt: 3 }}>
            Learn More About Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
