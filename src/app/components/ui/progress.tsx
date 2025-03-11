import Loader from "./loader";

interface Loader {
    text: string;
    isFinished: boolean;
}


interface Progress {
    Loaders: Loader[];
}


// { text, state }: { text: string, state: string }
export default function Progress({ progress }: { progress: Progress }) {

    let loaders = progress.Loaders.map((loader, index) => {
        return (
            <Loader loader={loader} key={index}></Loader>
        )
    })
    return (
        <>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Image to 3D model:</h2>
            <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                {loaders}
            </ul>
        </>
    )
}