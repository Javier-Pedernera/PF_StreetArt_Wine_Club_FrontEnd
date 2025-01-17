import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import {  } from "@auth0/auth0-react";
import axios from "axios";
// const { user, isAuthenticated } = useAuth0();
// const { isLoading, isAuthenticated: auth, user } = useAuth0();


axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('user');
// axios.defaults.baseURL = 'http://localhost:3001'; 
axios.defaults.baseURL = 'https://pfstreetartwineclubbackend-production-d075.up.railway.app';


const domain = "dev-m8cyeyymdhng4yms.us.auth0.com";
const clientId = "1bIjccmBcjJFud2ipmgarfLJc7jGYjrQ";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: "https://pf-street-art-wine-club-front-end-b2mj-git-production-javipeder.vercel.app/userprofile",
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
