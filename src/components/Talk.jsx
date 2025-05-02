function Talk(props) {
    return (
        <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
                <img src={props.src} alt={props.alt} className="rounded-full shadow-lg w-72 object-cover" />
            </div>
            <div className="w-full md:w-2/3 relative">
                <div className="bg-white border-2 border-gray-300 rounded-3xl p-8 shadow-md relative text-gray-700 text-lg md:text-xl leading-relaxed">
                    <p className="leading-relaxed whitespace-pre-line">
                        {props.content}
                    </p>
                    <div className="absolute w-4 h-4 bg-white border-l-2 border-b-2 border-gray-300 rotate-135 md:rotate-45
                        md:-left-2 md:top-7 left-1/2 -translate-x-1/2 -top-2 md:translate-x-0 z-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Talk