import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import profile_n from "../../../assets/profile_n.jpg";
import { Link } from "@mui/material";
import Linkedin from "../../../assets/Linkedin.png";
import github from "../../../assets/github.svg";
import Grid from "@mui/material/Grid";

export default function AboutTab() {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "50vh",
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center"
        }}
      >
        <Grid item xs={6} md={6}>
        <Card 
          sx={{
            margin: "0 auto",
        }}
        >
          <CardMedia
            component="img"
            height="150"
            width="150"
            image={profile_n}
            sx={{ objectFit: "contain" }}
          />
        </Card>
        </Grid>
        <Grid item xs={6} md={6}>
        <Container component="main" sx={{ mt: 1, mb: 1 }} maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            Who am I?
          </Typography>
          <Typography variant="body1">
            I have been building websites since I was 10 years old, back then
            only vanilla Javascript existed. Graduated from Ariel university in
            Computer Science program during my studies I enjoyed mostly
            everything related to Web development, Microservice architechture
            and backend engineering.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "20vh",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid item xs={6} md={6}>
              <Link href="https://www.linkedin.com/in/dan-davydov/">
                <img src={Linkedin} width="50" height="50" />
              </Link>
            </Grid>
            <Grid item xs={6} md={6}>
              <Link href="https://github.com/Sylbris">
                <img src={github} width="50" height="50" />
              </Link>
            </Grid>
          </Grid>
        </Container>
        </Grid>
      </Grid>
    </>
  );
}
