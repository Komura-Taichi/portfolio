import { createContext, useContext } from "react"

import { motion, useReducedMotion } from "framer-motion"

// 連動させてFade Inさせるかのコンテキスト
const StaggerContext = createContext(false)

// スクロールに合わせた設定
const viewport = { once: true, margin: "0px 0px -120px" }

function FadeIn(props) {
    const shouldReducedMotion = useReducedMotion()

    const isStagger = useContext(StaggerContext)

    return (
        <motion.div 
            transition={{
                duration: 1,
            }} 
            variants={{
                hidden: {
                    opacity: 0,
                    y: shouldReducedMotion ? 0 : 20,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            // 連動させない場合、初期状態をhiddenにして、スクロールに合わせて表示
            {...(isStagger
                 ? {}
                 : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                 })}
            {...props}
        />
    )
}

export default FadeIn