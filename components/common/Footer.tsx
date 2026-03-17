import { MapPin, Copyright } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return(
        <div className="border-t-2 border-slate-200 p-4">
            <div  className="container mx-auto flex md:justify-around flex-col md:flex-row justify-center items-center gap-3"> 
                <div className="flex flex-col gap-1 text-sm text-center items-center justify-center">
                    <h1 className="text-lg font-bold text-black dark:text-white">John Vincent Sefuesca</h1>
                    <p className="gap-4 text-muted-foreground">Software Developer</p>
                    <p className="text-muted-foreground flex text-center"> <MapPin className="size-4 items-center"/>Cebu, Philippines</p>
                </div>
                <div className="flex gap-1 text-center justify-center">
                    <ul className="text-muted-foreground text-sm text-center">
                        <li className="text-lg font-bold text-black dark:text-white">PAGE</li>
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <ul className="text-muted-foreground text-sm text-center">
                        <li className="text-lg font-bold text-black dark:text-white">Connect</li>
                        <li><Link href="#" className="hover:underline text-md">LinkIn</Link></li>
                        <li><Link href="#" className="hover:underline">Facebook</Link></li>
                        <li><Link href="#" className="hover:underline">Discord</Link></li>
                        <li><Link href="#" className="hover:underline">Github</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center mt-4 gap-2 text-center">
                <Copyright className="text-muted-foreground size-3"/><p className="text-muted-foreground my-5">2026 John Vincent Sefuesca. All rights reserved.</p>
            </div>
        </div>
    );
}   