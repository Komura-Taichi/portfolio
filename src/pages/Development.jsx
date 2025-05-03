import { motion } from "framer-motion"

import { FaGithub } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

import Header from "../components/Header"
import Title from "../components/Title"
import DevelopItem from "../components/DevelopItem"

import sekken from "../images/sekken.png"
import sekkenVideo from "../videos/LASTBUBBLES_PV.mp4"

const GITHUB = "GitHub"
const YOUTUBE = "Youtube"
const DOWNLOAD = "Download"

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-neutral-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

const DEV_ITEMS = [
    {
        isImg: false, src: sekkenVideo, poster: sekken,
        title: "LAST BUBBLES",
        content: `ゴールとなる石けん置き場まで、石けんを導いてあげるゲームです。
                    Steamで発売中の「LOST BUBBLES」というゲームをもとに開発しました。
                    忠実に再現された質感や石けんの操作感、道中の日用品が用いられた数々のギミックが難関となります。
                    時にはBGMに癒やされ、時には精神を研ぎ澄ましてハイスコアを目指してください。
                    開発には、Unity/C#を用いました。カメラはCinemachineを用いています。
                    初めて作った3Dゲームということで、至らない点があると思いますが、ご指摘頂けると嬉しいです。`,
        techList: ["Unity", "C#", "Cinemachine", "物理演算"],
        linkDataList: [
            { icon: FaGithub, name: GITHUB, to: "https://github.com/Komura-Taichi/LAST_BUBBLES" },
            { icon: FaYoutube, name: YOUTUBE, to: "https://youtu.be/e2fIyscU4yg?si=WYUGq_ufb3vGXfYV" },
            { icon: FaDownload, name: DOWNLOAD, to: "https://www.dropbox.com/scl/fo/86iatipebcbwgiqyog2mw/AKvOO6YZHQ_te2I4CNctoBU?rlkey=z1xqffpyivhkqwhibms2dq06q&st=fanlm421&dl=0" },
        ]
    }
]

const TITLE = "開発物"

function Development() {
    const devList = DEV_ITEMS?.map((dev) => (
        <DevelopItem 
           key={dev.title} isImg={dev.isImg} src={dev.src} poster={dev.poster} title={dev.title} content={dev.content} techList={dev.techList} linkDataList={dev.linkDataList} />
    ))

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <Title name={TITLE} />

            <div className="px-6 py-12 space-y-12 bg-lime-100">
                {devList}
            </div>
        </motion.div>
    )
}

export default Development