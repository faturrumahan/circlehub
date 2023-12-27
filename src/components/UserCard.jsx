import React from "react";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <NavLink
      to={`/users/${user.id}`}
      key={user.id}
      className="flex h-fit w-full flex-col flex-wrap items-center justify-center rounded-lg bg-slate-900 p-2 hover:bg-slate-800"
    >
      <div className="h-10 w-10 rounded-full bg-white">
        <img
          src={user.image}
          alt={user.firstName}
          className="h-full w-full rounded-full object-cover"
        ></img>
      </div>
      <div className="mt-2 flex space-x-1 text-center">
        <div>{user.firstName}</div>
        <div className="hidden lg:block">{user.lastName}</div>
      </div>
    </NavLink>
  );
};

export default UserCard;
