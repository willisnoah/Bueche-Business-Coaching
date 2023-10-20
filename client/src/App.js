import React from "react";
import Navbar from "./navbar";
import Services from "./routes/services";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';  
import About from './routes/about';
import Login from './routes/login';
import Home from './routes/home';
import Register from './routes/signup';
import AppointmentCalendar from './routes/appointmentCalendar';



// const REACT_APP_BUECHE_BUSINESS_COACHING_API_KEY= process.env.REACT_APP_BUECHE_BUSINESS_COACHING_API_KEY




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointmentCalendar" element={<AppointmentCalendar />} />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;