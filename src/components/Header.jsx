import NavItem from './NavItem'

const NAV_ITEM_PROPS = [
    { name: "ホーム", to: "/", color: "" },
    { name: "自己紹介", to: "/introduction", color:"" },
    { name: "論文一覧", to: "/research", color:"" },
    { name: "開発物", to: "/development", color:"" },
    { name: "アカウント", to: "/accounts", color:"" },
]

function Header(props) {
    // 色のみをページごとに受け取って更新
    const navItemPropsNew = NAV_ITEM_PROPS?.map((navItemProp, i) => ({
        ...navItemProp, color: props.navColors[i]
    }))
    const navItems = navItemPropsNew?.map((navItemProp) => (
        <NavItem key={navItemProp.name} name={navItemProp.name} to={navItemProp.to} color={navItemProp.color} />
    ))

    return (
        <header className="bg-amber-100">
            <nav>
                <ul className="flex space-x-8">
                    {navItems}
                </ul>
            </nav>
        </header>
    )
}

export default Header