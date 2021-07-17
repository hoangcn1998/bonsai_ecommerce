import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function PersonalInfor(props) {
  const { onClick } = props;

  //keep value when back page
  const [personal, setPersonal] = useState(() => {
    const getValuePersonal = JSON.parse(localStorage.getItem("personalInfor"));

    if (getValuePersonal) {
      return getValuePersonal;
    }

    return null;
  })

  const schema = yup.object().shape({
    address1: yup.string().required("Please enter Address 1"),
    address2: yup.string().required("Please enter Address 2"),
    country: yup.string().required("Please enter Country"),
  });

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmitFormPersonal(data) {
    localStorage.setItem("personalInfor", JSON.stringify(data))
    onClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormPersonal)} id="form-personal">
      <Controller
        name="address1"
        control={control}
        defaultValue={personal ? personal.address1 : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"

            error={!!errors.address1}
            helperText={errors.address1?.message}
          />}
      />
      <Controller
        name="address2"
        control={control}
        defaultValue={personal ? personal.address2 : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"

            error={!!errors.address2}
            helperText={errors.address2?.message}
          />}
      />
      <Controller
        name="country"
        control={control}
        defaultValue={personal ? personal.country : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Country "
            variant="outlined"
            placeholder="Enter Your Country"
            fullWidth
            margin="normal"
            name="firstName"

            error={!!errors.country}
            helperText={errors.country?.message}
          />}
      />
    </form>
  )
};

export default PersonalInfor;
