import React, {useState} from 'react';
import AuthService from '../services/auth.service';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            console.log("Login for username: " + username);
            const response = await AuthService.login(username, password);
        } catch (error) {
            setError('Invalid username or password');
        }
    }

    return (
        <div className="container">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                {error && <div>{error}</div>}

                <button type='submit'>Login</button>
            </form>

        </div>
        );
}

export default Login;