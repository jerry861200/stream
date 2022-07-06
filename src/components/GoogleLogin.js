import { useState, useEffect, useRef } from "react";

const GoogleLogin = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  let ref = useRef();
  useEffect(() => {
    function start() {
      window.gapi.client
        .init({
          apiKey: "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",
          clientId:
            "404256770456-ptmjsgig6b2l1710osvkhqhdsu2k3hq0.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(function () {
          // Execute an API request which is returned as a Promise.
          // The method name language.translations.list comes from the API discovery.
          ref.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(ref.current.isSignedIn.get());
          ref.current.isSignedIn.listen(onAuthChange);
        });
    }

    // Load the JavaScript client library and invoke start afterwards.
    window.gapi.load("client:auth2", start);
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(ref.current.isSignedIn.get());
  };

  const onSignInClick = () => {
    ref.current.signIn();
  };

  const onSignOutClick = () => {
		console.log(ref.current)
    ref.current.signOut();
  };
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };
  return <div>{renderAuthButton()}</div>;
};

export default GoogleLogin;
