export default function Block({children}) {
return (<div className="w-full relative sm:w-1/2 bg-gray-600/30 backdrop-blur-xl p-4 border border-gray-600/30 rounded-xl ">
        {children}
    </div>
)


}