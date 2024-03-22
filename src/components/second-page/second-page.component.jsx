import './second-page.styles.scss';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'; 


import DataTable from '../unverified-list/unverified-list.component';

const SecondPage = () => {

    const [sessionYear, setSessionYear] = useState('');
    const [session, setSession] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [branch, setBranch] = useState('');
    const [semester, setSemester] = useState('');

    
    const [submitted, setSubmitted] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Basic form validation
      // if (!formData.sessionYear || !formData.session || !formData.admissionNumber) {
      //   alert('All fields are required');
      //   return;
      // }
      // Form is submitted successfully
      setSubmitted(true);
      // console.log('Form submitted successfully');
    };
    // const getLastUnfilledField = () => {
    //   if (!sessionYear) return 'Session Year';
    //   if (!session) return 'Session';
    //   if (!department) return 'Department';
    //   if (!course) return 'Course';
    //   if (!branch) return 'Branch';
    //   return null; // All required fields filled
    // };
    
    // const handleDisabledFieldClick = (fieldName) => () => {
    //   const lastUnfilledField = getLastUnfilledField();
    //   if (lastUnfilledField) {
    //     alert(`Please fill in ${lastUnfilledField} first.`);
    //   }
    // };
    

    return(
        <div className="second-content">
          <form className="form" onSubmit={handleSubmit}>
            <div className="first-three">
        
        <div className='sessionYear'>
        <FormControl required fullWidth>
        <label htmlFor="sessionYear">Session Year</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Session Year</InputLabel>
        <Select label='sessionYear' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          name='sessionYear' value={sessionYear} onChange={(e) => setSessionYear(e.target.value)} color="secondary"
          
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
          name='session' value={session} onChange={(e) => setSession(e.target.value)} color="secondary" disabled={!sessionYear}
          
        >
          
          <MenuItem value="Monsoon">Monsoon</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
          <MenuItem value="Winter">Winter</MenuItem>
          
        </Select>
      </FormControl>
        {/* <label htmlFor="session">Session:</label>
        <input type="text" id="session" value={session} onChange={(e) => setSession(e.target.value)} /> */}
      </div>

      <div className='department'>
        <FormControl fullWidth>
        <label htmlFor="department">Department</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Department</InputLabel>
        <Select label='department' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          name='department' value={department} onChange={(e) => setDepartment(e.target.value)} color="secondary" disabled={!session}
          
        >
          
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="ECE">ECE</MenuItem>
          <MenuItem value="EE">EE</MenuItem>
          <MenuItem value="MECH">MECH</MenuItem>
          <MenuItem value="CHEM">CHEM</MenuItem>
        </Select>
      </FormControl>
      </div>

      </div>
        <div className="last-three">
      <div className='course'>
        <FormControl fullWidth>
        <label htmlFor="course">Course</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Course</InputLabel>
        <Select label='course' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          name='course' value={course} onChange={(e) => setCourse(e.target.value)} color="secondary" disabled={!department}
          
        >
          
          <MenuItem value="B.Tech">B.Tech</MenuItem>
          <MenuItem value="Int.Mtech">Int.Mtech</MenuItem>
          <MenuItem value="PhD">PhD</MenuItem>
          <MenuItem value="M.tech">M.tech</MenuItem>
          
        </Select>
      </FormControl>
      </div>

      <div className='branch'>
        <FormControl fullWidth>
        <label htmlFor="branch">Branch</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Branch</InputLabel>
        <Select label='branch' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          name='branch' value={branch} onChange={(e) => setBranch(e.target.value)} color="secondary" disabled={!course}
          
        >
          
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="ECE">ECE</MenuItem>
          <MenuItem value="EE">EE</MenuItem>
          <MenuItem value="MECH">MECH</MenuItem>
          <MenuItem value="CHEM">CHEM</MenuItem>
        </Select>
      </FormControl>
      </div>

      <div className='semester'>
      <label htmlFor="semester">Semester/Section</label>
      <Grid item xs={12} md={4} color="secondary">
        <TextField name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} color="secondary" fullWidth id='outlined-basic' label='Semester' disabled={!branch}/>
      </Grid>
        {/* <label htmlFor="admissionNumber">Admission Number:</label>
        <input type="text" id="admissionNumber" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} /> */}
      </div>
      </div>
      <div className="view-button">
      <Button type='submit' variant='contained' color='secondary'>
        View
      </Button>
      </div>
      </form>
        <br/> <br/> <br/>
      {submitted && <DataTable sessionYear={sessionYear} session={session}/>}

    </div>
    );
};
export default SecondPage;