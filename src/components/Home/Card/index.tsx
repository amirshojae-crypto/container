import './index.css';
import Button from '../../Button';
import history from '../../../utils/history';

import currencyFormatter from 'currency-formatter';
import React from 'react'
export interface CardProps {
  instrument: string;
  imagePath: string;
  lastPrice: number;
  percentageChange: number;
  volume: {
    dollarValue: number;
    coinCount: number;
  };
  chartPoints: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  instrument,
  imagePath,
  lastPrice,
  percentageChange,
  volume,
  chartPoints,
  style,
}) => {
  return (
    <div className="container" style={style}>
      <div className="item">
        <img src={imagePath} alt={instrument} width="24" />
        <p>{instrument}</p>
      </div>
      <p style={{ width: '150px', textAlign: 'left' }}>{currencyFormatter.format(lastPrice, { code: 'USD' })}</p>
      <p style={{ width: '150px', textAlign: 'left' }}>{currencyFormatter.format(volume.dollarValue, { code: 'USD' })}</p>
      <p style={{ color: percentageChange > 0 ? 'green' : 'red', width: '150px' }}>{percentageChange.toFixed(2)}%</p>
      <svg style={{ width: '150px' }} data-v-278ecb10="" data-test="spark-line" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="50" className="e-spark-line spark-line"><polyline points={chartPoints} stroke="#24a0f5" stroke-width="2" stroke-linecap="round" fill="none" className="polyline"></polyline></svg>
      <Button type='submit' text='Trade' onClick={() => {
        history.push('/candle-stick')
      }} />
    </div>
  )
}

export default Card;
