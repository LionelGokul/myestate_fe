import React, { useRef } from 'react';
import sideBarData from '../../DummyData/SideBarData';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../shared/DataLayer/Context';
import { default as UserIcon } from '../../Images/user.svg';
import { ACTIONS } from '../../../shared/DataLayer/reducer';

const SideBar = (props) => {
  const wrapperRef = useRef(null);
  const [{ user }, dispatch] = useStateValue();

  const openLoginModal = () => {
    dispatch({
      type: ACTIONS.LOGIN_MODAL,
      payload: true,
    });
  };
  // detect outside click
  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      props.setSideBar(false);
    }
  }
  document.addEventListener('mousedown', handleClickOutside);
  return (
    <nav
      className={props.sideBar ? 'nav-menu active' : 'nav-menu'}
      ref={wrapperRef}
    >
      <ul className="nav-menu-items">
        <li className="nav-text user">
          <div className="sidebar_user">
            {user.name === undefined ? (
              <div onClick={openLoginModal}>
                <img
                  alt="default user icon"
                  className="sidebar_user_img"
                  src={UserIcon}
                />
                Hello, Login
              </div>
            ) : (
              <Link to="/profile">
                <img
                  alt="default user icon"
                  className="sidebar_user_img"
                  src={user.imageUrl || UserIcon}
                />
                Hello,{user.name}
              </Link>
            )}
          </div>
        </li>
        {sideBarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
