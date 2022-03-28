import Layout from "@components/Layout"
import Container from "@components/Container"
import PostMetaTitle from "@components/PostMetaTitle"
import PostAuthor from "@components/PostAuthor"
import Head from "next/head"
import formatDate from "utils/utils"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export async function getServerSideProps(params){
    const article_id = params.query.article_id
    const article_slug = params.query.article_slug

    const post = '/posts/'+ article_id +'?populate[category][populate]=*&populate[thumbnail][populate]=*&populate[author][populate]=*';
    
	const reqDetail = await fetch(process.env.API_URL + post);
	const resDetail = await reqDetail.json();
    // console.log(!resDetail.length)

    if(resDetail.data == null) return{
        notFound : true
    }

	return {
		props :{
            article_id : article_id,
			detail : resDetail.data
		}
	}
}

export default function detail({detail, article_id}){
    return (
        <>
        {/* {console.log(detail.attributes.author.data.attributes.avatar.data.attributes.url)} */}
            <Head>
				<title>{detail.attributes.title} &ndash; Mokultur</title>
			</Head>
			<Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle 
                        slug={'/article/'+ article_id +'/'+detail.attributes.slug}
                        category={detail.attributes.category.data.attributes.name}
                        date={formatDate(detail.attributes.createdAt)}
                        title={detail.attributes.title}
                        is_feature='true'
                        center/>
                    <PostAuthor
                        authorImg={'http://localhost:1337' + detail.attributes.author.data.attributes.avatar.data.attributes.url}
                        authorName={detail.attributes.author.data.attributes.name}
                        authorRole={detail.attributes.author.data.attributes.job} />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src={`${'http://localhost:1337'+detail.attributes.thumbnail.data.attributes.formats.large.url}`} alt="" className="w-full h-1/2 object-cover rounded-lg"/>
                </div>
                <div className="md:w-8/12 w-full mx-auto leading-relaxed">
                    <p className="text-xl font-semibold mb-4">{detail.attributes.headline}</p>
                    <ReactMarkdown className="prose prose-headings:text-xl">
                        {detail.attributes.content}
                    </ReactMarkdown>
                </div>
			</Container>
        </>
    )
}