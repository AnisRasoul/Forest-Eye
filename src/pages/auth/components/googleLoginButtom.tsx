//@ts-nocheck
import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import Cookies from "universal-cookie";

// Consider storing sensitive information like clientId in environment variables
const clientId =
  "934116327675-8ct5jr9djvhohdrp7k0ama73a8p26g2p.apps.googleusercontent.com";

const GoogleAuthButton: React.FC = () => {
  const cookies = new Cookies();

  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      // Check if credential is not undefined before trying to set it
      if (credentialResponse.credential) {
        cookies.set("jwt", credentialResponse.credential, { path: "/" });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoginFailure = () => {
    // Implement what should happen on failure
    console.log("Login failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="my-custom-button">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          //ignore ts-ignore
          render={(renderProps: {
            onClick: () => void;
            disabled?: boolean;
          }): JSX.Element => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="your-custom-classes">
              <img
                src="/public/assets/icons/google.svg"
                className="h-5 w-5 mx-2"
                alt="Google"
              />
              Sign in with Google
            </button>
          )}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthButton;
