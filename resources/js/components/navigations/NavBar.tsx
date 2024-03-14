import { PropsWithChildren, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import ResponsiveNavLink from '../ui/ResponsiveNavLink';
import Dropdown from '../ui/Dropdown';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '../ApplicationLogo';
import NavLink from '../ui/NavLink';
import Sidebar from './sidebar';
import { Text } from 'lucide-react';

const NavBar = ({ user }: PropsWithChildren<{ user: User}>) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
  return (
      <nav className="text-indigo-50 bg-kado-500/10 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-14">
                  <div className="flex">
                      <div className="shrink-0 flex gap-1 items-center">
                          <Sheet>
                              <SheetTrigger>
                                <Text className='size-6 text-kado-500 dark:text-kado-200' />
                              </SheetTrigger>
                              <SheetContent side={'left'}>
                                  <SheetHeader>
                                      <SheetTitle>
                                          Mbalizi Store
                                      </SheetTitle>
                                      <SheetDescription>
                                          <Sidebar />
                                      </SheetDescription>
                                  </SheetHeader>
                              </SheetContent>
                          </Sheet>

                          <Link href="/">
                              <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                          </Link>
                      </div>

                      <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                          <NavLink
                              href={route("dashboard")}
                              active={route().current("dashboard")}
                          >
                              Dashboard
                          </NavLink>
                          {/* <ModeToggle /> */}
                      </div>
                  </div>

                  <div className="sm:flex sm:items-center sm:ms-6">
                      <div className="ms-3 relative">
                          <Dropdown>
                              <Dropdown.Trigger>
                                  <span className="inline-flex rounded-md">
                                      <button
                                          type="button"
                                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                      >
                                          {user.name}

                                          <svg
                                              className="ms-2 -me-0.5 h-4 w-4"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                          >
                                              <path
                                                  fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"
                                              />
                                          </svg>
                                      </button>
                                  </span>
                              </Dropdown.Trigger>

                              <Dropdown.Content>
                                  <Dropdown.Link href={route("profile.edit")}>
                                      Profile
                                  </Dropdown.Link>
                                  <Dropdown.Link
                                      href={route("logout")}
                                      method="post"
                                      as="button"
                                  >
                                      Log Out
                                  </Dropdown.Link>
                              </Dropdown.Content>
                          </Dropdown>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default NavBar