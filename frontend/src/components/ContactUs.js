import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const iconStyle = { fontSize: 48, color: '#EFAE32' }; // Set the color to #EFAE32

const ContactUs = () => {
  return (
    <Container sx={{ mt: 4, backgroundColor: '#f5f4f2' }}> {/* Set the background color */}
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Have questions, feedback, or need assistance? We're here to help. Feel free to get in touch with us through any of the following methods:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <EmailIcon sx={iconStyle} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <a href="mailto:support@petrecovery.com">support@petrecovery.com</a>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <PhoneIcon sx={iconStyle} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <a href="tel:(123) 456-7890">(071) 4568762</a>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <ContactMailIcon sx={iconStyle} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Contact Form
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                You can also use our contact form to send us a message.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactUs;
