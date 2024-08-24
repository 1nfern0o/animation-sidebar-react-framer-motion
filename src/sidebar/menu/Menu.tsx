import MenuItem from "./MenuItem";
import { MENU } from "./menu.data";
import styles from "../Sidebar.module.scss"

const Menu = () => {
    return (
        <nav className={styles.menu}>
            {MENU.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </nav>
    );
};

export default Menu;