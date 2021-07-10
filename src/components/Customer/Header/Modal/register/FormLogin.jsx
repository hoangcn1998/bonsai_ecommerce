import React from "react";
import { useForm } from "react-hook-form";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitLogin(e) {
    e.preventDefault();

    alert("asdf");
  }

  return (
    <form className="form form__login" onSubmit={handleSubmit(onSubmitLogin)}>
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
