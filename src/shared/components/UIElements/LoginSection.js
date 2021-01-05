import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../DataLayer/Context';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DefaultUserIcon from '../../Images/user.svg';
import Login from '../../components/Modals/Login/Login';
import SignUp from '../Modals/SignUp/SignUp';
import { ACTIONS } from '../../../shared/DataLayer/reducer';

const LoginSection = (props) => {
  const [{ user, loginModalOpen, signUpModalOpen }, dispatch] = useStateValue();

  const openLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: true,
    });
  };

  const closeLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: false,
    });
  };

  const openSignUpModal = () => {
    dispatch({
      type: ACTIONS.SIGNUP_MODAL,
      payload: true,
    });
  };

  const closeSignUpModal = () => {
    dispatch({
      type: ACTIONS.SIGNUP_MODAL,
      payload: false,
    });
  };

  return (
    <>
      <Login
        open={loginModalOpen}
        handleClose={closeLoginModal}
        openSignUpModal={openSignUpModal}
      />
      <SignUp
        open={signUpModalOpen}
        handleClose={closeSignUpModal}
        openSignUpModal={openSignUpModal}
      />
      {user?.name !== undefined ? (
        <>
          <Chip
            avatar={
              <Avatar alt={user.name} src={user.imageUrl || DefaultUserIcon} />
            }
            label={user.name}
            className="width_100"
          />
        </>
      ) : (
        <Link
          to="#"
          className="menu-bars no_decor_links"
          onClick={openLoginModal}
        >
          Login
        </Link>
      )}
    </>
  );
};

export default LoginSection;
