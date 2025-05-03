import { useRef } from "react"

import { motion } from "framer-motion"

import AccountItem from "./AccountItem"

function DevelopItem({isImg, src, poster=null, title, content, techList, linkDataList}) {
    const videoRef = useRef(null)

    function handleMouseEnter() {
        videoRef.current?.play()
    }

    function handleMouseLeave() {
        videoRef.current?.pause()
    }

    const linkList = linkDataList?.map((linkData) => (
        <AccountItem key={linkData.name} icon={linkData.icon} name={linkData.name} to={linkData.to} />
    ))

    return (
        <motion.div 
            className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-8 bg-white rounded-xl shadow-md p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="md:w-1/2">
                {isImg ? (
                    <img src={src} className="rounded-xl w-full h-auto" />
                )
                :
                (
                    <video ref={videoRef} src={src} className="rounded-xl w-full h-auto"
                        muted loop playsInline preload="metadata" poster={poster} />
                )}
            </div>

            <div className="md:w-1/2">
                <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                    {content}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techList?.map((tech) => (
                        <span key={tech} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                    {linkList}
                </div>
            </div>
        </motion.div>
    )
}

export default DevelopItem