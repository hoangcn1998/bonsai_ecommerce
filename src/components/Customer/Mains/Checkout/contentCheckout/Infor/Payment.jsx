import React, { useState } from "react";
import 'date-fns';
import { TextField } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const d = new Date();

function Payment(props) {
  const { onClick } = props;

  const [selectedDate, setSelectedDate] = React.useState(d);

  // keep data when back page
  const [payment, setPayment] = useState(() => {
    const getPayment = JSON.parse(localStorage.getItem("paymentInfor"));

    if (getPayment) {
      return getPayment;
    }

    return null;
  })

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const schema = yup.object().shape({
    cardNumber: yup.string().required("Please enter Card Number"),
    nameCard: yup.string().required("Please enter Name Card"),
  });

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmitFormPayment(data) {
    localStorage.setItem("paymentInfor", JSON.stringify(data));
    onClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormPayment)} id="form-payment">
      <Controller
        name="cardNumber"
        control={control}
        defaultValue={payment ? payment.cardNumber : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Credit Card Number"
            variant="outlined"
            placeholder="Credit Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"

            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          fullWidth
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <Controller
        name="nameCard"
        control={control}
        defaultValue={payment ? payment.nameCard : ""}
        render={({ field }) =>
          <TextField {...field}
            label="Name On Credit Cart"
            variant="outlined"
            placeholder="Enter Your Name On Credit cart"
            fullWidth
            margin="normal"
            name="nameCard"

            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />}
      />
    </form>
  )
};

export default Payment;
