import React from "react";
import { json, redirect, useRouteLoaderData, Navigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Authentication = () => {
  const token = useRouteLoaderData("isAuth");
  return token ? <Navigate to="/" /> : <AuthForm />;
};

export default Authentication;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  if (!response.ok) {
    return response;
  }

  const resData = await response.json();

  localStorage.setItem("token", resData.token);
  localStorage.setItem("id", resData.id);

  return redirect("/");
}
