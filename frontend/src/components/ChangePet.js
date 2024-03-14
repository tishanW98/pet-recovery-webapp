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

const ChangePet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    petName: '',
    breed: '',
    ownerName: '',
    address: '',
  });
  const [image, setImage] = useState(null); // New state for the image file

  useEffect(() => {
    axios.get(`http://localhost:3005/api/v1/pets/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('petName', pet.petName);
    formData.append('breed', pet.breed);
    formData.append('ownerName', pet.ownerName);
    formData.append('address', pet.address);
    if (image) {
      formData.append('image', image);
    }

    axios.put(`http://localhost:3005/api/v1/pets/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('Pet details updated:', response.data);
        navigate('/lostpets'); // Use navigate to change the route
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5" sx={{ color: '#EFAF32', textAlign: 'center', mt: 4 }}>
          Edit Pet
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
            id="petName"
            label="Pet Name"
            name="petName"
            value={pet.petName}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            id="breed"
            label="Breed"
            name="breed"
            value={pet.breed}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            id="ownerName"
            label="Owner Name"
            name="ownerName"
            value={pet.ownerName}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            id="address"
            label="Address"
            name="address"
            value={pet.address}
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
            Update Pet
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChangePet;
