import FadeIn from "./FadeIn"

// スクロール時にふわっと出現するようなシンプルな説明用のコンポーネント
function SimpleDesc(props) {
    return (
        <FadeIn>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 mt-16 mb-4">{props.title}</h2>
            <p className="text-sm sm:text-md md:text-lg text-gray700 leading-relaxed mb-6 whitespace-pre-line">
                {props.content}
            </p>
        </FadeIn>
    )
}

export default SimpleDesc