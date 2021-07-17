import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

function BasicInfor(props) {
  const { onClick } = props;

  // keep value when next form
  const [data, setData] = useState(() => {
    const getData = JSON.parse(localStorage.getItem("basicInfor"));
    if (getData) {
      return getData;
    }
    return null;
  })

  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter First Name"),
    lastName: yup.string().required("Please enter Last Name"),
    nickName: yup.string().required("Please enter Nick Name"),
  });

  const { handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmitFormBasicInfor(data) {
    console.log(data);
    localStorage.setItem("basicInfor", JSON.stringify(data))
    onClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormBasicInfor)} id="my-form" >
      <Controller
        name="firstName"
        control={control}
        defaultValue={data ? data.firstName : ""}
        render={({ field }) =>
          <TextField {...field}
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue={data ? data.lastName : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"

            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />}
      />
      <Controller
        name="nickName"
        control={control}
        defaultValue={data ? data.nickName : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"

            error={!!errors.nickName}
            helperText={errors.nickName?.message}
          />}
      />
    </form>
  )
};

export default BasicInfor;
