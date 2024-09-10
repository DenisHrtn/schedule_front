import React, { useState } from "react";
import { confirmRegisterUser} from "../../api/authApi";
import './ConfirmationRegister.css'

const ConfirmationRegisterForm = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const data = await confirmRegisterUser(email, code);
            if (data === "The code was successfully verified.") {
                setMessage("Registration confirmed successfully!");
            } else {
                setError("Failed to confirm registration!");
            }
        } catch (error) {
            setError("An error occurred while confirming registration.");
        }
    }

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
                <label>Code:</label>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Confirm</button>

            {message && <p style={{color: "green"}}>{message}</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
        </form>
    )
}

export default ConfirmationRegisterForm;