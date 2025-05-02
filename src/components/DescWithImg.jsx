// 画像が下に付くタイプの説明用コンポーネント
function DescWithImg(props) {
    return (
        <div className="flex flex-col items-center text-center items-center justify-center bg-amber-100 rounded-xl p-8">
            <p className="text-md sm:text-lg md:text-xl leading-relaxed mb-4 whitespace-pre-line">
                {props.content}
            </p>
            <img src={props.src} alt={props.alt} className="w-64 h-auto rounded-xl" />
        </div>
    )
}

export default DescWithImg