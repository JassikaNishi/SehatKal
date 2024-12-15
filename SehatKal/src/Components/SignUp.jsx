import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillBook, AiFillGoogleCircle } from 'react-icons/ai';
import { CiLogin } from "react-icons/ci";
import "../Components/loginstyle.css";
import { AuthContext } from '../Components/AuthProvider';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const { loginwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = async (e) => {
        e.preventDefault();

        const form = e.target;
        const Email = form.email.value;
        const Password = form.password.value;

        const userDetails = {
            username: form.username.value,
            email: Email,
            password: Password
        };

        try {
            const response = await fetch("http://your-backend-api.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userDetails)
            });

            const data = await response.json();
            if (response.ok) {
                navigate(from, { replace: true });
            } else {
                setError(data.message || "An error occurred while signing up.");
            }
        } catch (error) {
            setError("Network error. Please try again later.");
        }
    };

    const handleRegister = async () => {
        try {
            const result = await loginwithGoogle();
            const user = result.user;
            navigate(from, { replace: true });
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    };

    return (
        <div className='row g-0 justify-content-center align-items-center login-container mt-3'>
            <div className="col-10 row g-0  border rounded-2 bg-white mb-8">
                <div className="d-none d-md-block col-6">
                    <img src="./login.jpg" alt="" className='img-fluid h-100' />
                </div>

                <form className='col-12 col-md-6 px-3 py-3' onSubmit={handleSignUp}>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h5 className=' text-center py-2 mb-1 fst-italic fw-lighter '>Discover, Explore, Imagine.</h5>
                        <AiFillBook />
                    </div>

                    {error && <div className="alert alert-danger text-center mb-3">{error}</div>} {/* Display error message */}

                    <h5 className='text-center fst-italic mb-3'>Sign Up</h5>

                    <div className="form-floating mb-3">
                        <input type="text" className='form-control rounded' id='username' placeholder='your name' required onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className='form-control rounded' id='email' placeholder='xyz.@gmail.com' required onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className='form-control rounded' id='password' placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="text-center">
                        <button className=' btn login-btn py-2 px-2 rounded-3 d-flex align-items-center justify-content-center'>Sign up <CiLogin /></button>
                    </div>

                    <div className="text-center mt-3 ">
                        <button className='btn btn-outline-dark w-100 d-flex align-items-center justify-content-center' onClick={handleRegister}>
                            <AiFillGoogleCircle className='w-8 h-8 mr-3' />
                            Continue with Google
                        </button>
                    </div>

                    <div className="text-center mt-4">Already have an Account? <Link to="/login" className='loginLink'>Log in</Link></div>

                    <div className='text-center mt-4'>By continuing, I agree to the <Link className='Terms'> Terms of Use  </Link>& <Link className='Privacy'>Privacy Policy</Link></div>

                </form>

            </div>
        </div>
    );
}
