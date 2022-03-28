import CardPost from "@components/CardPost"
import Layout from "@components/Layout"
import Head from "next/head"
import Container from "@components/Container"
import PostsData from '../utils/posts.json'
import SectionHeader from "@components/SectionHeader"

import { useState } from 'react'

export default function posts(){

    const [posts, SetPosts] = useState(PostsData)

    return (
        <>
            <Head>
				<title>Category &mdash; Mokultur</title>
			</Head>
			<Container>
                <SectionHeader> UI Design </SectionHeader>
                {posts.length < 1 ? (
                    <div className="text-center py-40">
                        <h2 className="text-3xl font-semibold">No result for Posts</h2>
                        <p className="text-white/60 md:w-6/12 w-full mx-auto">No result for data posts, please move to another page</p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap">
                    {posts.map(post => (
                        <div key={post.id} className="md:w-4/12 w-full px-4 py-4">
                            <CardPost {...post} />
                        </div>
                    ))}
                    </div>
                )}
				
			</Container>
        </>
    )
}