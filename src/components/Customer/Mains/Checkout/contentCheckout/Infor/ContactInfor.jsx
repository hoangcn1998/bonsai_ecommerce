import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

function ContactInfor(props) {
  const { onClick } = props;

  //kep data when skip page
  const [contact, setContact] = useState(() => {
    const getContact = JSON.parse(localStorage.getItem("contactInfor"));

    if (getContact) {
      return getContact;
    }

    return null;
  })

  const schema = yup.object().shape({
    email: yup.string().required("Please enter Email"),
    phoneNumber: yup.string().required("Please enter Phone Number"),
    alternatePhone: yup.string().required("Please enter Alternate Phone"),
  });

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmitFormContactInfor(data) {
    localStorage.setItem("contactInfor", JSON.stringify(data))
    onClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormContactInfor)} id="form-contact">
      <Controller
        name="email"
        control={control}
        defaultValue={contact ? contact.email : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
            name="email"

            error={!!errors.email}
            helperText={errors.email?.message}
          />}
      />
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue={contact ? contact.phoneNumber : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"

            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />}
      />
      <Controller
        name="alternatePhone"
        control={control}
        defaultValue={contact ? contact.alternatePhone : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"

            error={!!errors.alternatePhone}
            helperText={errors.alternatePhone?.message}
          />}
      />
    </form>
  )
};

export default ContactInfor;
