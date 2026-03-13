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
} from "@/components/ui/drawer"


export function Header() {
    return (
        <div className="flex flex-col border-b-2 border-slate-200 w-full h-18 flex-shrink-0 sticky top-0 z-50 bg-white dark:bg-black">
            <div className="container mx-auto flex gap-2 justify-around items-center size-full md:px-30">
                <h1 className="font-bold text-2xl flex justify-start">SEFUESCA.DEV</h1>
                <div className="flex md:hidden items-center justify-end gap-4">
                    <ModeToggle />
                    <Drawer direction="top">
                        <DrawerTrigger><Menu /></DrawerTrigger>
                        <DrawerTitle></DrawerTitle>
                        <DrawerContent className="text-center font-extrabold text-xl bg-white gap-15 flex flex-col justify-center dark:text-black">
                            <DrawerHeader className="flex flex-row justify-between">
                                <DrawerDescription className="font-bold text-2xl flex justify-start text-center items-center">SEFUESCA.DEV</DrawerDescription>
                                <DrawerClose className="flex gap-3 justify-end">
                                    <X className="items-center size-10 flex justify-center text-center"/>
                                </DrawerClose>
                            </DrawerHeader>
                            <DrawerClose asChild className="text-center">
                                <Link href={"/"}>HOME</Link>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Link href={"/about"}>ABOUT</Link>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Link href={"/contact"}>CONTACT</Link>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Link href={"/projects"}>PROJECTS</Link>
                            </DrawerClose>
                        </DrawerContent>
                    </Drawer>

                </div>
                <div className="flex gap-5 items-center hidden md:flex">
                    <ul className="gap-5 text-md font-bold flex">
                        <li>
                            <Link href="/" className="hover:underline">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:underline">
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <ModeToggle />
                </div>

            </div>
        </div>
    );
}