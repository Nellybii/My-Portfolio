import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl" sx={{ backgroundColor: '#0a192f', width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
            Portfolio
          </Typography>
          <Typography variant="body1" component={Link} to="/" sx={{ marginLeft: 2, textDecoration: 'none', color: 'white' }}>
            Home
          </Typography>
          <Typography variant="body1" component={Link} to="/about" sx={{ marginLeft: 2, textDecoration: 'none', color: 'white' }}>
            About
          </Typography>
          <Typography variant="body1" component={Link} to="/skills" sx={{ marginLeft: 2, textDecoration: 'none', color: 'white' }}>
            Skills
          </Typography>
          <Typography variant="body1" component={Link} to="/projects" sx={{ marginLeft: 2, textDecoration: 'none', color: 'white' }}>
            Projects
          </Typography>
          <Typography variant="body1" component={Link} to="/contact" sx={{ marginLeft: 2, textDecoration: 'none', color: 'white' }}>
            Contact
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
