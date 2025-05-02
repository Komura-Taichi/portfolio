import { motion } from "framer-motion"

import Header from "../components/Header"
import Title from "../components/Title"
import Talk from "../components/Talk"
import SimpleDesc from "../components/SimpleDesc"
import DescWithImg from "../components/DescWithImg"
import FadeIn from "../components/FadeIn"

import me from "../images/me.jpg"
import communication from "../images/communication.png"
import solution from "../images/solution.png"

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-neutral-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

const DESC_DATAS = [
    { src: solution, alt: "問題解決能力", content: "VRやUnityでの開発に関する\n知識・技術と、問題解決能力" },
    { src: communication, alt: "コミュニケーション能力", content: "色んな人とのコミュニケーションを\n円滑に進めることが出来る能力" },
]

const TITLE = "自己紹介"
const MY_NAME = "小村太一"
const INTRO_CONTENT = `こんにちは。\n大阪大学大学院情報科学研究科\nコンピュータサイエンス専攻 の小村太一と申します。
                                    プログラミングが好きです。\n自分が開発に携わったアプリケーションやゲームを使ってもらうことに生きがいを感じています。`
const RESEARCH_TITLE = "研究からの学び"
const RESEARCH_CONTENT = `2024年度は、兵庫県立大学と姫路市消防局の共同研究として、VR緊急走行シミュレータを用いた運転行動についての研究を行っていました。
                            実験に用いたシミュレータの開発においては、消防署職員の方々からの意見を伺った上でクオリティの向上や調整を行い、結果的に49人の方々に実験にご参加頂くことが出来ました。
                            その過程で、以下の能力を身につけることが出来ました。`
const FUTURE_TITLE = "今後について"
const FUTURE_CONTENT = "これからは、ソフトウェア工学についての研究や、個々人のニーズに合わせた、継続的な利用をして頂けるようなアプリケーションの開発を進めていきます。"

function Introduction() {
    const descImgList = DESC_DATAS?.map((descImg) => (
        <DescWithImg key={descImg.alt} src={descImg.src} alt={descImg.alt} content={descImg.content} />
    ))

    return (
        <motion.div className="bg-amber-100" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Header navColors={NAV_ITEM_COLORS} />

            <Title name={TITLE} />
            
            <div className="bg-lime-100 px-6 py-12 md:px-16">
                <div className="max-w-3xl mx-auto">
                    <Talk src={me} alt={MY_NAME} content={INTRO_CONTENT} />

                    <SimpleDesc title={RESEARCH_TITLE} content={RESEARCH_CONTENT} />

                    <FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 mb-8">
                            {descImgList}
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-sm sm:text-md md:text-lg text-gray-700 leading-relaxed mb-6">
                            技術面について、VR開発は研究を始めるまで経験が無く、また、<a href="https://unity.com/ja/features/srp/high-definition-render-pipeline" className="text-gray-700 hover:text-neutral-300 transition-colors duration-300 underline">HDRP(High Definition Render Pipeline)</a>のようなグラフィック品質の高いレンダリングパイプラインは使ったことが無かったため、<span className="text-blue-400">最初はかなり苦戦しました。</span><br />
                            とくに、HDRPはUnityにおけるデフォルトのパイプラインとは値やシェーダに対する操作が大きく異なるため、実装における工夫が必要でした。具体的には、昼夜間の、ライティングによる明るさの変更等が当たります。<br />
                            しかし、<span className="text-red-400">その時々における適切な処理の流れを考えてから実装に落とし込むことで、解決しました。</span><br />
                            また、車における鏡の実装に関しても、保守の観点から外部アセット等は用いず、<span className="text-red-400">自力で実装を行いました。</span><br />
                            このように、どんな課題に対してもきちんと向き合い、入念に調査を行うことで解決してきました。<br />
                            問題を解決した時には必ずNotionにて備忘録を残すように心掛けており、同じ事で再び悩まないような工夫をしていました。
                        </p>
                    </FadeIn>

                    <SimpleDesc title={FUTURE_TITLE} content={FUTURE_CONTENT} />
                </div>
            </div>
        </motion.div>
    )
}

export default Introduction