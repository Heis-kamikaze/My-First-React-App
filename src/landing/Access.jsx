import "./Access.css";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
function Access() {
    function showSignUp() {

        const signUpForm = (
            <div>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Create a Username" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <input type="password" placeholder="Re-Enter Password" className="input" />
                <button className="button signup">Sign Up</button>
                <div>
                    <button className="plain" href="" onClick={showLogin}>Already have an account? Click here to log in!!
                    </button>
                </div>
                <div>
                    <button className="button back" href="" onClick={Access}>Back</button>
                </div>
            </div>
        );

       

        const rootContainer = ReactDOM.createRoot(root);
        rootContainer.render(signUpForm);
    }

    function showLogin() {

        const loginForm = ( 
            <div>
                <h1>Login</h1>
                <input type="email" placeholder="Email or username" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="button login">Log In</button>
                <div>
                    <button className="plain" href="" onClick={showSignUp}>Don&#39;t have an account? Click here to sign up!
                    </button>
                </div>
                <div>
                    {/* {This doesn't seem to be working yet and id fucking k why...} */}
                    <button className="button back" href="" onClick={Access}>Back</button>
                </div>
            </div>
        );

        const rootContainer = ReactDOM.createRoot(root);
        rootContainer.render(loginForm);
    }

    return (
        <div>
            <h1>Welcome to my React app!</h1>
            <button className="button login" onClick={showLogin}>Log In</button>
            <h5>Don&#39;t have an account?</h5>
            <button className="button signup" onClick={showSignUp}>
                Sign Up
            </button>
        </div>
    );
}



export default Access;
