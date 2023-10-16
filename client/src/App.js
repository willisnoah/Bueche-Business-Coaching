import React from "react";
import About from "./routes/about";
import Login from "./routes/login";
import Navbar from "./navbar";
import Services from "./routes/services";
import Home from "./routes/home";
import Register from "./routes/signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/register":
      component = <Register />
      break
    case "/login":
      component = <Login />
      break
    case "/services":
      component = <Services />
  }
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        {component}
      </ApolloProvider>
    </>
  )
}

export default App;
