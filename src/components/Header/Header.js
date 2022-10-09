import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ReactComponent as MyLogo} from '../../assets/coding.svg'

export default function Header() {
    return (
      <>
        <CssBaseline />
        <Container component="main" sx={{ mt: 2, mb: 2}} maxWidth="sm">
        <MyLogo fill="#47B5FF" stroke="#47B5FF" width={100} height={100}/>
          <Typography style={{color:"#47B5FF"}} variant="h2" component="h1" gutterBottom>
            Dan Davidov
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Full-Stack Developer
          </Typography>
          <Typography variant="body1">I like exploring and learning new technologies</Typography>
        </Container>
        </>
    );
  }