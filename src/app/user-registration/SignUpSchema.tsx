import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .required("User Name is required")
    .matches(/(.*[a-z]){3}/i, "Please Use Characters Only "),

  email: yup
    .string()
    .email()
    .required("E-mail is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "This is not a valid email format!"
    ),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
