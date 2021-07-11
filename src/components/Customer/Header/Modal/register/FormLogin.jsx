import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const FormLogin = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  function onSubmitLogin(data) {
    axios.post("http://localhost:5000/login", { data })
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("statusLogin", true);
          history.push("/admin");
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
      .catch(error => console.log(error));
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
