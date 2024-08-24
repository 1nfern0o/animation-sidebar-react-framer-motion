import Menu from "./menu/Menu"
import styles from "./Sidebar.module.scss"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../store";
import { m } from "framer-motion";
import cn from "clsx"
import { useState, useRef } from "react";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)
    const [isCanHover, setIsCanHover] = useState(true)
    const hoverTimeoutRef = useRef<number | null>(null)

    const toggleSidebar = () => {
        if (isCollapsed) {
            setIsCanHover(false)

            if (hoverTimeoutRef.current) {

                // @ts-ignore
                clearTimeout(hoverTimeoutRef.current)
            }

            hoverTimeoutRef.current = setTimeout(() => {
                setIsCanHover(true)
            }, 400)
        }

        setIsCollapsed(!isCollapsed)
    }

    return (
        <m.aside
            className={cn(styles.sidebar, {
                [styles.collapsed]: isCollapsed,
                [styles.canHover]: isCanHover
            })}
            animate={{ width: isCollapsed ? 50 : 224 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
            <button
                className={styles.toggle}
                onClick={toggleSidebar}
            >
                {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
            </button>
            <Menu />
        </m.aside>
    );
};

export default Sidebar;