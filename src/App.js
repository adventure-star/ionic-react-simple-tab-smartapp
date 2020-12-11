import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, bluetooth, map, home, add, list, atCircle, cog, settings, thumbsUpSharp, logOut, logIn } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import MiComponente from './components/MiComponente'
import CustomCheckbox from './components/CustomCheckbox';
import ContactMap from "./components/map"
import { withScriptjs } from "react-google-maps";

import Splash from "./pages/Splash"
import Home from "./pages/Home"
import Insert from "./pages/Insert"
import Action from "./pages/Action"
import Settings from "./pages/Settings"
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import authService, { logout } from './services/authService';
import Logout from './pages/Logout';

const tokenKey = "token";

const App = () => {

  const [logstate, setLogState] = useState(false);

  useEffect(() => {

  }, [logstate]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Route
                path="/splash"
                exact
                render={() => {
                  return <Splash title="Usage of this App" />
                }}
              />
              <Route
                path="/login"
                exact
                render={() => {
                  return <Login title="Usage of this App" />
                }}
              />
              <Route
                path="/logout"
                exact
                render={() => {
                  return <Logout title="Usage of this App" />
                }}
              />
              <Route
                path="/register"
                exact
                render={() => {
                  return <Register title="Usage of this App" />
                }}
              />
              <ProtectedRoute
                path="/home"
                component={Home}
              />
              <ProtectedRoute
                path="/insert"
                component={Insert}
              />
              <ProtectedRoute
                path="/action"
                component={Action}
              />
              <ProtectedRoute
                path="/settings"
                component={Settings}
              />
              <Route path="/" exact render={() => <Redirect to="/home" />} />
            </Switch>

          </IonRouterOutlet>
          <IonTabBar slot="bottom" >
            <IonTabButton tab="Home" href="/home" className="bg-red change-color">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Check" href="/insert" className="bg-red change-color">
              <IonIcon icon={list} />
              <IonLabel>Insert</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Google Map" href="/action" className="bg-red change-color">
              <IonIcon icon={thumbsUpSharp} />
              <IonLabel>Action</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Settings" href="/settings" className="bg-red change-color">
              <IonIcon icon={settings} className="change-color" />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
            {authService.getCurrentUser() &&
              <IonTabButton tab="Logout" href="/logout" className="bg-red change-color">
                <IonIcon icon={logOut} className="change-color" />
                <IonLabel>LogOut</IonLabel>
              </IonTabButton>
            }
            {!authService.getCurrentUser() &&
              <IonTabButton tab="LogIn" href="/login" className="bg-red change-color">
                <IonIcon icon={logIn} />
                <IonLabel>LogIn</IonLabel>
              </IonTabButton>
            }
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
