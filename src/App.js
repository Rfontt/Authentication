import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import SignIn from  './pages/signIn';
import SignUp from  './pages/signUp';
import Home from './pages/home-logged';

function App() {
  return (
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route exact path = "/" component = {SignUp} /> 
    			<Route exact path = "/signIn" component = {SignIn} /> 
                <Route exact path = "/home" component = {Home} /> 
    		</Switch>
    	</div>
    </BrowserRouter>
  );
}

export default App;
