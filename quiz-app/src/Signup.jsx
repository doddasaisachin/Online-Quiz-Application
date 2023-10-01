import React from 'react';
import signuplogo from './quiz_images/signuplogo.png'
import signupbackground from './quiz_images/signupbackground.png'

const Signup = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 w-75 mx-auto mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-12 shadow'>
                            <div className='content d-flex justify-content-center flex-column'>
                                <img className='mx-auto mt-3' src={signuplogo} alt='blank' />
                                <div className='text_content d-flex justify-content-center'>
                                    <h4 className='mt-3'>Register Account</h4>
                                </div>
                                <hr className='w-50 mx-auto' />
                                <form className='p-3'>
                                    <div className="mb-3">
                                        <label className="form-label w-75">UserName</label>
                                        <input type="text" className="form-control w-75" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control w-75" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 shadow'>
                                <img className='w-100 background' src={signupbackground} alt='blank'></img>
                        </div>
                    </div>
                    {/* this row ends here */}
                </div>
            </div>
        </>
    )
}

export default Signup