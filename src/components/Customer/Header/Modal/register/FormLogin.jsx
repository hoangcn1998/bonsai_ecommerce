import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/signin", data)
      .then((res) => {
        const accessToken = res.data.accessToken;
        const user = jwt_decode(accessToken);
        console.log(user);
        axios
          .get(`http://localhost:3000/api/users/${user.sub}`)
          .then((res) => {
            const user = res.data;
            console.log(`get user by id`, user);
            console.log("user role", user.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    reset({ example: "", exampleRequired: "" });
  };

  return (
    <form className="form form__login" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      {errors.email && <span>Please enter valid data !</span>}
      <br />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Please enter valid data !</span>}
      <br />

      <button type="submit" className="button__submit">
        Login
      </button>
      <br />
    </form>
  );
};

export default FormLogin;
