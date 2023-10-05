import NavbarLink from "./NavbarLink";
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <>
            <NavbarLink label={"characters"} dispatch={dispatch}/>
            <NavbarLink label={"planets"} dispatch={dispatch}/>
            <NavbarLink label={"starships"} dispatch={dispatch}/>
        </>
    )
}

export default Navbar;