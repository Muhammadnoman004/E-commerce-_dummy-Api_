import React from 'react'
import './AllFile.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from './Auth_Services/auth.service'

export default function Login() {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const submit = async (data) => {

        try {
            const logdata = await login(data);
            console.log(logdata);
            sessionStorage.setItem("Token", logdata.token);
            navigate("/AllProducts")
        } catch (error) {
            alert(error.message)
        }

    }
    // console.log(errors);
    return (
        <div className='mainDiv'>
            <div className='childDiv'>

                <h1 id='heading'>LogIn</h1>
                <form onSubmit={handleSubmit(submit)}>

                    <input type="text" placeholder='Username'  {...register('username', {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })} />
                    <br />
                    <span>{errors.Username?.message}</span>
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
