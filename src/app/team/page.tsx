import Header from "../components/layout/header";

export default function Team() {

    return (
        <>
            <Header mainBtnText={"Create now"} />
            <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
                <div className="min-h-screen align-middle justify-center">
                    <a href="https://github.com/Zhassulan1/">
                    <span className="flex flex-col items-center justify-center">
                        <br />
                        <p className="text-9xl dark:text-gray-400">I</p>
                        <br />
                        <p className="text-9xl dark:text-gray-400">am</p>
                        <br />
                        <p className="text-9xl dark:text-gray-400">the</p>
                        <br />
                        <p className="text-9xl dark:text-gray-400">entire</p>
                        <br />
                        <p className="text-9xl dark:text-gray-400">gang</p>
                        <br />
                        <br />
                        <br />
                    </span>
                    </a>
                </div>
            </div>
        </>
    )
}