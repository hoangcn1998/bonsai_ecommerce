import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const FormLogin = ({ onCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const history = useHistory();

  const checkNavigate = (role) => {
    if (role === "admin") {
      history.push("/admin");
    } else {
      history.push("/");
    }
  };

  function onSubmitLogin(data) {
    axios
      .post("http://localhost:5000/api/login", data)
      .then((res) => {
        const {
          data: { status, accessToken },
        } = res || {};
        if (status) {
          localStorage.setItem("token", accessToken);
          localStorage.setItem("statusLogin", true);
          const userInfo = jwt_decode(accessToken);
          const { role = "user" } = userInfo;
          checkNavigate(role);
          onCloseModal();
        } else {
          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => console.log(error));
    reset({ example: "", exampleRequired: "" });
  }

  return (
    <React.Fragment>
      <ToastContainer />

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
    </React.Fragment>
  );
};

export default FormLogin;
