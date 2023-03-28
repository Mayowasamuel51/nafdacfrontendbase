import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Unit1OsunRoutes from "./routes/authroutes/Unit1OsunRoutes";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Unit2OsunRoutes from "./routes/authroutes/Unit2OsunRoutes";




axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer  ${token}` : "";
  return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            {localStorage.getItem("auth_token") ? (
              <Redirect to={`/`} />
            ) : (
              <Login />
            )}
          </Route>
       
          <Unit1OsunRoutes path="/unit1Osun" name="Unit1Osun" />
          <Unit2OsunRoutes path="/unit2Osun" name="Unit2Osun"/>
        
        </Switch>
      </Router>

    </div>
  );
}

export default App;
