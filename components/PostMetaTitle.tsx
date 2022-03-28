import Link from "next/link";

export default function PostMetaTitle({
    category,
    date,
    title,
    center,
    slug,
    is_feature
}){
    return (
        <>
            {/* {console.log(slug)} */}
            <div className="flex items-center text-xs text-white/80 space-x-3">
                <div className="uppercase">
                    {category}
                </div>
                <span>&bull;</span>
                <div className=''>
                    {date}
                </div>
            </div>
            <h6 className={`${is_feature == 'true' ? 'text-3xl font-bold' : 'text-xl font-semibold'}  mt-2 ${center ? 'text-center' : ''}`}>
                {slug ? <Link href={slug} passHref>{title}</Link> : {title}}
            </h6>
        </>
    )
}