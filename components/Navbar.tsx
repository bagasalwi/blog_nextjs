import { useState } from 'react'
import Link from 'next/link';
import Container from '@components/Container';
import Router from 'next/router';

export default function Navbar({categories}){
    const [keyword, setKeyword] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [offcanvas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);

	const dropdownList = categories.data.map(category => ({
        text : category.attributes.name,
        href : `/${category.attributes.slug}`
    }));

    function doSearch(e){
        // biar gak refresh
        e.preventDefault();

        Router.push({
            pathname : '/search',
            query:{
                q:keyword
            }
        })
    }

	return (
        // <>
        // <nav className="bg-white shadow dark:bg-gray-800 py-4 mb-10">
        //     <Container>
        //     <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        //         <div className="flex items-center justify-between">
        //             <div className="flex items-center">
        //                 <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>

        //                 <div className="hidden mx-10 md:block">
        //                     <div className="relative">
        //                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                             <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
        //                                 <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        //                             </svg>
        //                         </span>

        //                         <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"></input>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="flex md:hidden">
        //                 <button onClick={() => setOffcanvas(!offcanvas) } type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
        //                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        //                         <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>

        //         <div className={`items-center md:flex ${offcanvas ? 'left-0' : '-left-full'}`}>
        //             <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
        //                 <a className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
        //                 <a className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">About</a>
        //             </div>

        //             <div className="flex items-center py-2 -mx-1 md:mx-0">
        //                 <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
        //             </div>

        //             <div className="mt-3 md:hidden">
        //                 <div className="relative">
        //                     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                         <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
        //                             <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        //                         </svg>
        //                     </span>

        //                     <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"></input>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
        //         {dropdownList.map(({text,href}) => (
        //             <Link href={'/category'+href} key={text}>
        //                 <a className="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href={'/category'+href}>{text}</a>
        //             </Link>
        //         ))}
        //     </div>
        //     </Container>
        // </nav>
        // </>
        <nav className='py-10'>
            <Container>
                <div className='flex items-center'>
                    <div className="w-3/12 flex lg:hidden">
                        <button onClick={() => setOffcanvas(!offcanvas) }>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className='flex items-center lg:justify-start justify-center'>
                            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl cursor-pointer">M</div>
                            Mokultur
                            </a>
                        </Link>
                    </div>
                    <div className="w-3/12 lg:hidden text-right">
                        <button onClick={() => setSearch(!search)}>
                            <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:w-7/12 w-full bg-gradient-to-b from-black to-stone-800 lg:bg-none fixed top-0 h-full lg:h-auto lg:static p-10 lg:p-0 transition-all ${offcanvas ? 'left-0' : '-left-full'}`}>
                        <button className='absolute top-10 right-10 lg:hidden' onClick={() => setOffcanvas(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <ul className='lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-6 lg:space-y-0'>
                            <li><Link href="/"><a href="#" className='hover:font-semibold'>Home</a></Link></li>
                            <li><Link href="/posts"><a href="#" className='hover:font-semibold'>About</a></Link></li>
                            <li><Link href="/posts"><a href="#" className='hover:font-semibold'>Blog</a></Link></li>
                            <li className='relative'>
                                <a href="#" className='hover:font-semibold cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>Lainnya 
                                    <svg className='ml-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                {dropdown && (
                                    <ul className='absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
                                        {dropdownList.map(({text,href}) => (
                                            <Link href={'/category'+href} key={text}>
                                                <li className='border-b border-white/5 last:border-0'>
                                                    <a href={'/category'+href} className='flex py-3 px-6 hover:bg-gray-700/60'>{text}</a>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={`lg:w-3/12 absolute lg:static w-full left-0 transition-all ${search ? 'top-10' : '-top-40'} px-6 lg:px-0 top-10`}>
                        <button className='absolute top-3 right-10 lg:hidden ' onClick={() => setSearch(false)}>
                            <svg className='text-white/40' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <form onSubmit={doSearch}>
                            <input
                                type="text"
                                className='bg-stone-900 py-3 px-6 w-full lg:rounded-lg rounded-md bg-search pl-12'
                                placeholder='Search..'
                                onChange={(e) => {setKeyword(e.target.value)}}
                            />
                        </form>
                    </div>
                </div>
            </Container>
        </nav>
	)
}