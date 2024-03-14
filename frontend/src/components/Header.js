import * as React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../allimages/dog.png'; // Adjust the path to your logo image

const Header = () => {
  const dispatch = useDispatch();

  const linkStyles = {
    textDecoration: 'none', // Remove underline
    color: 'black', // Text color for links
    margin: '0 1.5rem', // Margin between links
  };

  const logoutButtonStyles = {
    color: 'white', // Text color for the "LogOut" button
    backgroundColor: '#EFAE32', // Background color for the "LogOut" button
    borderRadius: '5px', // Rounded corners
    margin: '0 1.5rem', // Margin for the "LogOut" button
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Link component={RouterLink} to="/home">
          <img src={logo} alt="Logo" style={{ height: '30px' }} />
        </Link>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <span style={{ fontWeight: 'normal', color: 'black' }}>
            pet
          </span>
          <span style={{ fontWeight: 'bold', color: '#EFAF32' }}>
            Recovery
          </span>
        </Typography>
        <nav>
          <Link variant="button"  to="/login" component={RouterLink} sx={linkStyles}>
            I Found a Pet
          </Link>
          <Link variant="button" color="text.primary" to="/signin" component={RouterLink} sx={linkStyles}>
            I Lost My Pet
          </Link>
          <Link
            variant="button"
            color="text.primary"
            to="/aboutus"
            component={RouterLink}
            sx={linkStyles}
          >
            About Us
          </Link>
          <Link
            variant="button"
            color="text.primary"
            to="/contactus"
            component={RouterLink}
            sx={linkStyles}
          >
            Contact Us
          </Link>
        </nav>
        <Button
          onClick={() => {
            dispatch(logout());
            window.location.href = "/home";
          }}
          href="#"
          variant="outlined"
          sx={logoutButtonStyles}
        >
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
