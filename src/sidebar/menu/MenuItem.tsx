import { IMenuItem } from "./menu.data";
import { useAtomValue } from "jotai";
import {isCollapsedAtom} from "../../store";

const MenuItem = ({ item }: { item: IMenuItem}) => {
    const isCollapsed = useAtomValue(isCollapsedAtom)

    return (
        <a href={item.link} rel="noopener noreferrer" target="_blank">
            <item.icon />
            {!isCollapsed && <span>{item.name}</span>}
        </a>
    );
};

export default MenuItem;