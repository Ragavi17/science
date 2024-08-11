import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        uppercase: false,
        number: false,
        specialChar: false
    });

    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [showStrongPasswordMessage, setShowStrongPasswordMessage] = useState(false);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (name === 'email') {
            validateEmail(value);
        }
        if (name === 'password') {
            evaluatePasswordStrength(value);
        }
    };

    useEffect(() => {
        // Ensuring email validation happens only when emailInput is updated
        const timer = setTimeout(() => {
            if (formData.email) {
                validateEmail(formData.email);
            }
        }, 500); // Debounce for 500ms

        return () => clearTimeout(timer);
    }, [formData.email]);

    const evaluatePasswordStrength = (password) => {
        const minLength = password.length >= 8;
        const uppercase = /[A-Z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setPasswordValidations({
            minLength,
            uppercase,
            number,
            specialChar
        });

        if (minLength && uppercase && number && specialChar) {
            setShowStrongPasswordMessage(true);
            setTimeout(() => {
                setShowStrongPasswordMessage(false);
                setIsPasswordFocused(false);
                document.getElementById('confirmPassword').focus();
            }, 1000);
        }
    };

    const validateEmail = (email) => {
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Email must contain "@" and "."');
        } else if (email.indexOf('@') > email.lastIndexOf('.')) {
            setEmailError('Domain part must come after "@"');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (emailError) {
            alert("Please correct the email address.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', formData);
            alert("Sign up successful!");
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setFormError('');
        } catch (error) {
            if (error.response && error.response.data) {
                // Check for specific error messages from the backend
                if (error.response.data.message === 'Email already in use') {
                    setFormError('Email already exists');
                } else if (error.response.data.message === 'Username already in use') {
                    setFormError('Username already exists');
                } else {
                    setFormError('An error occurred, please try again.');
                }
            } else {
                setFormError('An error occurred, please try again.');
            }
        }
    };

    const handleSave = () => {
        alert("Data saved!");
        setShowSaveModal(false);
    };

    const handleNever = () => {
        alert("Data not saved.");
        setShowSaveModal(false);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
                marginRight: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}>
                <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                            placeholder="Username"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="Email"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)'
                            }}
                        />
                        {emailError && (
                            <p style={{ color: 'red', fontSize: '0.8em', textAlign: 'left', marginLeft: '40px' }}>{emailError}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            onFocus={() => setIsPasswordFocused(true)} 
                            onBlur={() => setIsPasswordFocused(false)} 
                            required 
                            placeholder="Password"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)',
                            }}
                        />
                        {isPasswordFocused && (
                            <div style={{
                                marginTop: '10px',
                                textAlign: 'left',
                                fontSize: '0.9em',
                                color: '#333'
                            }}>
                                <p style={{ color: passwordValidations.minLength ? 'green' : 'red' }}>Min 8 characters</p>
                                <p style={{ color: passwordValidations.uppercase ? 'green' : 'red' }}>One uppercase letter</p>
                                <p style={{ color: passwordValidations.number ? 'green' : 'red' }}>One number</p>
                                <p style={{ color: passwordValidations.specialChar ? 'green' : 'red' }}>One special character</p>
                            </div>
                        )}
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faKey} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                            placeholder="Confirm Password"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)',
                            }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
                        Sign Up
                    </button>
                    {formError && (
                        <p style={{ color: 'red', marginTop: '15px' }}>{formError}</p>
                    )}
                </form>
                {showSaveModal && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        backgroundColor: '#fff'
                    }}>
                        <p>Do you want to save changes?</p>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleNever}>Don't Save</button>
                    </div>
                )}
                <div style={{ marginTop: '20px' }}>
                    <p>Sign in with:</p>
                    <FontAwesomeIcon icon={faGoogle} style={{ margin: '0 10px', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '0 10px', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 10px', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;