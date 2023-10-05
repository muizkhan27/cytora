import {
    Link,
} from "react-router-dom";
import { updateLoading } from '../redux/starWarReducer'

const NavbarLink = ({label, dispatch}) => {
    const clickHandler = () => {
        dispatch(updateLoading(true))
    }
    return (
        <Link className='navbar-link' onClick={clickHandler} to={`/${label}`}>{label[0].toUpperCase() + label.substring(1)}</Link>
    )
}

export default NavbarLink;
