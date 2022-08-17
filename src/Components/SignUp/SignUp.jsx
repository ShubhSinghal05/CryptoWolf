import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Context/AuthProvider";

import axios from 'axios';
const LOGIN_URL = '/auth';

const SignUp = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{ fontSize: "45px", marginLeft: "44%" }}>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label style={{ fontSize: "25px", marginLeft: "36.6%" }} htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            style={{ height: "40px", width: "180px" }}
                        />
                        <br />
                        <label style={{ fontSize: "25px", marginLeft: "37%" }} htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            style={{ height: "40px", width: "180px" }}
                        />
                        <br />
                        <button style={{ fontSize: "25px", height: "40px", width: "180px", marginLeft: "44%" }}>Sign In</button>
                    </form>
                    <p style={{ fontSize: "25px", marginLeft: "28%" }}>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a style={{ fontSize: "25px", color: "greenyellow" }} href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default SignUp