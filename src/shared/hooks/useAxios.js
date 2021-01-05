import axios from 'axios';
import { useCallback, useState } from 'react';

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(async (method, url, data, headers = {}) => {
    setIsLoading(true);
    const config = {
      method: method,
      url: ` http://127.0.0.1:5000/${url}`,
      data: data,
      headers: headers,
    };
    return new Promise((resolve, reject) => {
      return axios(config)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err.response);
        });
    });
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
