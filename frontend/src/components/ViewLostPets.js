import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ViewLostPets = () => {
  const [lostPets, setLostPets] = useState([]);

  const fetchLostPets = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/v1/pets/all');
      setLostPets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLostPets();
  }, []); // Fetch initial data

  const handleDelete = async (petId) => {
    try {
      await axios.delete(`http://localhost:3005/api/v1/pets/${petId}`);
      // After deleting, fetch and update the pet list
      fetchLostPets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Lost Pets</h1>
      <Grid container spacing={2}>
        {lostPets.map((lostPet) => (
          <Grid item key={lostPet._id} xs={12} sm={4} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {lostPet.petName}
                </Typography>
                <img
                  src={`http://localhost:3005${lostPet.image}`} // Make sure your backend provides the correct image URL
                  alt={lostPet.petName}
                  style={{ maxWidth: '100%' }}
                />
                <Typography color="textSecondary">
                  Breed: {lostPet.breed}
                </Typography>
                <Typography color="textSecondary">
                  Owner Name: {lostPet.ownerName}
                </Typography>
                <Typography color="textSecondary">
                  Address: {lostPet.address}
                </Typography>
                <Button
                  startIcon={<EditIcon />}
                  component={Link}
                  to={`/changepet/${lostPet._id}`}
                  variant="outlined"
                  sx={{ backgroundColor: '#EFAE32', color: '#FFFFFF', marginRight: '10px', marginTop: '10px'}}
                  
                >
                  Edit
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(lostPet._id)}
                  variant="outlined"
                  sx={{ backgroundColor: '#EFAE32', color: '#FFFFFF' , marginRight: '10px', marginTop: '10px' }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewLostPets;
