

const VideoTitle = ({ title, overview}) => {
    return (
        <div 
        className="
            absolute
            inset-0
            flex
            items-center
            bg-gradient-to-r
            from-black
            via-black/70
            to-transparent">
            
            <div className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 max-w-2xl">
                <h1 
                className="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    text-white
                ">
                {title}</h1>
                <p className="
                    mt-4
                    hidden
                    md:block
                    text-sm
                    lg:text-lg
                    leading-relaxed
                    text-gray-200
                ">{overview}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <button className="
                        rounded-lg
                        bg-white
                        px-6
                        py-2
                        sm:px-8
                        sm:py-3
                        text-sm
                        sm:text-base
                        font-semibold
                        text-black
                        transition
                        hover:bg-gray-300
                        ">
                        Play
                    </button>
                    <button className="
                        rounded-lg
                        bg-gray-600/70
                        px-6
                        py-2
                        sm:px-8
                        sm:py-3
                        text-sm
                        sm:text-base
                        font-semibold
                        text-white
                        transition
                        hover:bg-gray-500
                        ">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;