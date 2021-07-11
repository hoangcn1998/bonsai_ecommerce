import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const FormCategories = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data.CategoriesName);

    axios
      .post("http://localhost:3000/api/categories", {
        name: data.CategoriesName,
      })
      .then(function (response) {})
      .catch(function (error) {});

    reset({ example: "", exampleRequired: "" });
  }

  return (
    <form className="form__category--add" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Categories Name"
        {...register("CategoriesName", { required: true })}
      />
      {errors.CategoriesName && <span> * Please enter valid data !</span>}
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </form>
  );
};

export default FormCategories;