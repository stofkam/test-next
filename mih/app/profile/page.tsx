"use client"
import React from 'react'
import { getServerSession } from "next-auth/next"
import { authConfig } from '@/configs/auth'
import { useSession } from "next-auth/react"

const Profile = () => {
    // const session = await getServerSession(authConfig)
    const session2 = useSession()
    return (
        <div>
            <h1>Profile of {session2.data?.user?.name}</h1>
            {session2.data?.user?.image && <img src={session2.data.user.image} alt=''></img>}
        </div>
    )
}

export default Profile