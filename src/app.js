import React          from 'react'
import { HashRouter } from 'react-router-dom'
import { render }     from 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store';


import 'Style/app.css';

import AppBar           from  './components/shared/AppBar';
import Breadcrumbs      from  './components/shared/Breadcrumbs';
import Footer           from  './components/shared/Footer';
import Dashboard        from  './components/Dashboard';

const App = () => (
  <div>
    <AppBar />
    <Breadcrumbs />
    <Dashboard />
    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>

  , document.getElementById('ready-player-one'));
