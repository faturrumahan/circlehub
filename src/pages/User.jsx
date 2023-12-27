import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading((prevLoading) => {
      !prevLoading;
    });
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
    setIsLoading((prevLoading) => {
      !prevLoading;
    });
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
        <p className="text-center">loading</p>
      )}
    </>
  );
};

export default User;
