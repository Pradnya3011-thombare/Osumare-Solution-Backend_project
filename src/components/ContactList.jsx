import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../../SpinnerComp/Spinner'
import { ContactServices } from '../../ContactServices/ContactServices'

const ContactList = () => {

  let [state,setState]=useState({
    loading:false,
    errorMessage:"",
    contacts:[]

  })
  useEffect(()=>{
    let promise= new Promise((res,rej)=>{
      setState({ ...state ,loading:true})
      let response=ContactServices.getAllContacts()
      res(response)
      rej("error")
    })
    promise.then((res1)=>{
      setState({...state , loading:false,contacts:res1.data})
    }).catch((rej1)=>{
      setState({...state,loading:false,errorMessage:alert("data not found!!!")})
    })
  },[])
  let {loading,contacts,errorMessage}=state;
 
  return (
   <>
    {/* <pre>{JSON.stringify(contacts)}</pre> */}
   <section className='contact_search p-3' >
      <div className="container">
        <div className="grid">
          <div className="row">
            <p className='h3'>Contact Manager <Link to={'/contacts/add'} className=' btn btn-primary'> <i className='fa fa-plus-circle '></i> New</Link> </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias autem porro earum odit placeat mollitia at fuga iusto et ab tempora repudiandae velit qui illo, numquam nulla dolores laboriosam sint. </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8 mb-2">
                  <input type="search" placeholder='Search Names' className='form-control'/>
                </div>
                <div className="col mb-2">
                  <input type="submit" value={'Search'} className='btn btn-outline-dark' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
   <section className='contact_list'>
    <div className="container">
    <div className="row">
      {
        loading?<Spinner/>:<React.Fragment>
          {
            contacts.length>0 &&
            contacts.map((contact)=>{
              return (
                <div className="col-md-6">
          <div className="row">
            <div className="card my-3">
              <div className="card-body">
                <div className="row d-flex align-items-center " >
                  <div className="col-md-4 contact_image">
                      <img src={contact.photo} alt="not found" className='contact_image img-fluid' />
                  </div>
                  <div className="col-md-7">
                    <ul className='list-group'>
                      <li className="list-group-item list-group-item-action">Name: <span className='ms-1 fw-bold'>{contact.name}</span></li>
                      <li className="list-group-item list-group-item-action">Contact: <span className='ms-1 fw-bold'>{contact.Contact}</span></li>
                      <li className="list-group-item list-group-item-action">Email: <span className='ms-1 fw-bold'>{contact.email}</span></li>
                    </ul>
                  </div>
                  <div className="col-md-1 p-1 d-flex flex-column">
                    <Link to={`/contacts/view/${contact.id}`} className='btn btn-primary my-1'> <i className='fa fa-eye'></i> </Link>
                    <Link to={`/contacts/edit/${contact.id}`} className='btn btn-warning my-1'> <i className='fa fa-pen'></i> </Link>
                    <button className='btn btn-danger my-1'><i className='fa fa-trash' ></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              )
            })
          }
        </React.Fragment>
      }
              
      </div>

    </div>
   </section>
   </>
  )
}

export default ContactList