import { getTrendingCrypto } from './service';
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { CardProps } from './Card';

const useHome = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [trendingCryptos, setTrendingCryptos] = useState<CardProps[]>([]);
  const snackbar = useSnackbar();

  const getTrendingCryptoAsync = async () => {
    try {
        const _trendingCryptos = await getTrendingCrypto();
      setTrendingCryptos(_trendingCryptos);
    } catch {
      snackbar.enqueueSnackbar('There was an error retrieving your trending cryptos', {
        variant: 'error'
      })
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getTrendingCryptoAsync();
  }, []);

  return {
    loading,
    trendingCryptos,
  }
};

export default useHome;
