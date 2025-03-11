import Header from "../components/layout/header";

export default function About() {
    return (
        <>
            <Header mainBtnText={"Guess it"} />
            <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
                <div className="min-h-screen align-middle justify-center">
                    <span className="flex flex-col items-center justify-center h-screen">
                        <br />
                        <br />
                        <p className="text-9xl dark:text-gray-400">About What?</p>
                        <br />
                        <br />
                    </span>
                </div>
            </div>
        </>
    )
}