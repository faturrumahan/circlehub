import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserCardSkeleton from "../components/UserCardSkeleton";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .then(
        setIsLoading((prevLoading) => {
          !prevLoading;
        }),
      );
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-5">
          {users.map((user) => (
            <div key={user.username}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-5">
          <UserCardSkeleton cards={20} />
        </div>
      )}
    </>
  );
};

export default User;
