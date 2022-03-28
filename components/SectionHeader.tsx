

export default function SectionHeader({children}){
    return (
        <>
        <h1 className="text-2xl pt-6 text-center font-semibold">{children}</h1>
        <p className="text-sm pt-2 text-center">Scroll down for more</p>
        </>
    )
}