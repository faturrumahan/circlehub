import React from "react";
import { Link } from "react-router-dom";

const CommentCard = ({ comment, users }) => {
  return (
    <div className="h-fit w-full rounded-md border-2 border-slate-500 bg-slate-800 p-4">
      {users.map(
        (users) =>
          comment.user.id == users.id && (
            <div className="flex space-x-2" key={users.id}>
              <div className="h-12 w-12 rounded-full bg-white">
                <img
                  src={users.image}
                  alt={users.firstName}
                  className="h-full w-full rounded-full object-cover"
                ></img>
              </div>
              <div className="w-3/4 lg:w-full">
                <Link
                  to={`/users/${comment.user.id}`}
                  className="font-bold underline-offset-4 hover:underline"
                >
                  @{comment.user.username}
                </Link>
                <p>{comment.body}</p>
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default CommentCard;
