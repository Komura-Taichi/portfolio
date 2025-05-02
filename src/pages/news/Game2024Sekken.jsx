import Header from '../../components/Header'

const NAV_ITEM_COLORS = [
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
    "text-gray-700 hover:text-neutral-300 transition-colors duration-300",
]

function Game2024Sekken() {
    return (
        <div className="bg-lime-100">
            <Header navColors={NAV_ITEM_COLORS} />
        </div>
    )
}

export default Game2024Sekken