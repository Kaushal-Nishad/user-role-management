import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import Bg from './Brainfloss-Logo-Rev.-7-R-white-1536x503.png';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import bcrypt from "bcryptjs-react";
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });


    const handleSubmit = (values: { email: string; password: string }) => {
        const savedUser: any = localStorage.getItem('registeredUser');
        let savedPass;
        if (savedUser) {
            savedPass = JSON.parse(savedUser).password;
        } else {
            console.log("No saved password found in localStorage.");
        }

        if (bcrypt.compareSync(values.password, savedPass)) {
            const token:any = process.env.REACT_APP_ACCESS_TOKEN ||'jkshdsaeeeioufidosfjr87945348fhsdjfh._34jhsgfsg4f';
            // console.log("Access Token:", token); 
            localStorage.setItem('token',token);
            toast.success('Login successful!');
            navigate('/dashboard');
        } else {
            toast.error('Invalid email or password');
        }
    };

    return (
        <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
            <div className="row h-100 align-items-center">
                <div className="col-sm-12 col-md-6">
                    <img src={Bg} alt="img" className='img-fluid' />
                </div>
                <div className="col-sm-12 col-md-4 mx-auto">
                    <div className="card p-5 shadow login-container">
                        <h2>Welcome Again,</h2>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                            <Field
                                                type="email"
                                                className='form-control'
                                                placeholder="Email"
                                                name="email"
                                            />
                                        </div>
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </div>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                            <Field
                                                type={passwordVisible ? 'text' : 'password'}
                                                className='form-control'
                                                placeholder="Password"
                                                name="password"
                                            />
                                            <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                            </span>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </div>
                                    <button type="submit" className='btn btn-primary mb-3'>Login</button>
                                </Form>
                            )}
                        </Formik>
                        <div className="alternative-login">
                            <p>OR</p>
                            <button className='btn btn-danger mb-3 me-2'> <FontAwesomeIcon className='p-0 m-0' icon={faGoogle} /> Google Login</button>
                            <button className='btn btn-primary mb-3'> <FontAwesomeIcon icon={faFacebook} /> Facebook Login</button>
                        </div>
                        <p>New User? <a href="/register">Register Here</a></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
