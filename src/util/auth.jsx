import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const getUserLoginId = () => {
  const id = localStorage.getItem("id");
  return id;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const idLoader = () => {
  return getUserLoginId();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
