import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './Router/AppRouter';
import './App.css';

function App() {
  return (
    <div>
     <Router>
      <Container>
       <AppRouter />
       <ToastContainer />
      </Container>
    </Router>
    </div>
  );
}

export default App;
