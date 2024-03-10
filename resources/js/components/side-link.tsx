import { Link } from "@inertiajs/react";
import clsx from "clsx";
import { FoldersIcon } from "lucide-react";
import React, { ReactNode } from "react";

const SideLink = ({
    url,
    label,
    icon,
    isActive,
}: {
    url: string;
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
}) => {
    return (
        <Link
            href={route(url)}
            className={clsx(
                "flex items-center text-gray-500 dark:text-gray-100 text-sm font-medium leading-5 p-2 rounded-md dark:hover:bg-indigo-700/20 transition duration-150 ease-in-out",
                {
                    "bg-indigo-200 text-indigo-800 border-indigo-200 focus:outline-none focus:border-indigo-700 dark:border-indigo-600/40 dark:bg-indigo-600/20":
                        route().current(url) || isActive,
                }
            )}
        >
            {icon ? (
                <span >{icon}</span>
            ) : (
                <span className="mr-2">
                    <FoldersIcon className={clsx('size-5', {
                        'text-indigo-700': route().current(url) || isActive
                    })} />
                </span>
            )}
            <span>{label}</span>
        </Link>
    );
};

export default SideLink;
