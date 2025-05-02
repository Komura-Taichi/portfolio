import { motion } from "framer-motion"
import "./index.css"

import Header from "./components/Header"
import LightIntro from "./components/LightIntro"
import News from "./components/News"
import Summary from "./components/Summary"
import FadeIn from "./components/FadeIn"

import gazeover from "./images/gazeover.png"
import sekken from "./images/sekken.png"

// ナビゲーションボタンの色(ページごとに設定)
const NAV_ITEM_COLORS = [
    "text-neutral-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

// ニュースのリンクと日付、内容
const NEWS_DATA = [
    { to: "https://www.sighci.jp/contents/page/news", date: "2025/03/02", content: "第112回HCI研究会にて、学生奨励賞を受賞しました!!" },
    { to: "https://www.sun-tv.co.jp/suntvnews/news/2025/01/23/84671/", date: "2025/01/23", content: "サンテレビ ほかにて、研究が紹介されました!!" },
    { to: "/news/game2024-sekken", date: "2024/06/10", content: "石けんゲームを開発しました。" },
]

// 研究とか作った物の要約
const SUMMARY_DATA = [
    { to: "https://ipsj.ixsq.nii.ac.jp/records/2000618", title: "VR緊急走行シミュレータを用いた\n運転経験の違いによる運転行動の比較", 
        content:  `消防車や救急車などの緊急走行時は、赤信号の通過が必要な場面があり、非常に危険です。
                    また、切迫した心理状況などによって、安全確認の不足や、速度を出しすぎるなどの危険な運転行動に繋がるリスクがあります。
                    このような危険性があるにも関わらず、緊急走行の訓練を実車で行うことは難しく、練習出来るような環境の構築が急務となっています。
                    そこで、私はVR上で実行出来る緊急走行シミュレータを開発し、それを用いて緊急走行経験年数の違いによる、運転行動の比較を行いました。
                    結果として、交差点直進時において、新人とベテラン間で安全確認の回数に差が生じました。
                    また、研究の様子は地上波でも放送されました。`,
        src: gazeover, isUrl: true,
    },
    { to: "/development", title: "ゲームやツール開発",
        content: `C#が好きなので、Unityでゲームを作ったり、WPFでデスクトップアプリケーションを作ったり、色々してます。
                    また、最近はWeb開発に興味があるため、ReactでWebアプリケーションを作ったりもしてます。`,
        src: sekken, isUrl: false,
    }
]

function App() {
    const newsList = NEWS_DATA?.map((news) => (
        <News key={news.to} to={news.to} date={news.date} content={news.content} />
    ))

    const summaryList = SUMMARY_DATA?.map((summary) => (
        <Summary key={summary.title} to={summary.to} title={summary.title} content={summary.content} src={summary.src} isUrl={summary.isUrl} />
    ))

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <LightIntro />
            <div className="bg-lime-100 rounded-t-[30vw]">
                <FadeIn>
                    <div className="flex flex-col items-center justify-center h-[60vh]">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light mb-6">最新のお知らせ</h2>
                        <ul className="space-y-4">
                            {newsList}
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-lime-100 flex flex-col gap-y-16 px-6 py-12 md:px-16">
                        {summaryList}
                    </div>
                </FadeIn>
            </div>
        </motion.div>
    )
}

export default App