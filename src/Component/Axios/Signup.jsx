import React from 'react'
import './AllFile.css'
import { useForm } from 'react-hook-form'

export default function Signup() {
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

                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder='UserName'
                        {...register('UserName', {
                            required: {
                                value: true,
                                message: "UserName is required"
                            }
                        })}
                    />
                    <br />
                    <span>{errors.UserName?.message}</span>
                    <br />

                    <input type="number" placeholder='Phone'  {...register('Phone', {
                        required: {
                            value: true,
                            message: "Phone no is required",
                        }
                    })} />
                    <br />
                    <span>{errors.Phone?.message}</span>
                    <br />

                    <input type="email" placeholder='Email'  {...register('email', {
                        required: {
                            value: true,
                            message: "email Name is required"
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

                    <input type="password" placeholder='Confirm Password'  {...register('Confirm', {
                        required: {
                            value: true,
                            message: "Confirm Password is required"
                        }
                    })} />
                    <br />
                    <span>{errors.Confirm?.message}</span>

                    <br />

                    <button>Sign Up</button>
                </form>

            </div>
        </div>
    )
}
