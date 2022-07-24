import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  ProtectedRoute,
  SignInPage,
  useAuth,
} from './auth';
import { ReservationsListPage } from './reservations';
import {
  RestaurantDetailPage,
  SearchPage,
} from './restaurants';
import {
  WriteAReviewPage,
  WriteAReviewThankYouPage,
} from './reviews';
import { EditProfilePage } from './user';
import './App.css';

/*
  This is the main React component that we render the rest of
  of app's components inside of. In our app, we're using this
  component to hold the Router and all the different Routes our
  app supports.
*/
function App() {
  const {isLoading, user} = useAuth();
  
  return (
    <Router>
      <Switch>
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/create-account' component={CreateAccountPage} />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/edit-profile' component={EditProfilePage}></ProtectedRoute>
        <Route path='/email-confirmation/success' component={EmailConfirmationLanderPage} />
        <Route path='/email-confirmation/failure' component={EmailConfirmationLanderPage} />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/' component={ReservationsListPage} exact></ProtectedRoute>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/search' component={SearchPage}></ProtectedRoute>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/restaurants/:id' component={RestaurantDetailPage}></ProtectedRoute>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/write-a-review/:id' component={WriteAReviewPage}></ProtectedRoute>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/review/thank-you' component={WriteAReviewThankYouPage}></ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
