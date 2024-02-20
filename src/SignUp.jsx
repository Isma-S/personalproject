import "./SignUp.css";

export default function SignUp() {

    return (
        <div className="SignUp-Background">

            <h1> AutoLog </h1>
            <div className="SignUp-Login-container">
                <input
                className="Name-container"
                id="Name"
                placeholder="Full Name"/>
                <input
                className="Email-container" 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email"/>
                <input 
                className="Password-container"
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password"/>
                <button className="Login">Login</button>
            </div>
            <h2>Forgot password?</h2>
            <h3>Dont have an account? <span className="Sign-up">Sign up</span> </h3>
        </div>            
    );
}