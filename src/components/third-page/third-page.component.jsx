import './third-page.styles.scss';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

const ThirdPage = () => {

    const [sessionYear, setSessionYear] = useState('');
    const [session, setSession] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState([]);
    const [branch, setBranch] = useState([]);
    const [semester, setSemester] = useState([]);

    //fetch data and useEffect



    return(
        <div className="third-content">
            <div className="first-three">
        
        {/* <label htmlFor="sessionYear">Session Year:</label>
        <select id="sessionYear" value={sessionYear} onChange={(e) => setSessionYear(e.target.value)}>
          <option value="">Select...</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          
        </select> */}
        <div className='sessionYear'>
        <FormControl required fullWidth>
        <label htmlFor="sessionYear">Session Year</label>
        <InputLabel id='demo-basic-select-outlined-label' color="secondary">Session Year</InputLabel>
        <Select label='sessionYear' defaultValue='' id='demo-basic-select-outlined' labelId='demo-basic-select-outlined-label'
          onChange={(e) => setSessionYear(e.target.value)} color="secondary"
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
          onChange={(e) => setSession(e.target.value)} color="secondary"
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
          onChange={(e) => setDepartment(e.target.value)} color="secondary"
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
          onChange={(e) => setCourse(e.target.value)} color="secondary"
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
          onChange={(e) => setBranch(e.target.value)} color="secondary"
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
        <TextField onChange={(e) => setSemester(e.target.value)} color="secondary" fullWidth id='outlined-basic' label='Semester' />
      </Grid>
        {/* <label htmlFor="admissionNumber">Admission Number:</label>
        <input type="text" id="admissionNumber" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} /> */}
      </div>
      </div>
      <div className="view-button">
      <Button variant='contained' color='secondary'>
        View
      </Button>
      </div>
      {/* <button onClick={fetchData}>View</button> */}

      {/* Display fetched data */}
      {/* <div>
        <h2>Fetched Data</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}></li>
          ))}
        </ul>
      </div> */}

    </div>
    );
};
export default ThirdPage;