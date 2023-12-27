export const fetchPosts = async (skip) => {
  const response = await fetch(
    // `https://dummyjson.com/posts?limit=10&skip=${skip}`,
    `https://dummyjson.com/posts?limit=0`,
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return resData.posts;
};
