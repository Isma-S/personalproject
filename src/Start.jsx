import { Link } from "react-router-dom";
import "./Start.css";

export default function Start() {

    return (
        <div className="Background-start">
            <h1> AutoLog </h1>
            <h2>Your Digital Logbook</h2>
            <div className="Start-Login-container">
                <Link to={"/login"}>
                    <button className="Start-Login-button">Login</button>
                </Link>
                <Link to={"/SignUp"}>
                    <button className="Start-Create-account-button">Create Account</button>
                </Link>
               
            </div>

        </div>            
    );
}