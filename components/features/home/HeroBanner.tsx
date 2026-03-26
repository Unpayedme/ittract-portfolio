import { Section } from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/common/ProfileImage";
import { LucideIcon, Mail, PhoneCall, Github, Facebook, Linkedin } from "lucide-react";

export function HeroBanner() {
    return (
        <Section className="flex">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-3 flex-col md:gap-4 border-t-4 border-b-4 border-slate-200 w-full flex-1 py-20 my-20">

                <div className="flex-1 items-center flex justify-center mb-5 w-full h-full">
                    <ProfileImage />
                </div>

                <div className="flex-1 flex flex-col gap-4  md:text-center">
                    <div className="w-full flex flex-col gap-5">
                        <h1 className="text-foreground sm:text-2xl xl:text-3xl md:text-2xl font-extrabold text-center text-xl ">Hi, I`m John Vincent Sefuesca</h1>
                        <p className="text-muted-foreground text-sm md:text-md text-center px-4">
                            A dedicated software developer building modern, responsive digital products. From web applications to custom software, I focus on delivering clean code and captivating interfaces that drive user engagement.
                        </p>
                    </div>
                    
                    <div className="flex-col flex items-center gap-1 md:gap-4 sm:flex-row md:flex-row justify-center ">
                        <Link href="/projects" className="">
                            <Button variant={"destructive"} className="h-10 w-50">View Projects</Button>
                        </Link>
                        <Link href="/contact" className="">
                            <Button variant={"destructive"} className="h-10 w-50">Contact</Button>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-3 pt-5">
                        <Link href="https://github.com/unpayedme">
                            <Github className="animate-bounce hover:animate-none size-8 delay-300" />
                        </Link>
                        <Link href="https://www.facebook.com/jvsefuesca">
                            <Facebook className="animate-bounce hover:animate-none size-8 delay-600" />
                        </Link>
                        <Link href="mailto:jv.sefuesca@gmail.com">
                            <Mail className="animate-bounce hover:animate-none size-8 delay-900" />
                        </Link>

                    </div>
                </div>
            </div>
        </Section>
    );
}