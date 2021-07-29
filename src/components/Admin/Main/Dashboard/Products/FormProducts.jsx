import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import url from "../../../../../urlApi";

const FormProducts = ({ onChangeTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const patternUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

  const categoryId = (CategoriesName) => {
    switch (CategoriesName) {
      case "Cactus":
          return 1
        break;
      case "Succulent":
        return 2
        break;
      case "Flower":
        return 3
        break;
      case "Feng Shui Tree":
        return 4
        break;
    
      default:
        break;
    }
  }

  function onSubmit(data) {
    const {
      CategoriesName,
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
        categoryId: categoryId(CategoriesName),
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
      .then(function (response) {
        onChangeTab('1')
      })
      .catch(function (error) {});

    reset({ example: "", exampleRequired: "" });
  }
  return (
    <form className="form__products--add" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Categories Name"
        {...register("CategoriesName", { required: true })}
      />
      {errors.CategoriesName && <span> * Please enter valid data !</span>}
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
        {...register("ProductsPrice", { required: true, pattern: /[0-9]+(\\.[0-9][0-9]?)?/g })}
      />
      {errors.ProductsPrice && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Products Sale(value to 0 from 1)"
        {...register("ProductsSale", { required: true, pattern: /[0-9]+(\\.[0-9][0-9]?)?/g })}
      />
      {errors.ProductsSale && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="Big picture"
        {...register("BigPicture", { required: true, pattern: patternUrl  })}
      />
      {errors.BigPicture && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(1) "
        {...register("ThumbnailUrl1", { required: true, pattern: patternUrl })}
      />
      {errors.ThumbnailUrl1 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(2) "
        {...register("ThumbnailUrl2", { required: true, pattern: patternUrl })}
      />
      {errors.ThumbnailUrl2 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(3) "
        {...register("ThumbnailUrl3", { required: true, pattern: patternUrl })}
      />
      {errors.ThumbnailUrl3 && <span> * Please enter valid data !</span>}
      <br />

      <input
        type="text"
        placeholder="thumbnail Url(4) "
        {...register("ThumbnailUrl4", { required: true, pattern: patternUrl })}
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
