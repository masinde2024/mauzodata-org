import { Link } from "@inertiajs/react";
import SideLink from "../side-link";

const Sidebar = () => {
    return (
        <nav className="p-3 dark:text-gray-200">
            <ul className="space-y-1">
                <li>
                    <SideLink url="dashboard" label="Dashboard" />
                </li>
                <li>
                    <SideLink url="profile.edit" label="Profile" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
