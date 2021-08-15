import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {About} from './Components/Route/About/About.jsx';
import { Header } from './Components/Header/Header';
import { Logout } from './Components/Header/Logout';
import { Main } from './Components/Main/Main';
import { Sponsors } from './Components/Sponsors/sponsors';
import {useRoutes} from './Components/Auth/routes'
import {AuthPage} from './Components/Auth/AuthPage'
import {useAuth} from './hooks/auth.hook'
import { AuthContext } from './Context/AuthContext';

import 'materialize-css'

const App = (props) => {

  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId
    }}>
      <BrowserRouter> 
      {isAuthenticated && <Logout />}
      <div className="main">
  

      {routes}
      {/* <Route path="/" render={() => <Header />} /> */}
      <Route path="/signin" render={() => <AuthPage />} />
      <Route path="/signup" render={() => <AuthPage />} />
      <Route path="/main" render={() =>  <Main />} />
      <Route path="/main" render={() => <Sponsors />} />

      <Route path="/about" render={() => <About />} />

      </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
