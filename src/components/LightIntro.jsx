import { Link } from "react-router-dom"

function LightIntro() {
    return (
        <div className="flex h-[80vh] items-center justify-center">
            <div className="text-center space-y-14">
                <div className="mb-10">
                    <ruby className="font-light text-gray-800 tracking-widest text-5xl sm:text-6xl md:text-7xl">
                        小村 太一
                        <rt className="text-sm sm:text-base md:text-lg text-gray-600 block mb-1">Komura Taichi</rt>
                    </ruby>
                </div>
            
                <p className="text-gray-700 leading-relaxed">2024年度はVRに関する研究に従事しました。<br />
                    現在はソフトウェア工学に関する研究を行っています。<br />
                    最近はWeb開発に興味を持ってます。<br />
                    ワクワクを大切に、アプリ開発を行っています。
                </p>
                <Link to="/introduction" className="font-bold inline-block text-gray-700 hover:text-neutral-300 transition-colors duration-300 underline">
                    もっと知る
                </Link>
            </div>
        </div>
    )
}

export default LightIntro