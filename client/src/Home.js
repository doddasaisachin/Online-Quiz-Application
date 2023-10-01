import React from "react";
// import { NavLink } from "react-router-dom";
// import QUIZ1 from './quiz_images/QUIZ1.png';
// import QUIZ2 from './quiz_images/QUIZ2.png';
import quiznature from './quiz_images/quiznature.png';
import './App.css'
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <>
        <div className="home">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12 mt-5 d-flex justify-content-center">
                    <div className="box w-75 d-flex justify-content-center">
                        <h6 className="text">Note : This Quizes are completely for no cost and we can access quiz content to prioritize our needs</h6>
                    </div>
                </div>
            </div>
            {/* this is the row for the note description only */}

            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center mt-5 contentsection">
                            <div className="content_about">
                            <h2 className="my-3 mx-5">Digitalized Quizes for<br/><span>Students and</span><br/>Compitetive Programmers.</h2>
                            <p className="mx-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.  but also the leap into electronic typesetting,   e like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div> 
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="imagebox mx-3">
                                <img src={quiznature} alt="reduce"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mt-5">
                            <h6 className="mx-5">Take the Python test on clicking<NavLink to="/pythontest"><button type="button"className="primarybtn mx-3">Take Test</button></NavLink></h6>
                            <h6 className="mx-5 mt-3">Take the Data Structures test on clicking <NavLink to="/test"><button type="button"className="primarybtn mx-3">Take Test</button></NavLink></h6>
                            <h6 className="mx-5 mt-3">Take the Front End  test on clicking<NavLink to="/frontendtest"><button type="button"className="primarybtn mx-3">Take Test</button></NavLink></h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="mt-5">This test contain about the competitive Questions about Python,Data Structures and Machine Learning and you can Explore the Knowledge in the Way you can Develop your subject Even better.
                            </p>
                            <p>The More you compete the more you gain.</p>
                            <h5>Let's Go and EXplore !!!!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home