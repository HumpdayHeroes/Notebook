import { Menubar } from 'primereact/menubar';
import logo from "../assets/logo-text.svg"
import items from '../data/header-items.json'

const Header = () => {

    return (
        <Menubar model={items} start={<img src={logo} alt="Humpday Heroes text logo" />} />


    )
}

export default Header