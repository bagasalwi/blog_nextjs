import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({children, categories}){
    return(
        <div className='bg-gradient-to-b from-black to-stone-900 min-h-screen text-white'>
            <Navbar categories={categories} />
            {children}
            <Footer />
        </div>
    )
}