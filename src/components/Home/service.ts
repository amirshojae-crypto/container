import {CardProps} from './Card';
import axios, { AxiosResponse } from "axios";

export const getTrendingCrypto = async (): Promise<CardProps[]>  => {
  const tendingCrypto: AxiosResponse<CardProps[]> = await axios.get('https://62213021afd560ea69aa2f72.mockapi.io/crypto/trendingCryptos');
  return tendingCrypto.data;
}