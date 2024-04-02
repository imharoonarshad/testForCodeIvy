import * as yup from 'yup'

export const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('E-mail is required')
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      'This is not a valid email format!'
    ),
    
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*bilal786)[a-zA-Z\d]+$/,
      'Password must contain "bilal786"'
    ),
})
