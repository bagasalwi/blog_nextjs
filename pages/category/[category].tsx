import CardPost from "@components/CardPost"
import Layout from "@components/Layout"
import Head from "next/head"
import Container from "@components/Container"
import SectionHeader from "@components/SectionHeader"

export async function getServerSideProps(params){
    const cat_slug = params.query.category;

	const post = `/posts?populate[category][populate]=*&populate[thumbnail][populate]=*&populate[author][populate]=*&filters[category][slug][$eq]=${cat_slug}`;
    const category = `/categories?filters[slug][$eq]=${cat_slug}`;
	
	const reqPost = await fetch(process.env.API_URL + post);
	const resPost = await reqPost.json();

	const reqCategories = await fetch(process.env.API_URL + category);
	const resCategories = await reqCategories.json();

    // console.log(resCategories.data)
    // console.log(resPost.data)

	return {
		props :{
			posts : resPost.data.length > 0 ? resPost.data : false,
            // mengambil array pertama dari category, karena slug hanya 1 unique
            category : resCategories.data.length > 0 ? resCategories.data[0].attributes.name : cat_slug,
		}
	}
}

export default function posts({posts, category}){
    return (
        <>
            {/* {console.log(posts)} */}
            <Head>
				<title>Category &mdash; Mokultur</title>
			</Head>
			<Container>
                <SectionHeader> {category} </SectionHeader>
                {posts == false ? (
                    <div className="text-center py-40">
                        <h2 className="text-3xl font-semibold">No result for {category}</h2>
                        <p className="text-white/60 md:w-6/12 w-full mx-auto">No result for data {category}, please move to another page</p>
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