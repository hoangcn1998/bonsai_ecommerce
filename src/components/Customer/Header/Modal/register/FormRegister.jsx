import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const password = watch("password", "");

  function onSubmit(data) {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      retypePassword,
      birthDay,
      sex,
      address,
      district,
      city,
    } = data;
    axios
      .post("http://localhost:3000/api/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
        retypePassword,
        birthDay,
        sex,
        address,
        district,
        city,
        role: "admin",
      })
      .then(function (response) {})
      .catch(function (error) {});
    reset({ example: "", exampleRequired: "" });
  }

  return (
    <form className="form form__register" onSubmit={(e) => e.preventDefault()}>
      <input
        autoComplete="on"
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true, maxLength: 10 })}
      />
      {errors.firstName && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true, maxLength: 10 })}
      />
      {errors.lastName && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
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
        autoComplete="on"
        type="text"
        placeholder="Phone"
        {...register("phone", {
          required: true,
          pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        })}
      />
      {errors.phone && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="password"
        placeholder="Password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
        })}
      />
      {errors.password?.type === "required" && (
        <span>Please enter valid data !</span>
      )}
      {errors.password?.type === "pattern" && (
        <span>least 8 characters: letter, number, special characters!</span>
      )}
      <br />

      <input
        autoComplete="on"
        type="password"
        placeholder="Retype password"
        {...register("retypePassword", {
          required: true,
          validate: (value) =>
            value === password || "The passwords do not match",
        })}
      />
      {errors.retypePassword?.type === "required" && (
        <span>Please enter valid data !</span>
      )}
      {errors.retypePassword?.type === "validate" && (
        <span>The passwords do not match! </span>
      )}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="Birth Day"
        {...register("birthDay", { required: true })}
      />
      {errors.birthDay && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="Sex"
        {...register("sex", { required: true })}
      />
      {errors.sex && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="Address"
        {...register("address", { required: true })}
      />
      {errors.address && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="District"
        {...register("district", { required: true })}
      />
      {errors.district && <span>Please enter valid data !</span>}
      <br />

      <input
        autoComplete="on"
        type="text"
        placeholder="City"
        {...register("city", { required: true })}
      />
      {errors.city && <span>Please enter valid data !</span>}
      <br />

      <button
        type="submit"
        className="button__submit"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </button>
      <br></br>
    </form>
  );
};

export default FormRegister;
