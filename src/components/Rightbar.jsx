import { useState, useEffect } from "react";
import { Link, Form } from "react-router-dom";

const Rightbar = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [loginUser, setLoginUser] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setLoginUser(data));
    }
  }, []);

  return (
    <>
      {id ? (
        <>
          <h3 className="hidden text-3xl font-bold lg:block">Welcome Back</h3>
          <div className="my-3 flex w-full items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-white">
              <img
                src={loginUser.image}
                alt={loginUser.firstName}
                className="h-full w-full rounded-full object-cover"
              ></img>
            </div>
            <div className="flex w-full justify-between lg:block lg:w-auto">
              <Link to={`/users/${loginUser.id}`}>
                <p>
                  <span className="font-bold">{loginUser.firstName}</span>{" "}
                  {loginUser.lastName}
                </p>
                <p className="font-thin underline-offset-1 hover:underline">
                  @{loginUser.username}
                </p>
              </Link>
              <div className="lg:hidden">
                <Form action="/logout" method="post">
                  <button className="h-fit w-full rounded-full bg-blue-600 px-5 py-2 text-center">
                    Logout
                  </button>
                </Form>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:flex">
            <Link
              to={`/users/${id}`}
              className="h-fit w-1/2 rounded-full bg-blue-600 px-5 py-2 text-center hover:bg-blue-700"
            >
              Visit
            </Link>
            <Form action="/logout" method="post" className="w-1/2">
              <button className="h-fit w-full rounded-full bg-blue-600 px-5 py-2 text-center hover:bg-blue-700">
                Logout
              </button>
            </Form>
          </div>
        </>
      ) : (
        <>
          <h3 className="hidden text-3xl font-bold lg:block">
            Want to explore more? Join our membership now
          </h3>
          <div className="grid grid-cols-2 gap-2 p-2 lg:mt-3 lg:p-0">
            <Link
              className="h-fit w-full rounded-md bg-blue-600 px-5 py-2 text-center hover:bg-blue-700 lg:rounded-full"
              to="/auth/register"
            >
              Register
            </Link>
            <Link
              className="h-fit w-full rounded-md bg-blue-600 px-5 py-2 text-center hover:bg-blue-700 lg:rounded-full"
              to="/auth"
            >
              Login
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Rightbar;
