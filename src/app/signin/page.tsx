'use client'
import React from 'react';
import signInUser from '@/firebase/auth/signIn';
import { useRouter } from 'next/navigation'
import { Button, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'

function Page() {
    const router = useRouter()

    const handleForm = async (email: string, password: string) => {
        const { result, error } = await signInUser(email, password)

        if (error) {
            const elem = document.getElementById('invalid-credentials-notice');
            elem!.style.display = 'block'
            return
        }

        console.log(result)
        return router.push('/')
    }

    const schema: yup.Schema = yup.object().shape({
        email: yup.string().ensure().required('Required'),
        password: yup.string().ensure().required('Required'),
    })

    return (
        // TODO: add option to reset password
        <div className='place-self-center my-auto max-w-md w-full p-5 shadow-xl'>
            <h1 className='mb-5 font-extrabold text-4xl text-center'>Welcome Back!</h1>
            {/* <h2 className='mb-4 font-normal text-lg text-center'>Let's get to cooking!</h2> */}
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => { handleForm(values.email, values.password) }}
                validationSchema={schema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                aria-label='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                aria-label='password'
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <p id='invalid-credentials-notice' className='hidden text-amber-700'>Oops! Seems that you entered invalid credentials.</p>

                        <Button type='submit' className='block w-fit max-w-xs mt-5 mx-auto bg-sky-500 border-transparent'>Let's Cook!</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Page;
