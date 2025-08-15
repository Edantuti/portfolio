export function Badge({children}:{children:string}){
    return (
        <span className="border border-dashed rounded-full text-xs px-4 py-1 text-gray-500">
            {children}
        </span>
    )
}