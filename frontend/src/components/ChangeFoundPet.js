import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#EFAF32',
    },
  },
});

const ChangeFoundPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [foundPet, setFoundPet] = useState({
    foundLocation: '',
    description: '',
    contactDetails: '',
  });
  const [image, setImage] = useState(null); // New state for the image file

  useEffect(() => {
    axios.get(`http://localhost:3005/api/v1/foundpets/${id}`)
      .then((response) => {
        setFoundPet(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoundPet({
      ...foundPet,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('foundLocation', foundPet.foundLocation);
    formData.append('description', foundPet.description);
    formData.append('contactDetails', foundPet.contactDetails);
    if (image) {
      formData.append('image', image);
    }

    axios.put(`http://localhost:3005/api/v1/foundpets/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Found pet details updated:', response.data);
        navigate('/foundpets'); // Use navigate to change the route
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5" sx={{ color: '#EFAF32', textAlign: 'center', mt: 4 }}>
          Edit Found Pet
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="foundLocation"
            label="Found Location"
            name="foundLocation"
            value={foundPet.foundLocation}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={foundPet.description}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            id="contactDetails"
            label="Contact Details"
            name="contactDetails"
            value={foundPet.contactDetails}
            onChange={handleInputChange}
            variant="outlined"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: '#EFAF32', color: '#FFFFFF' }}
            onClick={handleUpdate}
          >
            Update Found Pet
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChangeFoundPet;
