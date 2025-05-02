import { motion } from "framer-motion"

import arrow from "../images/arrow.svg"

function ResearchItem(props) {
    return (
        <a href={props.to} target="_blank" rel="noopener noreferrer" className="block">
            <motion.div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300 relative" whileHover="hover" initial="rest" animate="rest">
                <motion.img src={props.src} alt={props.alt} className="w-full h-auto rounded-md"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.05 }, }} transition={{ type: "spring", stiffness: 300 }} />
                <div className="relative mt-4 text-center text-gray-700 text-lg whitespace-pre-line">
                    <p>
                        {props.title}
                    </p>
                    <img src={arrow} className="w-2 h-2 absolute right-15 bottom-3" />
                </div>
            </motion.div>
        </a>
    )
}

export default ResearchItem