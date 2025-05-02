import { Link } from "react-router-dom"

import arrow from "../images/arrow.svg"

function News(props) {
    return (
        <li>
            <a href={props.to} target="_blank" rel="noopener noreferrer" className="group block transition-colors duration-300">
                <p className="text-sm text-gray-600">{props.date}</p>
                <div className="flex items-center gap-1">
                    <p className="text-gray-700 font-medium group-hover:text-neutral-300 transition-colors duration-300">{props.content}</p>
                    <img src={arrow} className="w-2 h-2" />
                </div>
            </a>
        </li>
    )
}

export default News