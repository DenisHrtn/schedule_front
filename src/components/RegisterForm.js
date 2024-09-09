import React, { useState } from "react";
import { registerUser} from '../api/authApi';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (password != passwordConfirmation) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const data = await registerUser(email, password, passwordConfirmation);
            if (data.message) {
                setMessage("Success!");
            } else {
                setError("Something went wrong!");
            }
        } catch (error) {
            setError('An error occurred while registering');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password confirmation:</label>
                <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>

            {message && <p style={{color: "green"}}>{message}</p>}
            {error && <p style={{color: "red"}}>{message}</p>}
        </form>
    );
};

export default RegisterForm;
