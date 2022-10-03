import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
  
export default function Header() {
    return (
      <>
        <CssBaseline />
        <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Dan Davidov
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Software Developer
          </Typography>
          <Typography variant="body1">I like exploring and learning new technologies</Typography>
        </Container>
        </>
    );
  }