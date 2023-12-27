import { useParams, useRouteLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCard from "../components/CommentCard";
import InputCommentForm from "../components/InputCommentForm";

const Post = () => {
  const { postId } = useParams();
  const id = useRouteLoaderData("root");
  const token = useRouteLoaderData("tokenLogin");
  const [users, setUsers] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPostDetails(data));
  }, [postId]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setPostComments(data.comments));
  }, [postId]);

  return (
    <>
      {users.map(
        (user) =>
          user.id == postDetails.userId && (
            <div className="flex items-center space-x-2" key={user.id}>
              <div className="h-12 w-12 rounded-full bg-white">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="h-full w-full rounded-full object-cover"
                ></img>
              </div>
              <div>
                <p>
                  <span className="font-bold">{user.firstName}</span>{" "}
                  {user.lastName}
                </p>
                <Link
                  to={`/users/${user.id}`}
                  className="font-light italic underline-offset-1 hover:underline"
                >
                  @{user.username}
                </Link>
              </div>
            </div>
          ),
      )}
      <div className="mt-3 flex w-full space-x-2">
        <div className="w-12 text-sm">
          <button
            className="flex w-full flex-wrap justify-center space-y-1 rounded-md py-3 hover:bg-slate-700"
            // onClick={() =>
            //   likePostRequestHandler(post.id, post.reactions, user.firstName)
            // }
            disabled={!id ? true : false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
            <p className="hidden lg:block">{postDetails.reactions} Like</p>
          </button>
          <button
            className="flex w-full flex-wrap justify-center space-y-2 rounded-md py-3 hover:bg-slate-700"
            onClick={() =>
              navigator.clipboard
                .writeText(`127.0.0.1:5173/post/${postDetails.id}`)
                .then(alert("link copied to clipboard"))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
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
        <div className="w-full">
          <div>
            <p className="font-thin italic leading-none">Title :</p>
            <h2 className="text-2xl font-bold">{postDetails.title}</h2>
          </div>
          <div className="mt-2">
            <p className="font-thin italic leading-none">Story :</p>
            <p>{postDetails.body}</p>
          </div>
          <div className="mt-3">
            {postComments.map((comment) => (
              <div key={comment.id} className="mb-3">
                <CommentCard comment={comment} users={users} />
              </div>
            ))}
          </div>
          {token && (
            <div className="mt-3">
              <InputCommentForm users={users} id={id} postId={postId} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
