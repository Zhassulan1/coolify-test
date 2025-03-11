export default function SecondaryLink({ url, text }: { url: string, text: string }) {
    return (
        <a href={url} className="hover:underline inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tl from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
            <span className="px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-80">
                {text}
            </span>
        </a>
    )
}