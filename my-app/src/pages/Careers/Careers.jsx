import React, { useState, useEffect } from 'react';import '../Careers/careers.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import career_image from '../../other_images/career_image.jpg'
// import jobOpeningsData from '../../constants/jobOpenings.json';


export default function Careers() {


  const [jobOpenings, setJsonData] = useState({});

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/constants/jobOpenings.json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchJsonData();
  }, []);

  // const jobOpenings = jobOpeningsData; 
  // const jobOpenings = []; 


  return (
    <div className='career_container'>
      <Navbar />
      <div className='image_div'>
        <img src={career_image} className='image'></img>
      </div>
      <div className="career_bottom">
        <h3>CAREER OPPORTUNITIES AT VARDHAMAN ELECRTOMECH : </h3>
        <p>Explore exciting career opportunities with us and be a part of a company that values creativity, craftsmanship, and growth.<br></br> Join us in shaping the future of fabrication. </p>
      </div>
      <div className="table-container">
        {jobOpenings.length > 0 ? 
        <table className='career_table'>
          <thead>
            <tr>
              <th className="job-name-column">Job Name</th>
              <th className="vacancy-column">No. of Openings</th>
            </tr>
          </thead>
          <tbody>
            {jobOpenings.map((job, index) => (
              <tr key={index}>
                <td>{index+1}. {job.jobName}</td>
                <td>{job.openings}</td>
              </tr>
            ))}
          </tbody>
        </table>
        : <p className='no_job'>Currently no Job openings are available</p> }
      </div>
      {jobOpenings.length > 0 ?<p className='contact-text'>Please contact us if you are interested.</p> : ""}
      <Footer />
    </div>
  )
}
