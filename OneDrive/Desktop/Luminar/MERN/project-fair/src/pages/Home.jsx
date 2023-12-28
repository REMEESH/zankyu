import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/newpic.png';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';


function Home() {
  return (
    <>
    {/* landing section */}
    <div style={{width:'100%' , height:'100vh',}} className='container-fluid bg-success rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6} >
          <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'> <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
            <p>One stop destination for all Software Development Projects. Where user manage their projects. As well as access all projects available in our website...What are you waiting for!!!!</p>
            <Link to={'/login '} className='btn btn-warning'>Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
        </Col>
        <Col sm={12} md={6} >
          <img style={{marginTop:'100px'}} className='w-75' src={titleImage} alt="" />
        </Col>
      </Row>
    </div>
    {/* all projects */}
    <div className="all-projects mb-5">
      <h1 className='text-center mt-5'>Explore Our Projects</h1>
      <marquee scrollAmount={25}>
        <Row>
          <Col sm={12} md={6} lg={4}  >
            <ProjectCard/>
          </Col>
        </Row>
      </marquee>
         <div className="text-center mt-5 mb-5"><Link to={'/projects'}>View more projects</Link></div>  

    </div>

    
    </>
  )
  
}

export default Home