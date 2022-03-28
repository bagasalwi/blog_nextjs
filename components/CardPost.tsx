import Link from "next/link"
import InfoPost from "@components/InfoPost"
import formatDate from "utils/utils"

export default function CardPost(props){
    return(
        <article className="mt-8">
            <Link href={'article/'+props.id+'/'+props.attributes.slug}>
                <img src={'http://localhost:1337' + props.attributes.thumbnail.data.attributes.formats.large.url} alt="" className="object-cover md:h-52 min-w-full min-h-full h-96 mb-4 rounded-xl cursor-pointer" />
            </Link>
            <InfoPost 
                slug={'/article/'+ props.id +'/'+props.attributes.slug}
                category={props.attributes.category.data.attributes.name}
                date={formatDate(props.attributes.createdAt)}
                title={props.attributes.title}
                shortDesc={props.attributes.headline}
                authorImg={'http://localhost:1337' + props.attributes.author.data.attributes.avatar.data.attributes.formats.small.url}
                authorName={props.attributes.author.data.attributes.name}
                authorRole={props.attributes.author.data.attributes.job}
            />
        </article>
    )
}