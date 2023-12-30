import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchUsers } from "../http";
import UserCard from "../components/UserCard";
import UserCardSkeleton from "../components/UserCardSkeleton";

const User = () => {
  const { isFetching, error, fetchedData } = useFetch(fetchUsers);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isFetching);
    setUsers(fetchedData);
  }, [fetchedData, isFetching]);

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
          <UserCardSkeleton cards={45} />
        </div>
      )}
    </>
  );
};

export default User;
