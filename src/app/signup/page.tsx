'use client'
import React from "react"
import signUpUser from "@/firebase/auth/signUp"
import { useRouter } from 'next/navigation'
import { Button, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'

function Page() {
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (email: string, password: string) => {
        const { result, error } = await signUpUser(email, password)

        if (error) {
            return console.log(error)
        }

        console.log(result)
        return router.push("/")
    }

    const passwordValidation = yup.string()
        .trim()
        .required("Required")
        .matches(
            /(?=.*[A-Z])/,
            "Your password must have at least one capital letter"
        )
        .matches(
            /(?=.*[!@#$%^&*])/,
            "Your password must have at least one special character"
        )
        .matches(
            /(?=.*[a-z])/,
            "Your password must have at least one lower case character"
        )
        .matches(/(?=.*[0-9])/, "Your password must have at least one number")
        .min(8, "Your password must have at least 8 characters")
        .max(20, "Your password must have no more than 20 characters")

    const passwordConfirmation = yup.string()
        .when('password', {
            is: (val: string) => val?.length > 0,
            then: () =>
                yup.string()
                    .oneOf([yup.ref('password')], 'Passwords do not match')
                    .required('Required'),
        })

    const schema: yup.Schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Required'),
        password: passwordValidation,
        confirmPassword: passwordConfirmation,
    })

    return (
        <div className="place-self-center max-w-md w-full p-5 shadow-xl">
            <h1 className="mb-10 font-extrabold text-4xl text-center">Create Account</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={values => {handleForm(values.email, values.password)}}
                validationSchema={schema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="noobcook@email.com"
                                aria-label="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                aria-label="password"
                                aria-describedby="passwordCriteria"
                                value={values.password}
                                onChange={handleChange}
                                isValid={touched.password && !errors.password}
                                isInvalid={!!errors.password}
                            />
                            <Form.Text id="passwordCriteria" muted>
                                Your password must be 8-20 characters long and contain at least 1 number,
                                1 capital letter, and 1 special character.
                            </Form.Text>

                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPasswordConfirmation">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                isValid={touched.confirmPassword && !errors.confirmPassword}
                                isInvalid={!!errors.confirmPassword}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" className="block w-fit max-w-xs mt-5 mx-auto bg-sky-500 border-transparent">Get Started</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Page;
