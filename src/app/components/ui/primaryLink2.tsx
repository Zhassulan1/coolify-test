export default function PrimaryLink2({ text, url, big=false }: { text: string, url: string, big?: boolean }) {
    return (
        <a
        href={url}
            className={`text-white focus:ring-4 font-medium rounded-lg ${ big ? "text-2xl" : "text-sm"} px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800`}
            >
                {text}
            </a>
        )
    }