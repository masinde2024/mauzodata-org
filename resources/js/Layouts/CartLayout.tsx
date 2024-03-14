import React, { PropsWithChildren } from 'react'
import Authenticated from './AuthenticatedLayout'
import { User } from '@/types'
import { Link } from '@inertiajs/react';
import { ScrollBar } from '@/components/ui/scroll-area';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ClipboardList, History, HistoryIcon, PieChart, PlusCircle } from 'lucide-react';
import clsx from 'clsx';

export const CartLayout = ({ children, user }: PropsWithChildren<{ user: User}>) => {
  return (
      <Authenticated user={user}>
          <ScrollArea className="w-full max-w-7xl mx-auto py-2 ">
              <ul className="flex items-center justify-between gap-4 text-center text-kado-950 dark:text-kado-50 whitespace-nowrap *:flex-1">
                  <li>
                      <Link
                          className={clsx(
                              "flex items-center justify-center gap-1 p-3 rounded-2xl bg-kado-100 dark:bg-kado-600/20",
                              {
                                  "bg-indigo-800/50 dark:bg-indigo-400/20 text-white":
                                      route().current("carts.index"),
                              }
                          )}
                          href={route("carts.index")}
                      >
                          <PlusCircle
                              size={23}
                              className="fill-kado-800 dark:fill-kado-500/30 stroke-white"
                          />
                          <span>New Sale</span>
                      </Link>
                  </li>
                  <li>
                      <Link
                          className={clsx(
                              "flex items-center justify-center gap-1 p-3 rounded-2xl bg-kado-100 dark:bg-kado-600/20",
                              {
                                  "bg-indigo-800/50 dark:bg-indigo-400/20 text-white":
                                      route().current("carts.destroy"),
                              }
                          )}
                          href={route("carts.index")}
                      >
                          <HistoryIcon
                              size={23}
                              className="stroke-kado-950 dark:stroke-white"
                          />
                          <span>History</span>
                      </Link>
                  </li>
                  <li>
                      <Link
                          className={clsx(
                              "flex items-center justify-center gap-1 p-3 rounded-2xl bg-kado-100 dark:bg-kado-600/20",
                              {
                                  "bg-indigo-800/50 dark:bg-indigo-400/20 text-white":
                                      route().current("carts.update"),
                              }
                          )}
                          href={route("carts.index")}
                      >
                          <PieChart
                              size={23}
                              className="stroke-kado-950 dark:stroke-white"
                          />
                          <span>Reports</span>
                      </Link>
                  </li>
                  <li>
                      <Link
                          className={clsx(
                              "flex items-center justify-center gap-1 p-3 rounded-2xl bg-kado-100 dark:bg-kado-600/20",
                              {
                                  "bg-indigo-800/50 dark:bg-indigo-400/20 text-white":
                                      route().current("carts.destroy"),
                              }
                          )}
                          href={route("carts.index")}
                      >
                          <ClipboardList
                              size={23}
                              className="stroke-kado-950 dark:stroke-white"
                          />
                          <span>Price List</span>
                      </Link>
                  </li>
              </ul>
              <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {children}
      </Authenticated>
  );
}
