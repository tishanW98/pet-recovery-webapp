import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"; // Import Typography
import { Link } from "react-router-dom";
import backgroundImg from "../allimages/landingthree.jpg";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#EFAE32",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: "20px",
            marginLeft: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "#000000",
              fontSize: "2.5rem",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            A Worldwide Network of Missing Pet Recovery Specialists
          </h1>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: "10px", color: "#FFFFFF" }}
            component={Link}
            to="/login"
          >
            I Found a Pet
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: "10px", color: "#FFFFFF" }}
            component={Link}
            to="/signin"
          >
            I Lost My Pet New
          </Button>
          {/* Additional paragraph under the buttons */}
          <Typography
            variant="body1"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            " a Pet' and entering the pet's details, you become a beacon of hope
            for owners searching for their beloved companions. Similarly, if
            you've lost a cherished pet, our platform offers you the chance to
            publish their information, increasing the chances of a heartwarming
            reunion with your furry friend. We're here to help connect pets with
            their loving families."
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
