import { Cpu, EyeOffIcon } from "lucide-react";
import React from "react";

const EmptyTablePlaceholder = () => {
    return (
        <div className="flex bg-kado-500/5 justify-center items-center h-56">
            <div className="text-center">
                <EyeOffIcon className="size-32 text-kado-300 dark:text-kado-700 block"/>
                <p className="text-kado-400 dark:text-kado-50">No records found</p>
            </div>
        </div>
    );
};

export default EmptyTablePlaceholder;
