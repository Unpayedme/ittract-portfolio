import Link from "next/link";
import { ModeToggle } from "@/components/common/Buttontoggle";



export function Header() {
    return (
        <div className="flex flex-col border-b border-gray-700 w-full h-18 flex-shrink-0 sticky top-0 z-50 bg-white dark:bg-black">
            <div className="container mx-auto flex gap-2 justify-around items-center size-full px-30">
                <h1 className="font-bold text-2xl">SEFUESCA.DEV</h1>
                <div className="flex gap-5 items-center">
                    <ul className="flex gap-5 text-md font-bold ">
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