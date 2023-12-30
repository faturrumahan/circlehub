import { useEffect, useState } from "react";

export const useFetch = (fetchFn) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn(0);
        setFetchedData(data);
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
