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
    </>
  );
};

export default Home;
