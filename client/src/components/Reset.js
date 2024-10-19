import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import avatar from '../assets/user.png'; // Import avatar
import { Toaster } from 'react-hot-toast'; // Import Toaster
import { useFormik } from 'formik'; // Import useFormik
import { resetPasswordValidation } from '../helper/validate'; // Import passwordValidate

import styles from '../styles/Username.module.css'; // Import css

export default function Reset() {
    const formik = useFormik({
        initialValues: {
            password: 'admin@123',
            confirm_pwd: 'admin@123'
        },
        validate: resetPasswordValidation,
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
                <div className={styles.glass} style={{width : "50%"}}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Reset</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter new password  
                        </span>
                    </div>

                    <form className="py-20" onSubmit={formik.handleSubmit}>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} // Updated field name to password
                                className={styles.textbox}
                                type="password" // Changed type to password
                                placeholder="New password" // Updated placeholder text
                            />
                             <input {...formik.getFieldProps('confirm_pwd')} // Updated field name to password
                                className={styles.textbox}
                                type="password" // Changed type to password
                                placeholder="Repeat password" // Updated placeholder text
                            />
                            <button className={styles.btn} type="submit">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
