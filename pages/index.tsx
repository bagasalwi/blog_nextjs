import type { NextPage } from 'next'
import Head from 'next/head'
import Feature from '@components/Feature'
import CardPost from '@components/CardPost'
import Container from '@components/Container'
import { useState } from 'react'

export async function getServerSideProps(){
	const post = '/posts?populate[category][populate]=*&populate[thumbnail][populate]=*&populate[author][populate]=*';
	const feature_url = '&filters[featured][$eq]=true';

	const reqFeatured = await fetch(process.env.API_URL + post + feature_url);
	const resFeatured = await reqFeatured.json();
	
	const reqPost = await fetch(process.env.API_URL + post + '&filters[featured][$ne]=true');
	const resPost = await reqPost.json();

	// console.log(resPost);

	return {
		props :{
			featured : resFeatured.data.length > 0 ? resFeatured.data[0] : false,
			posts : resPost.data.length > 0 ? resPost.data : false
		}
	}
}

const Home: NextPage = ({featured, posts:initialPost}) => {
	const [posts, SetPosts] = useState(initialPost);
	// console.log(categories);

	return (
		<>
			<Head>
				<title>Home &mdash; Mokultur</title>
			</Head>
			<Container>
				{featured && 
					<Feature {...featured}/>
				}
				<div className="flex -mx-4 flex-wrap">
					{posts.map(post => (
						<div key={post.id} className="md:w-4/12 w-full px-4 py-4">
							<CardPost {...post} />
						</div>
					))}
				</div>
			</Container>
		</>
	)
}

export default Home
