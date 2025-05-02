function AccountItem({ icon: Icon, name, to }) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer" 
            className="flex flex-col items-center text-gray-700 hover:text-neutral-300 transition-colors duration-300"
        >
            <div className="w-16 h-16 rounded-full bg-white shadow-md border border-solid flex items-center justify-center text-3xl mb-2">
                <Icon />
            </div>
            <span className="text-sm font-medium whitespace-pre-line">{name}</span>
        </a>
    )
}

export default AccountItem