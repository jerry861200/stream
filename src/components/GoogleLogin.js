import { useEffect, useRef ,useCallback } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { signIn, signOut } from "../store/signInSlice";

const GoogleLogin = () => {
	const isSignedIn = useSelector(state => state.signIn.isSignedIn);
	const dispatch = useDispatch();
  let ref = useRef();

	const onAuthChange = useCallback((isSignedIn) => {
    if(isSignedIn){
			dispatch(signIn(ref.current.currentUser.get().getId()))
		}else{
			dispatch(signOut())
		}
  }, [dispatch]);
	//Google API
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
          onAuthChange(ref.current.isSignedIn.get());
          ref.current.isSignedIn.listen(onAuthChange);
        });
    }

    // Load the JavaScript client library and invoke start afterwards.
    window.gapi.load("client:auth2", start);
  }, []);

  

  const onSignInClick = () => {
    ref.current.signIn();
  };

  const onSignOutClick = () => {
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
