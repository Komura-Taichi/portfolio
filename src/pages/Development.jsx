import { useRef } from "react"

import { motion } from "framer-motion"

import { FaGithub } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

import Header from "../components/Header"
import Title from "../components/Title"
import AccountItem from "../components/AccountItem"

import sekken from "../images/sekken.png"
import sekkenVideo from "../videos/LASTBUBBLES_PV.mp4"

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-neutral-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

const TITLE = "開発物"

function Development() {
    const videoRef = useRef(null)

    function handleMouseEnter() {
        videoRef.current?.play()
    }

    function handleMouseLeave() {
        videoRef.current?.pause()
    }

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <Title name={TITLE} />

            <div className="px-6 py-12 space-y-12 bg-lime-100">
                <motion.div 
                    className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-8 bg-white rounded-xl shadow-md p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="md:w-1/2">
                        <video ref={videoRef} src={sekkenVideo} className="rounded-xl w-full h-auto"
                            muted loop playsInline preload="metadata" poster={sekken}
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-4">LAST BUBBLES</h2>
                        <p className="text-gray-700 mb-4 whitespace-pre-line">
                            ゴールとなる石けん置き場まで、石けんを導いてあげるゲームです。<br />
                            忠実に再現された質感や石けんの操作感、道中の日用品が用いられた数々のギミックが難関となります。<br />
                            時にはBGMに癒やされ、時には精神を研ぎ澄ましてハイスコアを目指してください。<br />
                            開発には、Unity/C#を用いました。カメラはCinemachineを用いています。<br />
                            初めて作った3Dゲームということで、至らない点があると思いますが、ご指摘頂けると嬉しいです。
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Unity", "C#", "Cinemachine", "物理演算"]?.map((tech) => (
                                <span key={tech} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
                            <AccountItem icon={FaGithub} name="GitHub" to="https://github.com/Komura-Taichi/LAST_BUBBLES" />
                            <AccountItem icon={FaYoutube} name="Youtube" to="https://youtu.be/e2fIyscU4yg?si=WYUGq_ufb3vGXfYV" />
                            <AccountItem icon={FaDownload} name="Download" to="https://www.dropbox.com/scl/fo/86iatipebcbwgiqyog2mw/AKvOO6YZHQ_te2I4CNctoBU?rlkey=z1xqffpyivhkqwhibms2dq06q&st=fanlm421&dl=0" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Development