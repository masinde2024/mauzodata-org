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
                "flex items-center text-sm font-medium leading-5 p-2 rounded-md dark:hover:bg-teal-700/20 transition duration-150 ease-in-out",
                {
                    "bg-teal-100 border-teal-200 focus:outline-none focus:border-teal-700 dark:border-teal-600/40 dark:bg-teal-600/20":
                        route().current(url) || isActive,
                }
            )}
        >
            {icon ? (
                <span>{icon}</span>
            ) : (
                <span className="mr-2">
                    <FoldersIcon className="size-6 text-gray-400 dark:text-gray-500" />
                </span>
            )}
            <span>{label}</span>
        </Link>
    );
};

export default SideLink;
