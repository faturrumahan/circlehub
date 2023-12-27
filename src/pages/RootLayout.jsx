import React from "react";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import { getAuthToken, getUserLoginId } from "../util/auth";

const RootLayout = () => {
  // const id = getUserLoginId();
  const id = useRouteLoaderData("root");

  return (
    <div className="container relative mx-auto min-h-screen w-full lg:flex lg:flex-wrap">
      <aside className="sticky top-0 max-h-screen lg:w-1/6 ">
        <div className="h-full">
          <Sidebar id={id} />
        </div>
      </aside>
      <main className="min-h-screen w-full lg:w-2/3 lg:border-x">
        <div className="h-full w-full p-4">
          <Outlet />
        </div>
      </main>
      <aside className="sticky bottom-0 max-h-screen bg-[#242424] bg-opacity-[0.98] lg:top-0 lg:w-1/6 lg:bg-transparent">
        <div className="h-full px-2 py-0.5 lg:p-4">
          <Rightbar id={id} />
        </div>
      </aside>
    </div>
  );
};

export default RootLayout;
