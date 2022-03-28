import Link from 'next/link';
import InfoPost from '@components/InfoPost';
import formatDate from 'utils/utils';

export default function Feature(props){
	return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="lg:w-7/12 md:w-7/12 w-full px-4">
                    <Link href={'/article/'+props.id+'/'+props.attributes.slug}>
                        <img src={'http://localhost:1337' + props.attributes.thumbnail.data.attributes.formats.large.url} alt="" className='rounded-xl object-cover w-full h-80 mb-4 md:mb-0'/>
                    </Link>
                </div>
                <div className='lg:w-5/12 md:w-5/12 w-full px-4 leading-relaxed'>
                    <InfoPost 
                        slug={'/article/'+props.id+'/'+props.attributes.slug}
                        category={props.attributes.category.data.attributes.name}
                        date={formatDate(props.attributes.createdAt)}
                        title={props.attributes.title}
                        shortDesc={props.attributes.headline}
                        authorImg={'http://localhost:1337' + props.attributes.author.data.attributes.avatar.data.attributes.formats.small.url}
                        authorName={props.attributes.author.data.attributes.name}
                        authorRole={props.attributes.author.data.attributes.job}
                        is_feature='true'/>
                </div>
            </div>
            <hr className='border-white/10 mt-10 md:hidden'/>
        </article>
	);
}