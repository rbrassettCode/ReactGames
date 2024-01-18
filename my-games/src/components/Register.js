import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await authService.register(username, password);
            if(response.status === 201){
                navigate('/login');
            }
        } catch (error) {
            setError('Username already exist');
        }
    }

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                {error && <div>{error}</div>}
                <button type='submit'>Register</button>
            </form>
        </div>
    );

}

export default Register;