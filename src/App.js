import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function App() {
  const [record, setRecord] = useState([]);
  const [axiosdata, setAxios] = useState([]);

  useEffect(() => {

    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setRecord(data.users)
      )

    axios.get(`https://dummyjson.com/comments`)
      .then((res) => {
        setAxios(res.data.comments)
      }).catch((err) => {
        console.log(err);
        return false;
      })

  }, []);

  return (
    <center>
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <h1 className=' m-5'>Fetch Api</h1>
      </nav>

      <div className='card-container'>
        {
          record.map((v) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://www.bootdey.com/image/340x120/87CEFA/000000" alt="Cover" className="card-img-top" />
                <div className="card-body text-center">
                  <img src={v.image}
                    style={{ width: '100px', marginTop: '-65px' }} alt="User" className="image img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                  <h5 className="card-title">{v.firstName}&nbsp;{v.lastName}</h5>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
                <div className="card-footer">

                  <button className="add btn btn-light   has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>

                  <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>

                </div>
              </div>
            )
          })
        }
      </div>
      <br></br>
      <h1>Axios Api</h1>
                <section className='rounded'>
                  <div className="container py-5" style={{ width: "800px" }}>
                    <div className="justify-content-center">
                      <div md="12" lg="10">
                        <div className="text-dark">
                          <div className="p-4">
                            <h3  className="mb-0">
                              Recent comments
                            </h3>
                            <p className="fw-light mb-4 pb-2">
                              Latest Comments section by users
                            </p>

                              {
                                  axiosdata.map((v)=>{
                                    return(
                                      <div className="d-flex flex-start">
                                    <div>
                                      <h6  className="fw-bold mb-1">
                                      March 07, 2021
                                      </h6>
                                      <div className="d-flex align-items-center mb-3 fw-bold">
                                        <p  className="mb-0">
                                           {v.user.username}
                                          <span className="badge ">Pending</span>
                                        </p>
                                        <a href="#!" className="link-muted">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                          </svg>
                                        </a>
                                        <a href="#!" className="link-muted">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                          </svg>
                                        </a>
                                        <a href="#!" className="link-muted">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                          </svg>
                                        </a>
                                      </div>
                                      <p className="mb-0">
                                        {v.body}Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                      </p>
                                      <hr className="my-2" style={{width: "100%"}} />
                                    </div>
                                  </div>
                                    )
                                  })
                              }
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
    </center>
  );
}

export default App;
