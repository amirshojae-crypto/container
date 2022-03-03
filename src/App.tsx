import Home from './components/Home';

import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import './App.css';
import { SnackbarProvider } from 'notistack';

const Position = React.lazy(() => import('position/App'));
const CandleStick = React.lazy(() => import('candlestick/App'));
const Orderbook = React.lazy(() => import('orderbook/App'));

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Navigation />
        <Container maxWidth="md">
          <Routes>
            <Route path='/order-book' element={
              <React.Suspense fallback={<CircularProgress />}>
                <Orderbook text="amir" />
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
