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

  const password = watch("Password", "");

  function onSubmit(data) {
    const {
      FirstName,
      LastName,
      Email,
      Phone,
      Password,
      RetypePassword,
      BirthDay,
      Sex,
      Address,
      District,
      City,
    } = data;
    axios
      .post("http://localhost:3000/api/users", {
        FirstName,
        LastName,
        Email,
        Phone,
        Password,
        RetypePassword,
        BirthDay,
        Sex,
        Address,
        District,
        City,
        role: 'user'
      })
      .then(function (response) {})
      .catch(function (error) {});
    reset({ example: "", exampleRequired: "" });
  }

  return (
    <form className="form form__register" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="First Name"
        {...register("FirstName", { required: true, maxLength: 10 })}
      />
      {errors.FirstName && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Last Name"
        {...register("LastName", { required: true, maxLength: 10 })}
      />
      {errors.LastName && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Email"
        {...register("Email", {
          required: true,
          pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      {errors.Email && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Phone"
        {...register("Phone", {
          required: true,
          pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        })}
      />
      {errors.Phone && <span>Please enter valid data !</span>}
      <br />

      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: true,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
        })}
      />
      {errors.Password?.type === "required" && (
        <span>Please enter valid data !</span>
      )}
      {errors.Password?.type === "pattern" && (
        <span>least 8 characters: letter, number, special characters!</span>
      )}
      <br />

      <input
        type="password"
        placeholder="Retype Password"
        {...register("RetypePassword", {
          required: true,
          validate: (value) =>
            value === password || "The passwords do not match",
        })}
      />
      {errors.RetypePassword?.type === "required" && (
        <span>Please enter valid data !</span>
      )}
      {errors.RetypePassword?.type === "validate" && (
        <span>The passwords do not match! </span>
      )}
      <br />

      <input
        type="text"
        placeholder="Birth Day"
        {...register("BirthDay", { required: true })}
      />
      {errors.BirthDay && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Sex"
        {...register("Sex", { required: true })}
      />
      {errors.Sex && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Address"
        {...register("Address", { required: true })}
      />
      {errors.Address && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="District"
        {...register("District", { required: true })}
      />
      {errors.District && <span>Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="City"
        {...register("City", { required: true })}
      />
      {errors.City && <span>Please enter valid data !</span>}
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
