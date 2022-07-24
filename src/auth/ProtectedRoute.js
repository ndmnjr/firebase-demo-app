import React from 'react';
import { Redirect, Route } from 'react-router';

export const ProtectedRoute = ({ isAuthed, isLoading, component: Component, ...rest }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route {...rest} render={(props) => isAuthed ? (<Component {...props}></Component>) :
      (
        <Redirect to='/sign-in' />
      )
    }
    ></Route>
  );
}