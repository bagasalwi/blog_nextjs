import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({
	category,
	date,
	title,
	shortDesc,
	authorImg,
	authorName,
	authorRole,
	is_feature,
	slug
}){
    return(
        <>
		{/* {console.log(slug)} */}
		<PostMetaTitle category={category} date={date} title={title} is_feature={is_feature} slug={slug}/>
		<p className='text-sm text-white/60 mt-3 w-10/12 leading-relaxed'>
			{shortDesc}
		</p>
		<PostAuthor authorImg={authorImg} authorName={authorName} authorRole={authorRole} />
        </>
    )
}