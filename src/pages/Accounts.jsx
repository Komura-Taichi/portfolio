import { motion } from "framer-motion"

import { FaGithub } from "react-icons/fa"
import { SiQiita } from "react-icons/si"
import { CiMail } from "react-icons/ci"

import Header from "../components/Header"
import Title from "../components/Title"
import AccountItem from "../components/AccountItem"

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-neutral-300",
]

const ACCOUNT_ITEMS = [
    { icon: FaGithub, name: "GitHub", to: "https://github.com/Komura-Taichi" },
    { icon: SiQiita, name: "Qiita", to: "https://qiita.com/TheFish" },
    { icon: CiMail, name: "Mail", to: "mailto:tai4bsness@gmail.com" },
]

const TITLE = "アカウント"

function Accounts() {
    const accountList = ACCOUNT_ITEMS.map((account) => (
        <AccountItem key={account.name} icon={account.icon} name={account.name} to={account.to} />
    ))

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <Title name={TITLE} />

            <div className="bg-lime-100 min-h-dvh grid grid-cols-2 sm:grid-cols-3 gap-6 px-4 py-8">
                {accountList}                
            </div>
        </motion.div>
    )
}

export default Accounts