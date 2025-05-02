function Title(props) {
    return (
        <div className="flex h-[50vh] items-center justify-center">
            <div className="text-center">
                <h1 className="font-light text-gray-800 tracking-widest text-4xl sm:text-5xl md:text-6xl">
                    {props.name}
                </h1>
            </div>
        </div>
    )
}

export default Title