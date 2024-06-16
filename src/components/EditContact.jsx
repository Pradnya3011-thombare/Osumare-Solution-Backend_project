import React from 'react'
import { Link } from 'react-router-dom'


const EditContact = () => {
  return (
    <>
    <section className='edit_contact'>
      <div className="container p-3">
        <div className="row">
          <p className='fw-bold h4 text-secondary'>Edit Contact</p>
          <p className='fst-italic'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequatur? ipsum, dolor sit amet consectetur adipisicing elit. Ab veniam consequatur sit facere modi debitis. </p>
        </div>
        <div className="row d-flex align-items-center">
          <div className='col-md-4 '>
            <form action="">
              <div className='mb-2'>
                <input type="text" name="" id="" placeholder='Name' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="email" name="" id="" placeholder='Email' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="tel" maxLength={10} name="" id="" placeholder='Contact' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="text" name="" id="" placeholder='Photo' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="text" name="" id="" placeholder='Company-Name' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="text" name="" id="" placeholder='Title' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="text" name="" id="" placeholder='Company-group' className='form-control'/>
              </div>
              <div className='mb-2'>
                <input type="submit" value={"Update"} name="" id=""  className='btn btn-secondary'/>
                <Link to={'/'} className='ms-2 btn btn-warning'>Cancel</Link>
              </div>
            </form>
          </div>
          <div className='col-md-8'>
            <img src='https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png' alt="" className='contact_image img-fluid' />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditContact