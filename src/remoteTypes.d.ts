///<reference types="react" />

declare module 'position/App' {
  const Position: React.ComponentType;

  export default Position;
}
declare module 'candlestick/App' {
  const CandleStick: React.ComponentType;

  export default CandleStick;
}
declare module 'orderbook/App' {
  const Orderbook: React.ComponentType<{ text: string}>;

  export default Orderbook;
}