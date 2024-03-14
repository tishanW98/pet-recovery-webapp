import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { orange } from '@mui/material/colors';
import leftImage from '../allimages/left_image.png';
import rightImage from '../allimages/right_image.png';
import { Link as RouterLink } from 'react-router-dom';




const customTheme = createTheme({
  palette: {
    primary: {
      main: '#EFAE32',
    },
  },
});

export default function LogIn() {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    await axios
      .post('http://localhost:3005/api/v1/foundPetPersons/login', {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then(function (response) {
        console.log(response);
        dispatch(login(response.data));
        window.location.href = '/createfoundpet';
      })
      .catch(function (error) {
        alert('error');
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={leftImage} alt="Left Image" style={{ width: '30%', padding:'0 0 0 50px'}} /> {/* Adjust the width as needed */}
        <Container component="main" maxWidth="xs" style={{ height: '80vh' }} >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Sign in 
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                <RouterLink to="/logup" variant="body2">
                  {'Don\'t have an account? Sign Up'}
                  </RouterLink>

                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <img src={rightImage} alt="Right Image" style={{ width: '30%', padding:'0 50px 0 0' }} /> {/* Adjust the width as needed */}
      </Box>
    </ThemeProvider>
  );
}
