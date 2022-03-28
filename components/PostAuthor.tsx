export default function PostAuthor({
    authorImg,
    authorName,
    authorRole
}){
    return (
        <>
        {/* {console.log(authorImg)} */}
        <div className="flex items-center mt-4">
			<img src={authorImg} alt="" className='w-10 h-10 rounded-full object-cover'/>
			<div className='ml-4'>
				<h3>{authorName}</h3>
				<div className="text-white/60 text-sm">
					{authorRole}
				</div>
			</div>
		</div>
        </>
    )
}