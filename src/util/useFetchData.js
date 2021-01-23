import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (initialData) => {
  const [data, setData]           = useState(initialData);
  const [url, setUrl]             = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError]     = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const result = await axios.get(url);
        setData(result.data);
        setIsSuccess(true);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    if(url)
      fetchData();

  }, [url]);

  return [{data, isLoading, isError, isSuccess}, setUrl];
}

export default useFetchData;