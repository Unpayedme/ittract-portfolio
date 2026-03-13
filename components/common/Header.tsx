import Link from "next/link";
import { ModeToggle } from "@/components/common/Buttontoggle";
import { Menu } from "lucide-react";
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


export function Header() {
    return (
        <div className="flex flex-col border-b-2 border-slate-200 w-full h-18 flex-shrink-0 sticky top-0 z-50 bg-white dark:bg-black">
            <div className="container mx-auto flex gap-2 justify-around items-center size-full px-30">
                <h1 className="font-bold text-2xl flex justify-start">SEFUESCA.DEV</h1>
                <div className="flex md:hidden items-center justify-end gap-4">
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
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