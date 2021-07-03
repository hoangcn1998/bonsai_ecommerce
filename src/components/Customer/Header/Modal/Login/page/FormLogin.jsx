import React from 'react';
import { useForm } from "react-hook-form";

const FormLogin = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset({ example: "", exampleRequired: "" });
    };

    return (
        <form className="form form__login"
         onSubmit={handleSubmit(onSubmit)}
         >
            <input type="text" placeholder="Phone number" 
                {...register( 'PhoneNumber', {required: true, pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g })}
            />
            {errors.PhoneNumber && <span>Please enter valid data !</span>}<br/>

            <input type="password" placeholder="Password" 
                {...register( 'Password', {required: true})}
            />
            {errors.Password && <span>Please enter valid data !</span>}<br/>

            <button type="submit" className="button__submit">Login</button><br/>
        </form>
    );
};

export default FormLogin;
