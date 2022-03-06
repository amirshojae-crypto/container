import Home from './components/Home';

import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import './App.css';
import { SnackbarProvider } from 'notistack';

const Orderbook = React.lazy(() => import('orderbook/App'));

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/order-book/:crypto' element={
            <React.Suspense fallback={<CircularProgress />}>
              <div style={{ height: 'calc(100vh - 100px)' }}>
                <Orderbook />
              </div>
            </React.Suspense>
          } />
          <Route path="/" element={
            <Container maxWidth="md">
              <Home />
            </Container>
          } />
        </Routes>
      </div >
    </SnackbarProvider>
  );
}

export default App;
