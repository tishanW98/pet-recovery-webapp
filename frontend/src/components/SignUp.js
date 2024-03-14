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
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#EFAE32',
    },
  },
});

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber')
    });

    await axios.post('http://localhost:3005/api/v1/lostPetOwners',{
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber')
    })
    .then(function(response){
      console.log(response);
      window.location.href= "/signin";
    })
    .catch(function(error){
      alert("error");
      console.log(error);
    });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'

          }}
        >
          
          <Typography component="h1" variant="h5" color="#EFAF32">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
  autoComplete="given-name"
  name="name"
  required
  fullWidth
  id="name"
  label="name"
  autoFocus
  sx={{
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EFAF32', // Change border color when focused
    },
    '& label.Mui-focused': {
      color: '#000000', // Label color when focused
    },
  }}
/>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#EFAF32', // Change border color when focused
                    },
                    '& label.Mui-focused': {
                      color: '#000000', // Label color when focused
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#EFAF32', // Change border color when focused
                    },
                    '& label.Mui-focused': {
                      color: '#000000', // Label color when focused
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="new-phoneNumber"
                  sx={{
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#EFAF32', // Change border color when focused
                    },
                    '& label.Mui-focused': {
                      color: '#000000', // Label color when focused
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,
              backgroundColor: '#EFAF32',
            color: '#FFFFFF', '&:hover': {
              backgroundColor: '#EFAF32', // Hover color
            },}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <RouterLink to="/signin" variant="body2">
                  {'Already have an account? Sign In'}
                  </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}