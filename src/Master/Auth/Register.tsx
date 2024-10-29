import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import Bg from './Brainfloss-Logo-Rev.-7-R-white-1536x503.png';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import hashPassword from '../../shared/utils/hashPassword';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const initialValues = {
        username: '',
        role: 'user',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords not matched')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values: { username: string; email: string; password: string, role: string }) => {
        values.password = hashPassword(values.password);
        localStorage.setItem('registeredUser', JSON.stringify(values));
        localStorage.setItem('role', values.role)
        toast.success('Registration successful! Please log in.');
        navigate('/login');
    };

    return (
        <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
            <div className="row h-100 align-items-center">
                <div className="col-sm-12 col-md-6">
                    <img src={Bg} alt="img" className='img-fluid' />
                </div>
                <div className="col-sm-12 col-md-4 mx-auto">
                    <div className="card p-5 shadow login-container">
                        <h2>Create Your Account</h2>
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
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                            <Field
                                                type="text"
                                                className='form-control'
                                                placeholder="Full Name"
                                                name="username"
                                            />
                                        </div>
                                        <ErrorMessage name="username" component="div" className="text-danger" />
                                    </div>
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
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                            <Field
                                                type={confirmPasswordVisible ? 'text' : 'password'}
                                                className='form-control'
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                            />
                                            <span className="input-group-text" onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
                                                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                                            </span>
                                        </div>
                                        <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                    </div>
                                    <button type="submit" className='btn btn-primary mb-3'>Register</button>
                                </Form>
                            )}
                        </Formik>
                        <div className="alternative-login">
                            <p>OR</p>
                            <button className='btn btn-danger mb-3 me-2'>
                                <FontAwesomeIcon icon={faGoogle} /> Google Login
                            </button>
                            <button className='btn btn-primary mb-3'>
                                <FontAwesomeIcon icon={faFacebook} /> Facebook Login
                            </button>
                        </div>
                        <p>Already have an account? <a href="/login">Login Here</a></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
