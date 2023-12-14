"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const ContactUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
    <Header/>
      <div className="bg-white text-black flex-col justify-between pb-28">
        <div className="bg-white mx-0 ">
          {/* <h1>Contact Us: -</h1> */}
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  className=" text-cyan-400 uppercase font-mono tracking-wider"
                >
                  Contact Us :
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="phoneNo"
                        label="Phone Number"
                        name="phoneNo"
                        autoComplete="phoneNo"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="subject"
                        label="Context"
                        name="subject"
                        autoComplete="subject"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <textarea
                        className=" h-full min-h-[150px] w-full resize-none 
                                            rounded-[7px] border border-blue-gray-200  bg-transparent 
                                            px-3 py-2.5 font-sans  font-normal text-blue-gray-700 
                                            outline outline-0 transition-all text-2xl
                                            placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                            placeholder-shown:border-t-blue-gray-200 focus:border-2 
                                            focus:border-blue-500  focus:outline-0 disabled:resize-none
                                            disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Message"
                      ></textarea>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="bg-cyan-400 "
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>        
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
