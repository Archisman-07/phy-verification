import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './first-page-content.styles.scss';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

import BasicDetails from '../basic-details/basic-details.component';
import BasicTable from '../course-list/course-list.component';
import CustomizedTables from '../fees/fees.component';

const FirstPageContent = () => {
  
  const [formData,setFormData] = useState({
    sessionYear:'',
    session:'',
    admissionNumber:'',
  });

  const [submitted, setSubmitted] = useState(false);


  // const [details, setDetails] = useState(null);
  // const [error, setError] = useState(null);

  // // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.sessionYear || !formData.session || !formData.admissionNumber) {
      alert('All fields are required');
      return;
    }
    // Form is submitted successfully
    setSubmitted(true);
    // console.log('Form submitted successfully');
  };

  //   // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null);
  //   // Basic form validation
  //   if (!formData.sessionYear || !formData.session || !formData.admissionNumber) {
  //     setError('All fields are required');
  //     return;
  //   }
  //   // Here you would fetch data from your database based on the admission number
  //   try {
  //     const response = await fetch(`YOUR_API_ENDPOINT/${formData.admissionNumber}`);
  //     if (!response.ok) {
  //       throw new Error('Admission details not found');
  //     }
  //     const data = await response.json();
  //     setDetails(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  // // Handle form submission
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   setError(null);
  //   // Basic form validation
  //   if (!formData.sessionYear || !formData.session || !formData.admissionNumber) {
  //     setError('All fields are required');
  //     return;
  //   }
    
  //   try {
  //     const response = await fetch(`YOUR_API_ENDPOINT/${formData.admissionNumber}`);
  //     if (!response.ok) {
  //       throw new Error('Admission details not found');
  //     }
  //     const data = await response.json();
  //     setDetails(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const details = {
    sessionYear:'2023-2024',
    session:'Winter',
    name:'Archisman Roy',
    branch:'CSE',
    department:'CSE',
    admissionNumber:'21JE0152',
    programme:'B.Tech',
  };

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
      <div className='sessionYear'>
      <FormControl required fullWidth>
        <label htmlFor="sessionYear">Session Year</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Session Year</InputLabel>
        <Select  label='sessionYear' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          color="secondary" name='sessionYear' value={formData.sessionYear} onChange={handleInputChange}
        >
          
          <MenuItem value="23-24">2023-2024</MenuItem>
          <MenuItem value="22-23">2022-2023</MenuItem>
          <MenuItem value="21-22">2021-2022</MenuItem>
          <MenuItem value="20-21">2020-2021</MenuItem>
          <MenuItem value="19-20">2019-2020</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div className='session'>
      <FormControl required fullWidth>
        <label htmlFor="session">Session</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Session</InputLabel>
        <Select label='session' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
           color="secondary" name='session' value={formData.session} onChange={handleInputChange}
        >
          
          <MenuItem value="Monsoon">Monsoon</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
          <MenuItem value="Winter">Winter</MenuItem>
          
        </Select>
      </FormControl>
        {/* <label htmlFor="session">Session:</label>
        <input type="text" id="session" value={session} onChange={(e) => setSession(e.target.value)} /> */}
      </div>

      <div className='admissionNumber'>
      <label htmlFor="admissionNumber">Admission No.</label>
      <Grid item xs={12} md={4} color="secondary">
        <TextField required  color="secondary" fullWidth id='outlined-basic' label='Admission No.' 
                    name='admissionNumber' value={formData.admissionNumber} onChange={handleInputChange}
        />
      </Grid>
        {/* <label htmlFor="admissionNumber">Admission Number:</label>
        <input type="text" id="admissionNumber" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} /> */}
      </div>

      <div className="view-button">
      <Button type='submit' variant='contained' color='secondary'>
        View
      </Button>
      </div>

      </form>
      <br/><br/><br/>
      {submitted && <BasicDetails {...details} />} 
      {submitted && <BasicTable/>}
      {submitted && <CustomizedTables/>}
      {/* {submitted && console.log(formData.sessionYear)}; */}

    </div>
  );
};

export default FirstPageContent;
