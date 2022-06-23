import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../template/custom.css';

import Menu from '../template/menu';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
