import { motion } from "framer-motion"

import Header from "../components/Header"
import Title from "../components/Title"
import ResearchItem from "../components/ResearchItem"

import playerview from "../images/2_intersection4.PNG"

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-neutral-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

const RESEARCH_ITEMS = [
    { to: "https://ipsj.ixsq.nii.ac.jp/records/2000618", src: playerview, alt: "VR緊急走行シミュレータ", title: "VR緊急走行シミュレータを用いた\n運転経験の違いによる運転行動の比較" },
]

const TITLE = "論文一覧"

function Research() {
    const researchList = RESEARCH_ITEMS?.map((research) => (
        <ResearchItem key={research.to} to={research.to} src={research.src} alt={research.alt} title={research.title} />
    ))

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <Title name={TITLE} />

            <div className="bg-lime-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
                {researchList}
            </div>
        </motion.div>
    )
}

export default Research