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
        <Container maxWidth="md">
          <Routes>
            <Route path='/order-book/:crypto' element={
              <React.Suspense fallback={<CircularProgress />}>
                <Orderbook />
              </React.Suspense>
            } />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div >
    </SnackbarProvider>
  );
}

export default App;
