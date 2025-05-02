import { Link } from "react-router-dom"

function NavItem(props) {
    return (
        <li>
            <Link to={props.to} className={`text-base sm:text-lg md:text-xl ${props.color}`}>
                {props.name}
            </Link>
        </li>
    )
}

export default NavItem