import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const AdminLogin = React.lazy(() => import('./views/Pages/Login/adminLogin'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Registerpsy = React.lazy(() => import('./views/Pages/Registerpsy'));
const SignIn = React.lazy(() => import('./views/Pages/SignIn'));
const SignInpsy = React.lazy(() => import('./views/Pages/SignInpsy'));
const Page404 = React.lazy(() => import('./views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const AuthPatient = React.lazy(() => import('./views/Pages/Authpatient/Authpatient'));
const Authpsy = React.lazy(() => import('./views/Pages/Authpsy'));
const Contact = React.lazy(() => import('./views/Pages/Contact'));
const Listpsypatient = React.lazy(() => import('./views/Pages/Listpsypatient'));








class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/admin/login" name="Login Admin" render={props => <AdminLogin {...props} />} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/registerpsy" name="Registerpsy Page" render={props => <Registerpsy {...props}/>} />
              <Route exact path="/signin" name="SignIn Page" render={props => <SignIn {...props}/>} />
              <Route exact path="/signinpsy" name="SignInpsy Page" render={props => <SignInpsy {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/authpatient" name="AuthPatient Page" render={props => <AuthPatient {...props}/>} />
              <Route exact path="/authpsy" name="Authpsy Page" render={props => <Authpsy {...props}/>} />
              <Route exact path="/contact" name="Page Contact" render={props => <Contact {...props}/>} />
              <Route exact path="/listpsypatient" name="Page listpsy" render={props => <Listpsypatient {...props}/>} />
 >
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />


            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
