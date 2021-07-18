
import React from "react";
import { useForm } from "react-hook-form";

const FormInformation = ({ getDataUser }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();


  function onSubmit(data) {
    const { fullname, phoneNumber, orderNotes, deleveryAddress } = data;
    const dataUser = { fullname, phoneNumber, orderNotes, deleveryAddress }
    getDataUser(dataUser)
    reset({ example: "", exampleRequired: "" });
  }


  return (
    <form className="userform" onSubmit={(e) => e.preventDefault()}>
      <h1>Billing Information</h1>
      <input
        autoComplete="on"
        type="text"
        className="form-control"
        placeholder="Full Name"
        defaultValue={''}
        {...register("fullname", { required: true, maxLength: 25 })} />
      {errors.fullname && <span>* Please enter Full Name !</span>}


      <input
        defaultValue={''}
        autoComplete="on"
        type="text"
        className="form-control"
        placeholder="Phone number"
        {...register("phoneNumber", { required: true, pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g, })} />
      {errors.phoneNumber && <span>* Please enter Phone number !</span>}


      <input
        defaultValue={''}
        autoComplete="on"
        type="text"
        className="form-control"
        placeholder="Delivery address"
        {...register("deleveryAddress", { required: true, maxLength: 50 })} />
      {errors.deleveryAddress && <span>* Please enter Delivery address !</span>}

      <textarea
        className="form-control"
        rows="5"
        placeholder="Order notes"
        {...register("orderNotes")} />


      <button type="button" className="btn btn-light" onClick={handleSubmit(onSubmit)}>
        Order
      </button>
    </form>
  );
};

export default FormInformation;







// import Button from '@material-ui/core/Button';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Stepper from '@material-ui/core/Stepper';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import React, { useState } from 'react';
// import BasicInfor from './Infor/BasicInfor';
// import ContactInfor from './Infor/ContactInfor';
// import OrderDetails from './Infor/OrderDetails';
// import Payment from './Infor/Payment';
// import PersonalInfor from './Infor/PersonalInfor';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function FormInformation() {
//   const classes = useStyles();
//   const steps = getSteps();

//   const [activeStep, setActiveStep] = useState(0);
//   const [refresh, setRefresh] = useState(0)

//   function getSteps() {
//     return ["Basic Information", "Contact Information", "Personal Information", "Payment"];
//   }

//   function getStepContent(step) {
//     switch (step) {
//       case 0:
//         return <React.Fragment> <BasicInfor onClick={handleNext} /> </React.Fragment>
//       case 1:
//         return <React.Fragment> <ContactInfor onClick={handleNext} /> </React.Fragment>
//       case 2:
//         return <React.Fragment> <PersonalInfor onClick={handleNext} /> </React.Fragment>
//       default:
//         return <React.Fragment> <Payment onClick={handleNext} /> </React.Fragment>;
//     }
//   }

//   const handleNext = () => {
//     setRefresh(prev => prev + 1)
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             {/* <Typography className={classes.instructions}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button> */}
//             <OrderDetails />
//           </div>
//         ) : (
//           <div>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//                 Back
//               </Button>
//               {activeStep === 0 ?
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   form="my-form"
//                   type="submit"
//                   className={classes.button}>
//                   Next
//                 </Button> :
//                 activeStep === 1 ?
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     form="form-contact"
//                     type="submit"
//                     className={classes.button}>
//                     Next
//                   </Button> :
//                   activeStep === 2 ?
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       form="form-personal"
//                       type="submit"
//                       className={classes.button}>
//                       Next
//                     </Button> :
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       type="submit"
//                       form="form-payment"
//                       className={classes.button}>
//                       Finish
//                     </Button>}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormInformation;
