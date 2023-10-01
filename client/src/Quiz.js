import React from 'react';
import puzzle from './quiz_images/puzzle.png'
import logo_quiz1 from './quiz_images/logo_quiz1.png'
import rotate from './quiz_images/rotate.png'
import objective_image from './quiz_images/objective_image.jpg'
// import project-management from './quiz_images/project_management.png';
// import project-management from './'
import projectmanagement from './quiz_images/projectmanagement.png'
import webdesign from './quiz_images/webdesign.png'
import QUIZ1 from './quiz_images/QUIZ1.png'
import QUIZ2 from './quiz_images/QUIZ2.png'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import Register from './Register';
const Quiz = () => {
  return(
    <>
    <div className="header">
         
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mt-3">
                  <a className="navbar-brand" href="#">
                    <img src={logo_quiz1} alt='logo-quiz'/>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item me-3">
                        <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/login">Login</NavLink>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink className="nav-link active" to="/home">Home</NavLink>
                      </li> */}
                    </ul>
                  </div>
                </div>
            </nav>
         <hr className="mt-4 text-white"/>
         {/* <!--**************this container ends here with navbar headings and logos*******************--> */}
         <div className="row">
            <div className="col-lg-12 col-md-12 col-12 mt-5 mainsection-column">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 content-column text-white d-flex justify-content-center flex-column">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 mt-1 mb-3 mx-3">
                                <h4 className="d-flex justify-content-center quiz-start">Show Real</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h1 className="quiz-heading mx-3">Real Power of Your Mind.</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 mt-3 mx-lg-2">
                                 <div className="quote-box">
                                    <p className="text-captalize">"If you are a true competitor then definately you will fall in love with it.Everyone loves the sport and everyone Loves the Quizzes.</p>
                                    <p className="text-captalize">Computerized tests always increases the standard of your thinking in the way you can explore Concepts throughly...</p>
                                 </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12  d-flex justify-content-center">
                                <img className="yearquiz mt-2" src={QUIZ1}alt='quiz1-image'/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center mb-3">
                                <img className="yearquiz mt-2" src={QUIZ2}alt='quiz2-image'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center cubediagram-column">
                           <img className="cube-image mt-3" src={rotate}alt='cube-image'/>
                    </div>
                </div>
            </div>
         </div>
         {/* <!-- main logo section ends here --> */}
         <div className="row">
          <div className="col-lg-12 col-md-12 col-12 mt-5 d-flex justify-content-center">
            {/* <button type="button"className="btn btn-outline-primary">Our Objectives</button> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 mt-3 objective_section">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12 obj_content_section text-white">
                <div className="content mx-5">
                    <h3 className="d-flex justify-content-center">Quiz Concepts</h3>
                    <hr/>
                    <div className="first-concept d-flex flex-column mt-3">
                       <h4><i className="fa-solid fa-square-check"></i><span className="mx-3">Structures and Algorithms</span></h4>
                       <p>(Moderate Algorithms and Fundamentals of Data structures.)</p>
                    </div>
                    <div className="second-concept d-flex flex-column mt-2">
                      <h4><i className="fa-solid fa-square-check"></i><span className="mx-3">Python Programming and Libraries</span></h4>
                      <p>(Fundamentals and OOPS! and Numpy,Pandas,Matplotlib.)</p>
                   </div>
                   <div className="second-concept d-flex flex-column mt-2">
                    <h4><i className="fa-solid fa-square-check"></i><span className="mx-3">Management System With Python</span></h4>
                    <p>(SQL server and MongoDB,CRUD operations by quering the Database)</p>
                 </div>
                 <div className="second-concept d-flex flex-column mt-2">
                  <h4><i className="fa-solid fa-square-check"></i><span className="mx-3">Operating System and Networking</span></h4>
                  <p>(Based On the Theroy and Description)</p>
               </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12 d-flex justify-content-center obj_img_section">
                <img src={objective_image}alt='objective-image'/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 mt-5">
                <h3 className="d-flex justify-content-center">Project Applications</h3>
              </div>
              <hr className="w-25 mx-auto"/>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                     <div className="card p-3 mb-5 mt-3">
                        <div className="card-logo mx-auto">
                          <img src={projectmanagement}alt='project-image'/>
                        </div>
                        <div className="card-content">

                          <h4 className="d-flex justify-content-center mb-1">Project Idea</h4>
                          <hr className="w-50 mx-auto"/>
                          <p>This is Quiz website that allows you to attempt the Computerized Quizes regarding various tech Stacks.</p>
                          <p>It is Fully functional and Resonsive Website. the idea behind this is to make the tests always digitalize</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                    <div className="card p-3 mb-5 mt-3">
                      <div className="card-logo mx-auto">
                        <img src={puzzle} alt="puzzle-image"/>
                      </div>
                      <div className="card-content">
                        <h4 className="d-flex justify-content-center mb-1">Features</h4>
                        <hr className="w-50 mx-auto"/>
                        <p>This is Quiz website that allows you to attempt the Computerized Quizes regarding various tech Stacks.</p>
                        <p>It is Fully functional and Resonsive Website. the idea behind this is to make the tests always digitalize</p>
                      </div>
                   </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                  <div className="card p-3 mt-3 mb-5">
                    <div className="card-logo mx-auto">
                      <img src={webdesign}/>
                    </div>
                    <div className="card-content">
                      <h4 className="d-flex justify-content-center mb-1">Design</h4>
                      <hr className="w-50 mx-auto"/>
                      <p>This is Quiz website that allows you to attempt the Computerized Quizes regarding various tech Stacks.</p>
                      <p>It is Fully functional and Resonsive Website. the idea behind this is to make the tests always digitalize</p>
                    </div>
                 </div>
               </div>
                </div>
              </div>
            </div>
            {/* <!-- this row ends here --> */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 bg-dark text-white">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className='icon_section d-flex justify-content-center mt-5 text-align-center mb-3'>
                   <a className='navigator'href='https://www.instagram.com/mister.raviteja/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'target='_blank'><i class="fa-brands fa-square-instagram mx-3 fs-3"></i></a>
                    {/* <i class="fa-brands fa-square-twitter mx-3 fs-3"></i> */}
                    {/* <i class="fa-brands fa-square-linkedin"></i> */}
                  <a className='navigator'href='https://www.linkedin.com/in/gangadhararaviteja/' target='_blank'><i class="fa-brands fa-linkedin mx-3 fs-3"></i></a>  
                   <a className='navigator' href='https://github.com/gangadhararaviteja'target='_blank'><i class="fa-brands fa-github mx-3 fs-3"></i></a>  
                    </div>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 d-flex justify-content-center'>
                        created by RAVI TEJA
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
    </div>

    {/* <button type='button'className='btn btn-primary'>click</button> */}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  
    </>
  )
}
export default Quiz;