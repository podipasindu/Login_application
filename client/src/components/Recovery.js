import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import avatar from '../assets/user.png'; // Import avatar
import { Toaster } from 'react-hot-toast'; // Import Toaster
import { useFormik } from 'formik'; // Import useFormik
import { passwordValidate } from '../helper/validate'; // Import passwordValidate

import styles from '../styles/Username.module.css'; // Import css

export default function Recovery() {
    const formik = useFormik({
        initialValues: {
            password: '', // Changed from username to password
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    });

    return (
        <div className="container mx-auto">
            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Recovery</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter OTP to recover password.
                        </span>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="input text-center">
                                <span className='py-4 text-sm text-left text-gray-500'>
                                    Enter 6 digit OTP sent to your email address.
                                </span>
                                <input
                            
                                    className={styles.textbox}
                                    type="text" // Changed type to password
                                    placeholder="OTP" // Updated placeholder text
                                />
                            </div> {/* Added missing closing div here */}
                            <button className={styles.btn} type="submit">Sign In</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Can't get OTP? <button className="text-red-500">Resend</button></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
