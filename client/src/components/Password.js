import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import avatar from '../assets/user.png'; // Import avatar
import { Toaster } from 'react-hot-toast'; // Import Toaster
import { useFormik } from 'formik'; // Import useFormik
import { passwordValidate } from '../helper/validate'; // Import passwordValidate

import styles from '../styles/Username.module.css'; // Import css

export default function Password() {
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
                        <h4 className="text-5xl font-bold">Hello Again!</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Explore More by connecting with us.
                        </span>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={avatar} className={styles.profile_img} alt="avatar" /> {/* Reduced image size */}
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input
                                {...formik.getFieldProps('password')} // Updated field name to password
                                className={styles.textbox}
                                type="password" // Changed type to password
                                placeholder="password" // Updated placeholder text
                            />
                            <button className={styles.btn} type="submit">Sign In</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Forgot Password? <Link className="text-red-500" to="/recovery">Recover Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
