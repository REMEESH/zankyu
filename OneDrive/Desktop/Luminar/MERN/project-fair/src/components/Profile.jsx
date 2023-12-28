import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='mt-5 mb-5 shadow p-5'>
   <div className='d-flex justify-content-between'>
  <h2> Profile</h2>
  <button   onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></button>
   </div>
   <Collapse in={open} >
   <div className="row justify-content-center mt-3">
    {/* upload picture */}
    <label className='text-center' >
        <input style={{display:'none'}} type="file" />
        <img width={'200px'} height={'200px'} className='rounded-circle' src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png" alt="upload picture" />
    </label>
    <div className="mt-3">
        <input type="text" className='form-control'  placeholder='GitHub'/>
    </div>
    <div className="mt-3">
        <input type="text" className='form-control'  placeholder='LinkedIn'/>
    </div>
    <div className="mt-3 text-center d-grid">
      <button className="btn btn-warning">Update</button>
    </div>
   </div>

   </Collapse>
   
 </div>
  )
}

export default Profile