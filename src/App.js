import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import UploadProperty from './pages/UploadProperty/UploadProperty';
import { Header } from './shared/components/UIElements/Header';
import PropertyDetailedView from './pages/DetailedView/PropertyDetailedView';
import Wishlists from './pages/Wishlists/Wishlists';
import MyProperties from './pages/MyProperties/MyProperties';
import SearchResults from './pages/SearchResults/SearchResults';
import { StateProvider } from './shared/DataLayer/Context';
import reducer from './shared/DataLayer/reducer';
import Loader from './shared/components/UIElements/Loader';
import LoaderContext from './shared/DataLayer/LoaderContext';

function App() {
  const [loader, setLoader] = useState(null);

  const user =
    localStorage.getItem('user') !== undefined &&
    localStorage.getItem('user') !== null
      ? JSON.parse(localStorage.getItem('user'))
      : {};

  const favList =
    localStorage.getItem('favList') !== undefined &&
    localStorage.getItem('favList') !== null
      ? JSON.parse(localStorage.getItem('favList'))
      : [];
  const init = {
    user: user,
    favList: [...favList],
    loginModalOpen: false,
    signUpModalOpen: false,
  };
  return (
    <StateProvider defaultState={init} reducer={reducer}>
      <Router>
        <LoaderContext.Provider value={{ loader, setLoader }}>
          {loader && <Loader />}
          <Header />
          <div className="cmn_workarea">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/profile" component={User} />
              <Route path="/upload-property" component={UploadProperty} exact />
              <Route
                exact
                path="/property/:id"
                component={PropertyDetailedView}
              />
              <Route
                exact
                path="/property/:id/edit"
                render={(props) => <UploadProperty isEdit={true} {...props} />}
              />
              <Route exact path="/my-wishlists" component={Wishlists} />
              <Route exact path="/my-properties" component={MyProperties} />
              <Route exact path="/search/:query" component={SearchResults} />
            </Switch>
          </div>
        </LoaderContext.Provider>
      </Router>
    </StateProvider>
  );
}

export default App;
