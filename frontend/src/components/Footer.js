import * as React from 'react';
import { AppBar, Toolbar, Typography, Link, Button, Container, Grid } from '@mui/material';


const Footer = () => {

  const footers = [
    {
      title: 'About',
      description: ['About Us'],
    },
    {
      title: 'Contact',
      description: [
        'Contact Us'
      ],
    },
    {
      title: 'Partners',
      description: ['Pet Owners', 'Volunteers', 'Pet Clinics'],
    },
    {
      title: 'Lost Pet',
      description: ['Lost Pet', 'Found Pet'],
    },
  ];

  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul style={{ listStyleType: 'none' }}>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Footer;
