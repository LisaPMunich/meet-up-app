import React from "react";
import '../styling/welcome-screen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <div className="WelcomeScreen__content">
                    <div>
                        <h1 className="WelcomeScreen__content--header">Welcome to the <span className="app-name">Meet Up App</span></h1>
                        <h4 className="WelcomeScreen__content--text">Log in to see upcoming events around the world for
                            full-stack developers.
                        </h4>
                    </div>
                    <div className="WelcomeScreen__content--buttons">
                        <div align="center">
                            <div className="google-btn">
                                <div className="google-icon-wrapper">
                                    <img
                                        className="google-icon"
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                        alt="Google sign-in"
                                    />
                                </div>
                                <button onClick={() => { props.getAccessToken() }}
                                        rel="nofollow noopener"
                                        className="btn-text"
                                >
                                    <b>Sign in with Google</b>
                                </button>
                            </div>
                        </div>
                        <a
                            href="https://meet-up-app-2022.herokuapp.com/privacy-policy.html"
                            rel="nofollow noopener"
                            className="privacy-policy-link"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        )
        : null
}
export default WelcomeScreen;
