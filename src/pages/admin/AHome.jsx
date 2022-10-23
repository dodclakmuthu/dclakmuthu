import React, { useState, useContext } from 'react';
import ImageUploder from '../../components/ImageUploder';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { validate } from '../../validate';

import {NotificationContext} from '../../context.js'

const Home = () => {
  const addNotification = useContext(NotificationContext);
  const [formData, setFormData] = useState({ fname: '', lname: '', description: '' })
  const [formErrors, setFormErrors] = useState({ fname: false, lname: false, description: false })
  const [errorFlags, setErrorFlags] = useState({ fname: false, lname: false, description: false })



  const handleChange = (e) => {
    setFormData({ ...formData,  [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    let validationRules = {
      lname: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      fname: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      description: {
        required: true,
        minLength: 2,
        maxLength: 50,
      }
    }
    const [hasError, errors, errorFlags] = validate(formData, validationRules)
      setFormErrors(errors);
      setErrorFlags(errorFlags)
      if (hasError) { 
        addNotification('error', 'Form Validation error')
      }
  }

  return (
    <>
      <form>
        <div className="ahome-top-bar">
          <ImageUploder />
          <Box
            sx={{
              width: 600,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="First Name" id="fullWidth" sx={{ m: 1 }} name='fname' onChange={handleChange} error={errorFlags.fname} helperText={formErrors.fname} />
            <TextField fullWidth label="Last Name" id="fullWidth" sx={{ m: 1 }} name='lname' onChange={handleChange} error={errorFlags.lname} helperText={formErrors.lname} />
          </Box>
        </div>
        <Box
          sx={{
            width: 800,
            maxWidth: '100%',
            mx: "auto",
            p: 2
          }}
        >
          <TextField fullWidth label="Site Description" name='description' id="desc-textfield" sx={{ m: 1 }} multiline minRows={"8"} onChange={handleChange} error={errorFlags.description} helperText={formErrors.description} />
        </Box>
        <Stack sx={{
          width: 200,
          maxWidth: '100%',
          mx: "auto",
          p: 2
        }} direction={"row"}>
          <Button onClick={() => handleSubmit()} variant="contained" color="success" sx={{
            maxWidth: '100%',
            mx: "auto",
          }}>
            Update
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default Home;
