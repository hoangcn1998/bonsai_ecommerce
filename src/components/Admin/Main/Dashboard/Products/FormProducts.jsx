import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import url from "../../../../../urlApi";

const FormProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const {
      CategoriesId,
      ProductsName,
      ProductsPrice,
      ProductsSale,
      BigPicture,
      ThumbnailUrl1,
      ThumbnailUrl2,
      ThumbnailUrl3,
      ThumbnailUrl4,
      Description,
    } = data;

    axios
      .post(`${url}products`, {
        categoryId: CategoriesId,
        name: ProductsName,
        price: ProductsPrice,
        sale: ProductsSale,
        bigPicture: BigPicture,
        thumbnailUrl: [
          ThumbnailUrl1,
          ThumbnailUrl2,
          ThumbnailUrl3,
          ThumbnailUrl4,
        ],
        description: Description,
        rating: {},
      })
      .then(function (response) {})
      .catch(function (error) {});

    reset({ example: "", exampleRequired: "" });
  }
  return (
    <form className="form__products--add" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Categories Id"
        {...register("CategoriesId", { required: true })}
      />
      {errors.CategoriesId && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Products Name"
        {...register("ProductsName", { required: true })}
      />
      {errors.ProductsName && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Products Price"
        {...register("ProductsPrice", { required: true })}
      />
      {errors.ProductsPrice && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Products Sale(value to 0 from 1)"
        {...register("ProductsSale", { required: true })}
      />
      {errors.ProductsSale && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Big picture"
        {...register("BigPicture", { required: true })}
      />
      {errors.BigPicture && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(1) "
        {...register("ThumbnailUrl1", { required: true })}
      />
      {errors.ThumbnailUrl1 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(2) "
        {...register("ThumbnailUrl2", { required: true })}
      />
      {errors.ThumbnailUrl2 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(3) "
        {...register("ThumbnailUrl3", { required: true })}
      />
      {errors.ThumbnailUrl3 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(4) "
        {...register("ThumbnailUrl4", { required: true })}
      />
      {errors.ThumbnailUrl4 && <span> * Please enter valid data !</span>}
      <br />

      <textarea
        rows="5"
        placeholder="description"
        {...register("Description", { required: true })}
      />
      {errors.Description && <span> * Please enter valid data !</span>}
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

export default FormProducts;
