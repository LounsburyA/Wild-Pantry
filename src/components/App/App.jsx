import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import EdibleListPage from '../EdibleListPage/EdibleListPage';
import EdibleFormPage from '../EdibleFormPage/EdibleFormPage';
import JournalListPage from '../JournalListPage/JournalListPage';
import JournalFormPage from '../JournalFormPage/JournalFormPage';
import EditUserForm from '../EditFormPage/EditFormPage';
import PantryEditPage from '../PantryEditPage/PantryEditPage';
import BottomNav from '../BottomNav/BottomNav';
import './App.css';
import { createTheme, ThemeProvider, themeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c'
    },
    secondary: {
      main: '#e6e2d3'
    }
  }
})


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>
            {/* edible list page */}
            <ProtectedRoute
              // exact
              path="/pantry">
              <EdibleListPage />

            </ProtectedRoute>

            {/* edible form page */}
            <ProtectedRoute
              exact
              path="/edibleform">
              <EdibleFormPage />

            </ProtectedRoute>
            {/* journal list page */}
            <ProtectedRoute
              exact
              path="/journal">
              <JournalListPage />
            </ProtectedRoute>


            {/* journal form page */}
            <ProtectedRoute
              exact
              path="/editform/:id">
              < EditUserForm />
            </ProtectedRoute>


            {/* pantry edit route */}
            <ProtectedRoute
              exact
              path="/editpantry/:id">
              < PantryEditPage />
            </ProtectedRoute>


            <ProtectedRoute
              exact
              path="/journalform">
              <JournalFormPage />

            </ProtectedRoute>

            

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <ProtectedRoute>
              
              <BottomNav />

            </ProtectedRoute>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
