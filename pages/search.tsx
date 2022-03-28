import CardPost from "@components/CardPost"
import Head from "next/head"
import Container from "@components/Container"
import SectionHeader from "@components/SectionHeader"

export async function getServerSideProps(params){
    const search = params.query.q;

    const post = `/posts?populate[category][populate]=*&populate[thumbnail][populate]=*&populate[author][populate]=*&filters[title][$contains]=${search}`;

	const reqPost = await fetch(process.env.API_URL + post);
	const resPost = await reqPost.json();

    // console.log(resCategories.data)
    // console.log(resPost.data)

	return {
		props :{
			posts : resPost.data.length > 0 ? resPost.data : false,
            search : search
		}
	}
}

export default function search({posts, search}){
    return (
        <>
            {/* {console.log(posts)} */}
            <Head> 
				<title>Search &mdash; Mokultur</title>
			</Head>
			<Container>
                <SectionHeader>Search for : {search}</SectionHeader>
                {posts == false ? (
                    <div className="text-center py-40">
                        <h2 className="text-3xl font-semibold">No result for {search}</h2>
                        <p className="text-white/60 md:w-6/12 w-full mx-auto">No result for data {search}, please move to another page</p>
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