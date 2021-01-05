import { useContext } from 'react';
import axios from 'axios';
import { useCallback, useState } from 'react';
import LoaderContext from '../DataLayer/LoaderContext';

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { loader, setLoader } = useContext(LoaderContext);

  const sendRequest = useCallback(async (method, url, data, headers = {}) => {
    setIsLoading(true);
    setLoader(true);
    const config = {
      method: method,
      url: ` http://127.0.0.1:5000/${url}`,
      data: data,
      headers: headers,
    };
    return new Promise((resolve, reject) => {
      return axios(config)
        .then((res) => {
          setLoader(false);
          return resolve(res.data);
        })
        .catch((err) => {
          setLoader(false);
          return reject(err.response);
        });
    });
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
