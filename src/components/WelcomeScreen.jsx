import React from "react";
import '../styling/welcome-screen.css';
import Icon from '../public/meet-app-512';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <div className="WelcomeScreen_content">
                    <div className="WelcomeScreen_content-text">
                        <h1>Welcome to the {Icon} <span className="app-name">Meet Up App</span></h1>
                        <h4>Log in to see upcoming events around the world for
                            full-stack developers.
                        </h4>
                    </div>
                    <div className="WelcomeScreen_content-buttons">
                        <div className="button_cont" align="center">
                            <div class="google-btn">
                                <div class="google-icon-wrapper">
                                    <img
                                        class="google-icon"
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
        o.svg"
                                        alt="Google sign-in"
                                    />
                                </div>
                                <button onClick={() => { props.getAccessToken() }}
                                        rel="nofollow noopener"
                                        class="btn-text"
                                >
                                    <b>Sign in with Google</b>
                                </button>
                            </div>
                        </div>
                        <a
                            href="https://lisapmunich.github.io/meet/privacy.html"
                            rel="nofollow noopener"
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