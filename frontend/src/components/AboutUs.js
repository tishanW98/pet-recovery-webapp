import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const containerStyle = {
  backgroundColor: '#f5f4f2', // Set the background color
  padding: '20px', // Add padding for spacing
  minHeight: '100vh', // Ensure the container stretches to the full height
};

const AboutUs = () => {
  return (
    <Container sx={{ ...containerStyle, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Pet Recovery
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Pet Recovery</strong> is on a mission to reunite lost pets with their loving owners. We understand that losing a pet can be a distressing experience, and finding a lost pet is equally important. Our platform is designed to make this process easier and more efficient.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          At <strong>Pet Recovery</strong>, we believe that every pet is part of the family. Our dedicated team is passionate about creating a community where pet owners and compassionate individuals who have found lost pets can connect and collaborate. Together, we can bring happiness back into the lives of both pets and their owners.
        </Typography>

        <Typography variant="body1">
          <strong>Our Goals:</strong>
        </Typography>
        <ul>
          <li>Provide a user-friendly platform to report and search for lost pets.</li>
          <li>Facilitate quick and efficient communication between pet owners and finders.</li>
          <li>Offer helpful resources and tips for pet care and safety.</li>
        </ul>

        <Typography variant="body1" sx={{ mt: 2 }}>
          We are committed to making a difference in the lives of pets and their owners. Thank you for joining us on this journey to reunite lost pets with their homes.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Our Team
            </Typography>
            <Typography variant="body1">
              Meet the passionate individuals behind Pet Recovery who work tirelessly to make this platform a reality.
            </Typography>
            {/* Add team member information, photos, and descriptions here */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              Our mission is to create a world where lost pets quickly find their way back to their loving homes.
            </Typography>
            {/* Add more details about your mission and goals here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
