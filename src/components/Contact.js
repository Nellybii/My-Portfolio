import React from 'react';
import { Container, Box, Typography, Link, Grid } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box name="contact" sx={{ backgroundColor: '#0a192f', minHeight: '100vh', color: 'white', py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', borderBottom: '4px solid #00acc1', display: 'inline-block', pb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Let's Connect!
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#00796b', p: 2, borderRadius: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ fontSize: 30 }} />
                <Typography variant="body1">
                  <Link href="mailto:nellychepkem2015@gmail.com" color="inherit" underline="hover">
                    nellychepkem2015@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#00796b', p: 2, borderRadius: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ fontSize: 30 }} />
                <Typography variant="body1">
                  +254706553702
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#00796b', p: 2, borderRadius: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LinkedIn sx={{ fontSize: 30 }} />
                <Link href="https://www.linkedin.com/in/nelly-chepkemoi-6b06951a0/" color="inherit" underline="hover">
                  LinkedIn Profile
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#00796b', p: 2, borderRadius: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GitHub sx={{ fontSize: 30 }} />
                <Link href="https://github.com/Nellybii" color="inherit" underline="hover">
                  GitHub Profile
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
