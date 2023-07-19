"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignInForm = () => {
    const router = useRouter()
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' required />
            <input type="password" name='password' required />
            <button type='submit'>Sign In</button>
        </form>
    )
}

export default SignInForm