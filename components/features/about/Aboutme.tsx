import Image from "next/image";
import { Section } from "@/components/common/Section";
import "@/style/globals.css"
import { Info } from "lucide-react";
import { ProfileImage } from "@/components/common/ProfileImage";

export function Aboutme() {
    return (
        <Section id="Aboutme" className="">
            <div className="container mx-auto flex flex-col border-b-2 border-t-2 border-slate-200 pt-7 pb-10 justify-center">
                
                <div className="text-3xl font-bold flex gap-4 mb-10 justify-start">
                    <Info className="text-center size-10"/> ABOUT ME
                </div>
                
                <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-2 items-center text-sm sm:text-sm md:text-md lg:text-lg" >
                    <div className="flex flex-1 flex-col gap-4 text-muted-foreground lg:ml-10">
                        <p className="">
                            Hi! I’m John Vincent Sefuesca. I enjoy building things for the internet. My interest in web development started in 2023 when I first discovered how to create pages using HTML and CSS.
                        </p>
                        <p className="">
                               Right now, I  am a freshman student working hard to improve my skills. I spend my time on school work and personal projects to learn the right way to build websites. My main goal is to create simple, helpful tools that work well for everyone.
                        </p>
                        <p className="">
                            My main focus these days is learning how to build accessible and inclusive digital products while growing my knowledge in modern web technologies.
                        </p>
                    </div>
                    <div className="flex-1 items-center flex justify-center pr-5">
                        <ProfileImage />
                    </div>
                </div>
            </div>
        </Section>
    );
}