import Image from "next/image"

export default function Loader(){
    return (
        <>
        <div id="loading-screen" className="w-full h-full fixed block top-0 left-0 bg-black opacity-100 z-50">
            <Image className="top-1/2 my-0 mx-auto block relative w-0 h-0" src='/loading.gif' width="100" height="100"/>
        </div>
        </>
    )
}
