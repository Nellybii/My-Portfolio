import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const Project = () => {
  const projects = [
    {
      title: "Journaling App",
      description: "A web application that allows users to create, manage, and reflect on their personal journals. Built with Django for the backend and React for the frontend, this app features user authentication, rich text editing, and secure data storage.",
      imageUrl: "https://images.unsplash.com/photo-1620034949504-339c43e9cd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpvdXJuYWwlMjBlbnRyeXxlbnwwfHwwfHx8MA%3D%3D",
      demoLink: "https://journals-entry.vercel.app/",
    },
    {
      title: "Job Listing App",
      description: "A platform where recruiters can post job listings and candidates can apply for jobs, built with Django for the backend and React for the frontend.",
      imageUrl: "https://media.istockphoto.com/id/1443562017/photo/morning-connection.webp?a=1&b=1&s=612x612&w=0&k=20&c=7FU0i6SFg07Apf-Hg1CzFrBtuQ9NU5tT9ZBJaKTqtuA=", 
      demoLink: "https://lysterpro.vercel.app/", 
    },
    {
      title: "Movie Store Project",
      description: "A movie sale web application built with ReactJs, TypeScript, Django and PostgreSQl.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1683740127913-1ad16a4dc7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
      demoLink: "https://movie-app-frontend-git-main-nellybiis-projects.vercel.app/",
    },
    {
      title: "Pizza Project",
      description: "A Pizza web application built with React, Bootsrap, Flask and SQLite.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
      demoLink: "https://pizzas-frontend.vercel.app/",
    },
    
  ];

    return (
      <Box
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
        <Box
          sx={{
            py: 16,
            borderRadius: '12px',
            backgroundColor: '#00796b',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            maxWidth: '1000px',
          }}
        >
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', pb: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', borderBottom: '4px solid #00acc1', display: 'inline-block' }}>
                  My Projects
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ px: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ backgroundColor: 'white', color: '#0a192f', padding: '3px'}}>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="300"
                    image={project.imageUrl}
                    sx={{ borderRadius: '8px 8px 0 0' }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Button
                      href={project.demoLink}
                      variant="contained"
                      size="large"
                      sx={{ mx: 1, backgroundColor: '#0a192f', color: 'white', fontWeight: 'bold' }}
                    >
                      Demo
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  
  export default Project;