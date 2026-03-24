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
        <div className="flex flex-col border-b-2 border-slate-200 w-full h-18 flex-shrink-0 sticky top-0 z-50 bg-white dark:bg-black">
            <div className="container mx-auto flex gap-2 items-center size-full px-3 sm:px-20">
                <h1 className="font-bold text-2xl flex justify-start">SEFUESCA.DEV</h1>
                {
                    isOpen ?
                        <div className="flex flex-col justify-end lg:hidden justify-end gap-4 flex-1">
                            <div className="flex-1 flex justify-end">
                                <X onClick={() => { setIsOpen(false) }} className="text-2xl"/>
                            </div>
                            <div className="fixed top-18 left-0 w-full bg-gray-50 shadow-md transition-all transform z-40 md:hidden translate-y-0 opacity-100 delay-200 duration-300">
                                <ul className="gap-5 text-lg font-bold flex flex-col p-4 font-extrabold">
                                    {
                                        myList.map((list, index) => list.path == currentFilePath ?
                                            <Link href={list.path} onClick={() =>{() => { setIsOpen(false)}}} key={index} className="underline text-muted-foreground bg-slate-200/40 h-10 rounded-full pl-5">
                                                <li className="text-center items-center flex h-full w-full"    >
                                                    {list.name}
                                                </li>
                                            </Link>
                                            :
                                            <Link href={list.path} onClick={() => { setIsOpen(false)}} key={index}>
                                                <li key={index} className="hover:underline">
                                                    {list.name}
                                                </li>
                                            </Link>
                                        )
                                    }
                                </ul>   

                            </div>
                            {/* <div className="fixed top-36 left-0 flex-1 bg-none">

                            </div> */}
                        </div>

                        :
                        <div className="flex lg:hidden justify-end gap-4 flex-1">
                            {
                                <Menu onClick={() => { setIsOpen(true) }} />
                            }
                        </div>
                }
                {/* <div className="flex lg:hidden justify-end gap-4 flex-1">
                    <ModeToggle />
                    <Drawer direction="top">
                        <DrawerTitle>
                            <DrawerTrigger>
                                <Menu />
                            </DrawerTrigger>
                        </DrawerTitle>
                        <DrawerContent className="text-center text-lg bg-white gap-0 flex flex-col justify-center dark:text-black m-w-full opacity-100 top-16">
                            <DrawerHeader className="flex flex-row justify-between">
                                <DrawerDescription className="font-bold text-2xl flex justify-start text-center items-center pr-10">
                                    SEFUESCA.DEV
                                </DrawerDescription>
                                <DrawerClose className="flex gap-3 justify-end pl-10">
                                    <X className="items-center size-10 flex justify-center text-center" />
                                </DrawerClose>
                            </DrawerHeader>
                            <div className="flex flex-col gap-2 justify-start">
                                <DrawerClose asChild>
                                    <Link href={"/"}>HOME</Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href={"/about"} >ABOUT</Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href={"/contact"} >CONTACT</Link>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Link href={"/projects"}>PROJECTS</Link>
                                </DrawerClose>
                            </div>

                           <DrawerFooter>
                                <DrawerClose>
                                    <Button asChild className="w-full h-10">
                                        <Link href="/contact" className="hover:underline">
                                            CONTACT
                                        </Link>
                                    </Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div> */}
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