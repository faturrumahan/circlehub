import { json, redirect, useRouteLoaderData, Navigate } from "react-router-dom";
import RegistForm from "../components/RegistForm";

const Register = () => {
  const token = useRouteLoaderData("isAuth");
  return token ? <Navigate to="/" /> : <RegistForm />;
};

export default Register;

export async function action({ request }) {
  const data = await request.formData();
  const registData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    username: data.get("username"),
    password: data.get("password"),
  };

  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registData),
  });

  if (!response.ok) {
    return response;
  }

  if (response.ok) {
    alert("Your account successfully registered");
  }

  return redirect("/auth");
}
