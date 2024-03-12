import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/components/ApplicationLogo";
import Dropdown from "@/components/ui/Dropdown";
import NavLink from "@/components/ui/NavLink";
import ResponsiveNavLink from "@/components/ui/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/navigations/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/navigations/NavBar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <div className="min-h-screen flex bg-slate-50 dark:bg-kado-950">
                    <ScrollArea className="w-[300px]  min-h-[89dvh] relative hidden md:block ">
                        <Sidebar />
                    </ScrollArea>
                    <main className="w-full border border-r border-kado-200 dark:border-kado-900">
                        <NavBar user={ user } />

                        <div className="w-full">
                            {header && (
                                <header className="bg-white dark:bg-gray-900 shadow">
                                    <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                                        {header}
                                    </div>
                                </header>
                            )}
                            <div className="py-6 px-4">{children}</div>
                        </div>
                    </main>
                </div>
            </ThemeProvider>
            <Toaster richColors={true} duration={5000} position={"top-center"} />
        </>
    );
}
