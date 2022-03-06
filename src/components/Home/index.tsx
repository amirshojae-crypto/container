import { CircularProgress } from '@mui/material';
import React from 'react';
import Card, { CardProps } from './Card';
import './index.css';
import useHome from './useHome';

const Home: React.FC = () => {
  const { loading, trendingCryptos } = useHome();

  if (loading) {
    return <CircularProgress />
  }

  return (
    <div>
      <h1>Trending</h1>
      {
        trendingCryptos.map((tc: CardProps) => (
          <Card key={tc.instrument} {...tc} style={{ marginBottom: '16px' }} />
        ))
      }
    </div>
  )
}

export default Home;
