import { motion } from "framer-motion"

import { FaGithub } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"

import Header from "../components/Header"
import Title from "../components/Title"
import DevelopItem from "../components/DevelopItem"

import sekken from "../images/sekken.png"
import sekkenVideo from "../videos/LASTBUBBLES_PV.mp4"
import gazeover from "../images/gazeover.png"
import emergencyVideo from "../videos/out_1_Night.mp4"
import zundamon from "../images/zundamon.png"

const GITHUB = "GitHub"
const YOUTUBE = "Youtube"
const DOWNLOAD = "Download"
const WEBSITE = "Web Site"

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
                    開発には、Unity/C#を用いました。
                    初めて作った3Dゲームということで、至らない点があると思いますが、ご指摘頂けると嬉しいです。`,
        techList: ["Unity", "C#", "Cinemachine", "物理演算"],
        linkDataList: [
            { icon: FaGithub, name: GITHUB, to: "https://github.com/Komura-Taichi/LAST_BUBBLES" },
            { icon: FaYoutube, name: YOUTUBE, to: "https://youtu.be/e2fIyscU4yg?si=WYUGq_ufb3vGXfYV" },
            { icon: FaDownload, name: DOWNLOAD, to: "https://www.dropbox.com/scl/fo/86iatipebcbwgiqyog2mw/AKvOO6YZHQ_te2I4CNctoBU?rlkey=z1xqffpyivhkqwhibms2dq06q&st=fanlm421&dl=0" },
        ]
    },
    {
        isImg: false, src: emergencyVideo, poster: gazeover,
        title: "VR緊急走行シミュレータ",
        content: `姫路市消防局と連携して開発したシミュレータで、出動から火災現場到着までの一連の流れを含んでいます。
                    開発過程においては、定期的に消防署職員に体験して頂き、適切なシナリオであるか、また、操作感が現実に近いかなどを伺って次の課題としていました。
                    シナリオは昼夜で合計最大6シナリオあり、夜間は見通しの悪さやライティングによるリアリティにおいて高評価を頂きました。
                    サイレンや無線音声は消防署にて録音させて頂いたものを使用するなど、数々の没入感に対する工夫を施しました。
                    これらの開発や制御はすべてUnity/C#で行いました。
                    このシミュレータは、新規性や社会への貢献が評価され、NHK等のメディアで取り上げて頂きました。`,
        techList: ["Unity", "C#", "HTC Vive", "LogitechSDK", "HDRP", "NavMeshAgent", "リプレイ機能", "視線可視化"],
        linkDataList: [
            { icon: FaYoutube, name: YOUTUBE, to: "https://www.youtube.com/watch?v=He9sjQyhbNc" },
            { icon: CgWebsite, name: WEBSITE, to: "https://www3.nhk.or.jp/kansai-news/20250124/2000091033.html" },
        ]
    },
    {
        isImg: true, src: zundamon,
        title: "時間管理DiscordBot",
        content: `長い時間、友達とゲームをしたり通話していたりすると、やめどきが分からなくなってくるという経験、ありませんか？
                    そんな悩みを解決すべく、指定した時間になるとボイスチャットに入ってきて、あれこれ注意してくれるDiscordBotを開発しました。
                    もちろん、言われようが酷すぎたなら、反論することも可能です。
                    適切な時間で休養も取りつつ、ゲームライフをエンジョイしましょう！
                    開発はPythonで行い、ライブラリとしてボイス生成用のVoicevox CoreとDiscordにアクセスするためのDiscord.py、メッセージ生成用のHuggingface Transformersを用いました。
                    注意メッセージや反論に対するメッセージはバリエーションを持たせられるように、Llama-3-Swallowという言語モデルを用いて生成しました。
                    本プログラムは、いくつかのパラメータ(コメントで表記済み)を変更することで、他のタスクにも利用可能です。`,
        techList: ["Python", "Huggingface Transformers", "Llama-3-Swallow", "LLM", "Voicevox Core", "Discord.py", "Bot"],
        linkDataList: [
            { icon: FaGithub, name: GITHUB, to: "https://github.com/Komura-Taichi/TimeManagementBot" },
        ]
    },
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