import { Link } from "react-router-dom"

import arrow from "../images/arrow.svg"

function Summary(props) {
    return (
        props.isUrl ? (
            <div className="flex flex-col md:flex-row items-center gap-x-12">
                <a href={props.to} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 transform transition-trasnform duration-300 hover:scale-105">
                    <img src={props.src} alt={props.title} className="w-full rounded-xl shadow-md" />
                </a>
                <div className="md:w-1/2">
                    <h2 className="font-light text-gray-800 text-xl md:text-2xl mb-4 whitespace-pre-line">{props.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                        {props.content}
                    </p>

                    <a href={props.to} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-bold text-gray-700 hover:text-neutral-300 transition-colors duration-300 underline">
                        もっと知る
                        <img src={arrow} className="w-2 h-2" />
                    </a>
                </div>
            </div>
        )
        :
        (
            <div className="flex flex-col md:flex-row items-center gap-x-12">
                <Link to={props.to} className="w-full md:w-1/2 transform transition-trasnform duration-300 hover:scale-105">
                    <img src={props.src} alt={props.title} className="w-full rounded-xl shadow-md" />
                </Link>
                <div className="md:w-1/2">
                    <h2 className="font-light text-gray-800 text-xl md:text-2xl mb-4 whitespace-pre-line">{props.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                        {props.content}
                    </p>
                    <Link to={props.to} className="font-bold text-gray-700 hover:text-neutral-300 transition-colors duration-300 underline">もっと知る</Link>
                </div>
            </div>
        )
    )
}

export default Summary