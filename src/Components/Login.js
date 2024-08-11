import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|net)$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

        if (usernameOrEmail.includes('@')) {
            if (!emailPattern.test(usernameOrEmail)) {
                setError('Invalid email format. It must contain "@" and ".", and end with "com", "in", or "net".');
                return;
            }
        } else {
            if (usernameOrEmail.trim() === '') {
                setError('Username cannot be empty.');
                return;
            }
        }

        if (!passwordPattern.test(password)) {
            setError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
        } else {
            alert('Login successful!');
            setError('');
        }
    };

    const styles = {
        body: {
            fontFamily: 'Roboto, sans-serif',
            background: 'linear-gradient(135deg, #c3ec52 10%, #0ba29d 100%)',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        container: {
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            width: '350px',
            textAlign: 'center',
        },
        heading: {
            marginBottom: '40px',
            color: '#333',
            fontSize: '38px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        inputGroup: {
            position: 'relative',
            marginBottom: '30px',
        },
        input: {
            width: '100%',
            padding: '14px 12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            background: '#fff',
            transition: 'border-color 0.3s',
        },
        inputError: {
            borderColor: '#e57373',
        },
        errorText: {
            color: '#e57373',
            fontSize: '14px',
            margin: '5px 0 0',
            textAlign: 'left',
        },
        button: {
            width: '100%',
            padding: '15px',
            backgroundColor: '#0ba29d',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#028482',
        },
        link: {
            display: 'block',
            marginTop: '20px',
            color: '#0ba29d',
            textDecoration: 'none',
            fontSize: '14px',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    {error && <p style={styles.errorText}>{error}</p>}
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Login
                    </button>
                    <p>
                        <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
                    </p>
                    <p>
                     Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Login;
