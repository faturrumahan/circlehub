import { useEffect, useState, useRef } from "react";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import UserCard from "../components/UserCard";

const Search = () => {
  const search = useRef();
  const [keyword, setKeyword] = useState();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => setAllUsers(data.users));
  }, []);

  const SearchSubmitHandler = async (event) => {
    event.preventDefault();
    const keyword = search.current.value;
    setKeyword(search.current.value);
    try {
      const postResponse = await fetch(
        `https://dummyjson.com/posts/search?q=${keyword}`,
      );
      const userResponse = await fetch(
        `https://dummyjson.com/users/search?q=${keyword}`,
      );
      if (postResponse.ok || userResponse.ok) {
        if (userResponse.ok) {
          const data = await userResponse.json();
          setUsers(data.users);
        }
        if (postResponse.ok) {
          const data = await postResponse.json();
          setPosts(data.posts);
        }
      } else {
        alert("Some error occured");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  const combinedArray = posts.map((item1) => {
    const correspondingItem2 = allUsers.find(
      (item2) => item2.id === item1.userId,
    );
    const { id, ...restItem2 } = correspondingItem2 || {};

    // Merge properties from both arrays based on the ID
    return { ...item1, ...restItem2 };
  });

  return (
    <>
      <form onSubmit={SearchSubmitHandler}>
        <div className="relative w-full">
          <input
            type="search"
            className="z-20 block w-full rounded-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
            placeholder="Search Something..."
            ref={search}
            required
          ></input>
          <button
            type="submit"
            className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      {keyword === undefined && (
        <div className="flex h-full items-center justify-center overflow-hidden text-center text-3xl font-bold">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jXcFxpQ93CM?si=pt-YhZpezSipz8lZ&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
      {isLoading && keyword && (
        <div className="mt-3">
          <PostCardSkeleton cards={4} />
        </div>
      )}
      {!isLoading && (
        <>
          {users.length > 0 && (
            <>
              <div className="my-3">
                <h2 className="text-2xl font-bold">User :</h2>
                <hr className="h-px border-0 bg-gray-700"></hr>
              </div>
              <div className="grid grid-cols-4 gap-2 lg:grid-cols-5">
                {users.map((user) => (
                  <div key={user.username}>
                    <UserCard user={user} />
                  </div>
                ))}
              </div>
            </>
          )}
          {combinedArray.length > 0 && (
            <>
              <div className="my-3">
                <h2 className="text-2xl font-bold">Post :</h2>
                <hr className="h-px border-0 bg-gray-700"></hr>
              </div>
              {combinedArray.map((post) => (
                <div key={post.title}>
                  <PostCard post={post} user={post} />
                </div>
              ))}
            </>
          )}
        </>
      )}
      {!isLoading && combinedArray.length == 0 && users.length == 0 && (
        <div className="flex h-screen items-center justify-center text-center text-3xl font-bold">
          cannot found something interesting
        </div>
      )}
    </>
  );
};

export default Search;
