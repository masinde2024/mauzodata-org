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
                "flex items-center text-gray-500 dark:text-gray-100 font-medium leading-5 px-2 py-3 rounded-md dark:hover:bg-emerald-700/20 transition duration-150 ease-in-out",
                {
                    "bg-emerald-100 font-bold text-emerald-700 focus:outline-none focus:border-emerald-700 dark:border-emerald-600/40 dark:bg-emerald-600/10 dark:text-emerald-400":
                        route().current(url) || isActive,
                }
            )}
        >
            {icon ? (
                <span >{icon}</span>
            ) : (
                <span className="mr-2">
                    <FoldersIcon className={clsx('size-6', {
                        'text-emerald-500': route().current(url) || isActive
                    })} />
                </span>
            )}
            <span>{label}</span>
        </Link>
    );
};

export default SideLink;
