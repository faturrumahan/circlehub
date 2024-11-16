/* eslint-disable react/prop-types */
import { useRouteLoaderData, Link } from "react-router-dom";

const PostCard = ({ post, user }) => {
  const id = useRouteLoaderData("root");

  const likePostRequestHandler = async (postId, resCount, postAuthor) => {
    const newResCount = resCount + 1;
    try {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reactions: newResCount,
        }),
      });
      if (response.ok) {
        alert(`You Like ${postAuthor} Post`);
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteRequestHandler = async (deletedPostId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/posts/${deletedPostId}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        alert("Your Post Already Deleted");
        window.location.reload();
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="mb-3 h-fit w-full rounded-md border-2 border-slate-500 bg-slate-800 p-4">
      <div className="flex w-fit space-x-4">
        <div className="h-10 w-10 rounded-full bg-white">
          <img
            src={user.image}
            alt={user.firstName}
            className="h-full w-full rounded-full object-cover"
          ></img>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <h5 className="text-slate-400">
                by{" "}
                <Link
                  to={`/users/${user.id}`}
                  className="text-md italic underline-offset-1 hover:underline"
                >
                  {user.firstName} {user.lastName}
                </Link>
              </h5>
            </div>
            {id == user.id && (
              <div>
                <button onClick={() => deleteRequestHandler(post.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <p>{post.body}</p>
          <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
          <div className="grid grid-cols-3 gap-2 text-center">
            <button
              className="flex w-full justify-center space-x-2 rounded-md py-3 hover:bg-slate-700"
              onClick={() =>
                likePostRequestHandler(
                  post.id,
                  post.reactions.likes,
                  user.firstName,
                )
              }
              disabled={!id ? true : false}
            >
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
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              <p className="hidden lg:block">{post.reactions.likes} Like</p>
            </button>
            <Link
              to={`/post/${post.id}`}
              className="flex w-full justify-center space-x-2 rounded-md py-3 hover:bg-slate-700"
            >
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
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              <p className="hidden lg:block">Comment</p>
            </Link>
            <button
              className="flex w-full justify-center space-x-2 rounded-md py-3 hover:bg-slate-700"
              onClick={() =>
                // navigator.clipboard.writeText(window.location.href)
                navigator.clipboard
                  .writeText(`127.0.0.1:5173/post/${post.id}`)
                  .then(alert("link copied to clipboard"))
              }
            >
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
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              <p className="hidden lg:block">Share</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
