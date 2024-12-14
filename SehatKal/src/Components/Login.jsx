import React, {useState,useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillBook, AiFillGoogleCircle } from 'react-icons/ai';
import { CiLogin } from "react-icons/ci";
import { AuthContext } from '../Components/AuthProvider';
import "./loginstyle.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, loginwithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await login(email, password);
      navigate("/", { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  const handleRegister = async () => {
    try {
      const result = await loginwithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case 'auth/invalid-credential':
        setError('There seems to be an issue with your login credentials. Please double-check your email and password, or reset your password if necessary.');
        break;
      case 'auth/wrong-password':
        setError('Incorrect email or password.');
        break;
      case 'auth/user-not-found':
        setError('The email address you entered is not associated with an account.');
        break;
      default:
        setError(errorMessage);
    }
  };

  return (
    <div className='row g-0 justify-content-center align-items-center vh-100 login-container'>
      <div className="col-10 row g-0 border rounded-2 bg-white">
        <div className="d-none d-md-block col-6">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*TErHODvkJTDfdOJyLNrjcw.jpeg" alt="" className='img-fluid h-100' />
        </div>
        <form className='col-12 col-md-6 px-3 py-4' onSubmit={handleLogin}>
          <div className='d-flex align-items-center justify-content-center'>
            <h5 className='text-center py-2 mb-1 fst-italic fw-lighter'>Discover, Explore, Imagine.</h5>
            <AiFillBook />
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="form-floating mb-3">
            <input
              type="email"
              className='form-control rounded'
              id='email'
              placeholder='xyz.@gmail.com'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className='form-control rounded'
              id='password'
              placeholder='password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="text-center">
            <button className='btn login-btn py-2 px-2 rounded-3' type="submit">
              Login 
            </button>
          </div>

          <div className="text-center mt-3">
            <button
              className='btn btn-outline-dark w-100 d-flex align-items-center justify-content-center'
              type="button"
              onClick={handleRegister}
            >
              <AiFillGoogleCircle className='w-8 h-8 mr-2' />
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            Don't have an Account? <Link to="/signup" className='loginLink'>Sign Up</Link>
          </div>

          <div className='text-center mt-4'>
            By continuing, I agree to the <Link className='Terms'> Terms of Use </Link> & <Link className='Privacy'>Privacy Policy</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
