import React, { useState } from 'react';
import axios from 'axios';

const CreateFoundPet = () => {
  const [foundLocation, setFoundLocation] = useState('');
  const [description, setDescription] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('foundLocation', foundLocation);
      formData.append('description', description);
      formData.append('contactDetails', contactDetails);
      formData.append('image', image);

      const response = await axios.post('http://localhost:3005/api/v1/foundpets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>Enter Found Pet Details</h1>
        <input
          type="text"
          value={foundLocation}
          onChange={(e) => setFoundLocation(e.target.value)}
          placeholder="Found Location"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={styles.input}
          required
        />
        <input
          type="text"
          value={contactDetails}
          onChange={(e) => setContactDetails(e.target.value)}
          placeholder="Contact Details"
          style={styles.input}
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} onClick={() => {
            window.location.href = "/foundpets";
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    width: '300px',
    height: '400px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#EFAE32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CreateFoundPet;
