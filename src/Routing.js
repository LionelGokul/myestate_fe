import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStateValue } from './shared/DataLayer/Context';
import { ACTIONS } from './shared/DataLayer/reducer';
import PropertyDetailedView from './pages/DetailedView/PropertyDetailedView';
import Wishlists from './pages/Wishlists/Wishlists';
import MyProperties from './pages/MyProperties/MyProperties';
import SearchResults from './pages/SearchResults/SearchResults';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import UploadProperty from './pages/UploadProperty/UploadProperty';
import AlertMessageContext from './shared/DataLayer/AlertMesageContext';

const Routing = () => {
  const [{ user }, dispatch] = useStateValue();
  const { setOpen, setSuccess, setMsg } = useContext(AlertMessageContext);

  if (user.id === undefined)
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/property/:id" component={PropertyDetailedView} />
        <Route exact path="/search/:query" component={SearchResults} />
        <Redirect to="/" />
      </Switch>
    );

  // validating user session with expiry time
  setInterval(() => {
    if (user.id !== undefined) {
      let current = new Date();
      let expiry = JSON.parse(localStorage.getItem('me_exp'));
      console.log(new Date(expiry));
      if (current > new Date(expiry)) {
        loggedIn = false;
        setOpen(true);
        setSuccess(false);
        setMsg('User session timed out please Log in again.');
        dispatch({
          type: ACTIONS.SIGN_OUT,
        });
        setTimeout(() => window.location.reload(), 2000);
      }
    }
  }, 5000);
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route exact path="/property/:id" component={PropertyDetailedView} />
      <Route
        exact
        path="/property/:id/edit"
        render={(props) => <UploadProperty isEdit={true} {...props} />}
      />
      <Route path="/profile" component={User} />
      <Route path="/upload-property" component={UploadProperty} exact />
      <Route exact path="/my-wishlists" component={Wishlists} />
      <Route exact path="/my-properties" component={MyProperties} />
      <Route exact path="/search/:query" component={SearchResults} />
    </Switch>
  );
};

export default Routing;
