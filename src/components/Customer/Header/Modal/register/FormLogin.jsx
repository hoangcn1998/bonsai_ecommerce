// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

// const FormLogin = (props) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const history = useHistory();

//   function onSubmitLogin(data) {
//     axios
//       .post("http://localhost:5000/login", { data })
//       .then((res) => {
//         if (res.data.status) {
//           localStorage.setItem("token", res.data.accessToken);
//           localStorage.setItem("statusLogin", true);
//           history.push("/admin");
//         } else {
//           toast.error(res.data.message, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       })
//       .catch((error) => console.log(error));
//   }

//   return (
//     <React.Fragment>
//       <ToastContainer />

//       <form className="form form__login" onSubmit={handleSubmit(onSubmitLogin)}>
//         <input
//           type="text"
//           placeholder="Email"
//           {...register("email", {
//             required: true,
//             pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
//           })}
//         />
//         {errors.email && <span>Please enter valid data !</span>}
//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: true })}
//         />
//         {errors.password && <span>Please enter valid data !</span>}
//         <br />

//         <button type="submit" className="button__submit">
//           Login
//         </button>
//         <br />
//       </form>
//     </React.Fragment>
//   );
// };

// export default FormLogin;

import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import {
  Link,
  Redirect,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const FormLogin = () => {
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

  const onSubmit = async (data) => {
    try {
      const {
        data: { accessToken },
      } = await axios.post("http://localhost:3000/api/signin", data);
      console.log(data);
      const userInfo = jwt_decode(accessToken);
      const { sub } = userInfo || {};
      const res = await axios.get(`http://localhost:3000/api/users/${sub}`);
      const user = res.data;
      const { role, email } = user || {};
      checkNavigate(role);
      localStorage.setItem("statusLogin", "true");
      reset({ example: "", exampleRequired: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form form__login" onSubmit={handleSubmit(onSubmit)}>
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
