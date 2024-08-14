export const HomePage = () => {
    return (
        <>
            <div className="flex flex-col w-[100%] items-center justify-center min-h-screen bg-[#eee7e4]">
                <div className="flex items-center justify-center h-20 w-20 bg-orange-700 rounded-full mb-4">
                    <span className="text-white text-xl font-bold">RS</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-radley text-gray-800 text-center mb-4">
                    <span className="italic">Hello,</span> <span className="text-primary">I am Rio!</span>
                </h1>
                <p className="text-center text-gray-800 font-radley text-lg md:text-xl max-w-md mb-6">
                    I believe brevity is key. My print and digital designs are all about minimalism and elegance.
                </p>
                <button className="text-primary font-radley text-lg md:text-xl underline hover:text-orange-800">
                    Hire me
                </button>
            </div>
        </>
    )
}