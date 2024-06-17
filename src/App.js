import React from 'react';
import './style.css';
import Header from './Header';
import TopPanel from './TopPanel';
import ServicePanel from './ServicePanel';
import Houses from './Houses';
import Service from './Service';
import Popular from './Popular';
import JoinNet from './JoinNet';
import Footer from './Footer';

function App(props) {
  return (
    <div>
      <Header />
      <TopPanel />
      <ServicePanel />
      <Houses />
      <Service />
      <Popular />
      <JoinNet />
      <Footer />
    </div>
  );
}

export default App;