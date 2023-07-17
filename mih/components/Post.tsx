"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { getAllPosts } from '@/services/getPosts'
// import { usePosts } from '@/store'
// import { shallow } from 'zustand/shallow'



const Post = () => {
    const { data: posts, isLoading } = useSWR('posts', getAllPosts)
    // const [posts, loading, getAllPosts] = usePosts((state) => [
    //     state.posts,
    //     state.loading,
    //     state.getAllPosts
    // ], shallow)

    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts])
    return (isLoading ? <h3>Loading...</h3> :
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Post