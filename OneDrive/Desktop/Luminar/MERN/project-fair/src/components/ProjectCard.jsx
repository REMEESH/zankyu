import React , {useState} from 'react'
import {Card, Row , Col, Modal} from 'react-bootstrap';
import projectPic from '../Assets/two.png'


function ProjectCard() {
    const [show,setShow] = useState(false)

    const handleClose = ()=>setShow(false)
    const handleShow = ()=>setShow(true)
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}> 
        <Card.Img varient="top"  src={projectPic}/>
        <Card.Body>
            <Card.Title>Project Title</Card.Title>
        </Card.Body>
    </Card>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col md={6}>
                <img style={{height:'200px'}}  className='img-fluid' src={projectPic} alt="Project Image" />
            </Col>
            <Col md={6}>
                <h2>Project Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum error, assumenda nihil saepe aliquam vitae nulla ad quo, quibusdam, quasi consequatur neque est deleniti voluptatem provident maxime necessitatibus dolores!</p>
                <p>Language used: <span className='fw-bolder'>HTML,CSS,React</span></p>
            </Col>
        </Row>
        <div className="mt-3">
            <a href="https://github.com/REMEESH/e-cart.git" target='_blank' className='me-3 btn'> <i class="fa-brands fa-github fa-2x"></i> </a>
            <a href="https://e-cart-five.vercel.app/" target='_black' className='me-5 btn'> <i class="fa-solid fa-link fa-2x"></i> </a>

        </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default ProjectCard