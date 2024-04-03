import React from 'react'
import './AllFile.css'
import { useForm } from 'react-hook-form'

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const submit = (data) => {
        if (data.password === data.Confirm) {
            console.log("Same hai!");
            console.log("data ==>", data);
        }
        else {
            alert('Please Confirm Password!')
        }
    }
    console.log(errors);
    return (
        <div className='mainDiv'>
            <div className='childDiv'>

                <h1 id='heading'>LogIn</h1>
                <form onSubmit={handleSubmit(submit)}>

                    <input type="email" placeholder='Email'  {...register('email', {
                        required: {
                            value: true,
                            message: "Email is required"
                        }
                    })} />
                    <br />
                    <span>{errors.email?.message}</span>
                    <br />

                    <input type="password" placeholder='Password'  {...register('password', {
                        required: {
                            value: true,
                            message: "Password is required"
                        }
                    })} />
                    <br />
                    <span>{errors.password?.message}</span>
                    <br />

                    <button>LogIn</button>
                </form>

            </div>
        </div>
    )
}
