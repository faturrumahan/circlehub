export const fetchPosts = async () => {
  const response = await fetch(`https://dummyjson.com/posts?limit=0`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return resData.posts;
};

export const fetchUsers = async () => {
  const response = await fetch(`https://dummyjson.com/users?limit=0`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return resData.users;
};
