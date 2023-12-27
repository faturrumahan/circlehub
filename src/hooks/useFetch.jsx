import { useEffect, useState } from "react";

export const useFetch = (fetchFn) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn(0);
        setFetchedData(data);
        // setFetchedData((prevData) => [...prevData, ...posts]);
        setSkip((prevSkip) => prevSkip + limit);
      } catch (error) {
        setError({ message: error.message || "failed to fetch data" });
      }
      setIsFetching(false);
    };

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchedData,
  };
};
