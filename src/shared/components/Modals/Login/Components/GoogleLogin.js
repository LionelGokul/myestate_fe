import React from 'react';
import { useAxios } from '../../../../hooks/useAxios';
import ReactGoogleLogin from 'react-google-login';
import GoogleLogo from '../../../../../shared/Images/googleLogo.png';
import { useStateValue } from '../../../../DataLayer/Context';
import { ACTIONS } from '../../../../DataLayer/reducer';

const GoogleLogin = (props) => {
  const [{}, dispatch] = useStateValue();
  const { sendRequest } = useAxios();

  const responseGoogle = async (response) => {
    await sendRequest(
      'post',
      'users/login',
      {
        name: response.profileObj.name,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl,
        googleId: response.profileObj.googleId,
      },
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    )
      .then((user) => {
        dispatch({
          type: ACTIONS.ADD_USER,
          user: {
            name: user.name,
            id: user.id,
            imageUrl: user.profilePic,
            email: user.email,
            mobile: user.mobile,
          },
          favList: user.favList,
        });
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ReactGoogleLogin
      clientId="693936295463-f8lnb74ajf1dioji55utvm9psc096brb.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <button className="social_login_btn" onClick={renderProps.onClick}>
          <img
            src={GoogleLogo}
            className="social_login_img"
            alt="Google Logo"
          />
          Signin with Google
        </button>
      )}
      buttonText="LOGIN WITH GOOGLE"
    />
  );
};

export default GoogleLogin;
