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

const ViewFoundPets = () => {
  const [foundPets, setFoundPets] = useState([]);

  const fetchFoundPets = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/v1/foundpets/all');
      setFoundPets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFoundPets();
  }, []); // Fetch initial data

  const handleDelete = async (foundpetId) => {
    try {
      await axios.delete(`http://localhost:3005/api/v1/foundpets/${foundpetId}`);
      // After deleting, fetch and update the pet list
      fetchFoundPets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Found Pets</h1>
      <Grid container spacing={2}>
        {foundPets.map((foundPet) => (
          <Grid item key={foundPet._id} xs={12} sm={4} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {foundPet.foundLocation}
                </Typography>
                <img
                  src={`http://localhost:3005${foundPet.image}`} // Make sure your backend provides the correct image URL
                  alt={foundPet.foundLocation}
                  style={{ maxWidth: '100%' }}
                />
                <Typography color="textSecondary">
                  Description: {foundPet.description}
                </Typography>
                <Typography color="textSecondary">
                  Contact Details: {foundPet.contactDetails}
                </Typography>
                <Button
                  startIcon={<EditIcon />}
                  component={Link}
                  to={`/changefoundpet/${foundPet._id}`}
                  variant="outlined"
                  sx={{ backgroundColor: '#EFAE32', color: '#FFFFFF', marginRight: '10px', marginTop: '10px'}}
                >
                  Edit
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(foundPet._id)}
                  variant="outlined"
                  sx={{ backgroundColor: '#EFAE32', color: '#FFFFFF', marginRight: '10px', marginTop: '10px'}}
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

export default ViewFoundPets;
