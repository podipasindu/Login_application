import toast from "react-hot-toast";




/** validate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}


/** validate reset password */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist= toast.error("Passwords do not match...!");
    }
    return errors;
}







/** validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}




/** validate password */
function passwordVerify(error = {}, values) {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    
    // Flag to check if there's an error already, and only show one toast at a time
    let errorCount = 0;

    if (!values.password) {
        // Show "Password is required" when no password is entered
        if (!errorCount) {
            error.password = toast.error("Password is required...!");
            errorCount++;
        }
    } else {
        if (values.password.includes(" ")) {
            // Show "Wrong Password" when spaces are present in the password
            if (!errorCount) {
                error.password = toast.error("Wrong Password...! No spaces allowed.");
                errorCount++;
            }
        }

        if (values.password.length < 4) {
            // Show a message if the password is too short
            if (!errorCount) {
                error.password = toast.error("Password must be at least 4 characters...!");
                errorCount++;
            }
        }

        if (!specialChars.test(values.password)) {
            // Show a message if the password does not contain special characters
            if (!errorCount) {
                error.password = toast.error("Password must contain at least one special character...!");
                errorCount++;
            }
        }
    }

    return error;
}

/** validate username */
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username is required...!");
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid Username...!");
    }
    return error;
}
