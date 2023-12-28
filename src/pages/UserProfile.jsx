import { useState, useEffect, useRef } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import UserProfileSkeleton from "../components/UserProfileSkeleton";

const UserProfile = () => {
  const { userId } = useParams();
  const id = useRouteLoaderData("root");
  const token = useRouteLoaderData("tokenProfile");
  const [userProfile, setUserProfile] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);
  const title = useRef();
  const body = useRef();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserProfile(data))
      .then(setProfileLoading(false));
  }, [userId]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setUserPosts(data.posts))
      .then(setIsLoading(false));
  }, [userId]);

  const postSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredTitle = title.current.value;
    const enteredBody = body.current.value;

    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: enteredTitle,
          body: enteredBody,
          userId: id,
        }),
      });
      if (response.ok) {
        alert("Your Submit Succesfully Posted");
        title.current.value = null;
        body.current.value = null;
      } else {
        alert("Your Submit Failed");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {!profileLoading ? (
        <div className="mb-5 flex w-full flex-wrap lg:h-32 lg:justify-between">
          <div className="flex space-x-5">
            <div className="h-32 w-32 rounded-full border-4 border-blue-500 bg-white">
              <img
                src={userProfile.image}
                alt={userProfile.firstName}
                className="h-full w-full rounded-full object-cover"
              ></img>
            </div>
            <div className="flex h-full items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  {userProfile.firstName} {userProfile.lastName}
                </h2>
                <h5 className="font-light italic">@{userProfile.username}</h5>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col space-y-1 lg:mt-0 lg:items-end lg:justify-center">
            <>
              {userProfile.company && (
                <div className="flex flex-row-reverse justify-end lg:flex-row lg:space-x-2">
                  <p className="ml-1 lg:ml-0">
                    {userProfile.company.title} at {userProfile.company.name}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
              )}
              <div className="flex flex-row-reverse justify-end lg:flex-row lg:space-x-2">
                <p className="ml-1 lg:ml-0">{userProfile.university}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              {userProfile.address && (
                <div className="flex flex-row-reverse justify-end lg:flex-row lg:space-x-2">
                  <p className="ml-1 lg:ml-0">
                    {userProfile.address.city}, {userProfile.address.state}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
              )}
              <div className="flex flex-row-reverse justify-end lg:flex-row lg:space-x-2">
                <p className="ml-1 lg:ml-0">{userProfile.birthDate}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                  />
                </svg>
              </div>
            </>
          </div>
        </div>
      ) : (
        <UserProfileSkeleton />
      )}
      {id == userProfile.id && (
        <form
          className="my-5 w-full text-gray-300"
          autoComplete="off"
          onSubmit={postSubmitHandler}
        >
          <div className="w-full">
            <input
              className="w-full bg-transparent p-3 outline-none"
              type="text"
              id="title"
              name="title"
              placeholder="Your Story Title"
              ref={title}
            ></input>
          </div>
          <hr className="border-px border-slate-500"></hr>
          <div className="w-full">
            <textarea
              className="h-32 w-full bg-transparent p-3 outline-none"
              id="body"
              name="body"
              placeholder="Tell us something about your story"
              ref={body}
            ></textarea>
          </div>
          <div className="flex w-full justify-end">
            <button className="w-fit rounded-full bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
              Post
            </button>
          </div>
        </form>
      )}
      {!isLoading ? (
        <>
          {userPosts.length <= 0 && !isLoading ? (
            <div className="flex w-full items-center justify-center">
              <p className="w-full text-center text-3xl font-bold">
                This Account Is Not Post Anything Yet
              </p>
            </div>
          ) : (
            userPosts.map((post, index) => (
              <div key={index}>
                <PostCard post={post} user={userProfile} />
              </div>
            ))
          )}
        </>
      ) : (
        <PostCardSkeleton cards={4} />
      )}
    </>
  );
};

export default UserProfile;
