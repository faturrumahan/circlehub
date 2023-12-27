import { useRef } from "react";

const InputCommentForm = ({ users, id, postId }) => {
  const comment = useRef();

  const commentSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredComment = comment.current.value;

    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: enteredComment,
          postId: postId,
          userId: id,
        }),
      });
      if (response.ok) {
        alert("Your Comment Succesfully Submit");
        comment.current.value = null;
      } else {
        alert("Your Comment Failed to Submit");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex h-fit w-full space-x-2 rounded-md border-2 border-slate-500 bg-slate-800 p-4">
      {users.map(
        (user) =>
          user.id == id && (
            <div className="w-12 rounded-full bg-white" key={user.id}>
              <img
                src={user.image}
                alt={user.firstName}
                className="h-full w-full rounded-full object-cover"
              ></img>
            </div>
          ),
      )}
      <div className="flex w-full items-center">
        <form onSubmit={commentSubmitHandler} className="w-full">
          <div className="flex w-full space-x-2">
            <input
              type="text"
              ref={comment}
              required
              className="w-full rounded-full p-2 outline-none"
              placeholder="what do you think?..."
            ></input>
            <button type="submit" className="w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputCommentForm;
