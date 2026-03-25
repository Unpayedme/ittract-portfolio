"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/common/Buttontoggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { link } from "node:fs";

type list_type = {
    path: string;
    name: string;
}

export function Header() {
    const currentFilePath = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    //console.log(currentFilePath)
    const myList: list_type[] = [
        {
            path: "/",
            name: "HOME",
        },
        {
            path: "/about",
            name: "ABOUT",
        },
        {
            path: "/contact",
            name: "CONTACT",
        },
        {
            path: "/projects",
            name: "PROJECTS",
        },
        {
            path: "/blog",
            name: "BLOG",
        },
    ]


    return (
        <div className="flex flex-col shadow-md/20 w-full h-20 flex-shrink-0 sticky top-0 z-50 dark:border-2 dark:border-slate-200 backdrop-blur-lg">
            <div className="container mx-auto flex gap-2 items-center size-full px-3 sm:px-20">
                <h1 className="font-bold text-2xl flex justify-start">SEFUESCA.DEV</h1>
                <div className="flex lg:hidden justify-end flex-1 gap-3 items-center text-center">
                    <ModeToggle />
                    {isOpen ? (
                        <X onClick={() => setIsOpen(false)} size={30} />
                    ) : (
                        <Menu onClick={() => setIsOpen(true)} size={30} />
                    )}
                </div>

                <div
                    className={`fixed top-20 left-0 w-full bg-gray-50 shadow-md transform transition-all duration-500 ease-in-out z-40 lg:hidden
                                ${isOpen ? "translate-y-0 opacity-100"
                            :
                            "-translate-y-2 opacity-0 pointer-events-none"
                        } dark:bg-black border-b border-slate-200`}
                >
                    <ul className="gap-5 text-lg font-bold flex flex-col p-4 font-extrabold">
                        {myList.map((list, index) =>
                            list.path == currentFilePath ? (
                                <Link href={list.path} onClick={() => setIsOpen(false)} key={index}
                                    className="underline text-muted-foreground bg-slate-200/40 h-10 rounded-full pl-5">
                                    <li className="flex items-center h-full w-full">
                                        {list.name}
                                    </li>
                                </Link>
                            ) : (
                                <Link href={list.path} onClick={() => setIsOpen(false)} key={index}>
                                    <li className="hover:underline">
                                        {list.name}
                                    </li>
                                </Link>
                            )
                        )}
                    </ul>
                </div>
                <div
                    onClick={() => setIsOpen(false)}
                    className={`fixed top-20 inset-0 z-30 transition-all duration-300
                                ${isOpen ? "opacity-100 backdrop-blur-sm bg-black/20" 
                                         : 
                                           "opacity-0 pointer-events-none"}`}
                />
                
                <div className="flex gap-5 items-center hidden lg:flex justify-end flex-1 px-10">
                    <ul className="gap-5 text-lg font-bold flex">
                        {
                            myList.map((list, index) => list.path == currentFilePath ?
                                <li key={index} className="underline text-muted-foreground ">
                                    <Link href={list.path}>
                                        {list.name}
                                    </Link>
                                </li>
                                :
                                <li key={index} className="hover:underline">
                                    <Link href={list.path}>
                                        {list.name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}