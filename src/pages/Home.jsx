import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import { useFetch } from "../hooks/useFetch";
import { fetchPosts } from "../http";

const Home = () => {
  const { isFetching, error, fetchedData } = useFetch(fetchPosts);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(10);
  const [skip, setSkip] = useState(10);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  useEffect(() => {
    setLoading(isFetching);
    setData(fetchedData);
  }, [fetchedData, isFetching]);

  const combinedArray = data.map((item1) => {
    const correspondingItem2 = users.find((item2) => item2.id === item1.userId);
    const { id, ...restItem2 } = correspondingItem2 || {};

    // Merge properties from both arrays based on the ID
    return { ...item1, ...restItem2 };
  });

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(testUrl);
  //     const newData = await response.json();
  //     setSkip((prevSkip) => prevSkip + limit);
  //     setData((prevData) => [...prevData, ...newData.posts]);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleLoadMore = () => {
  //   fetchData();
  // };
  return (
    <>
      {!loading ? (
        combinedArray.map((item, index) => (
          <div key={index}>
            <PostCard post={item} user={item} />
          </div>
        ))
      ) : (
        <PostCardSkeleton cards={5} />
      )}
      {/* <button onClick={handleLoadMore}>load more</button> */}
    </>
  );
};

export default Home;
