import "./LoginPage.css";

export default function LoginPage() {

    return (
        <div className="Background-login">
            <text> AutoLog </text>
            <div className="Login-container">
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
                <button className="Login">Log in</button>
            </div>
            <h2>Forgot password?</h2>
            <h3>Dont have an account? <span className="Sign-up">Sign up</span> </h3>
        </div>            
    );
}