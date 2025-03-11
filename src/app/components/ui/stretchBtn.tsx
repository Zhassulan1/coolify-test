export default function StretchBtn({ onClick }: { onClick: () => void }) {
    return (
        <>
            <button type="button" onClick={onClick}>
                <svg 
                    className="w-10 h-10 dark:text-white" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
                    />
                </svg>
            </button>
        </>
    )
}

