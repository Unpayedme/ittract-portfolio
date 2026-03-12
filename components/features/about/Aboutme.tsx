import Image from "next/image";
import { Section } from "@/components/common/Section";
import "@/style/globals.css"
import { Info } from "lucide-react";

export function Aboutme() {
    return (
        <Section id="Aboutme" className="">
            <div className="container mx-auto flex flex-col px-20">
                
                <div className="text-3xl font-bold flex gap-4 ">
                    <Info className="text-center size-10"/> ABOUT ME
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 mt-2 items-center" >
                    <div className="flex flex-1 flex-col gap-4">
                        <p className="text-lg">
                            Hi! I’m John Vincent Sefuesca. I enjoy building things for the internet. My interest in web development started in 2023 when I first discovered how to create pages using HTML and CSS.
                        </p>
                        <p className="text-lg">
                               Right now, I  am a freshman student working hard to improve my skills. I spend my time on school work and personal projects to learn the right way to build websites. My main goal is to create simple, helpful tools that work well for everyone.
                        </p>
                        <p className="text-lg">
                            My main focus these days is learning how to build accessible and inclusive digital products while growing my knowledge in modern web technologies.
                        </p>
                    </div>
                    <div className="flex-1 relative mt-4 items-center flex justify-firts">
                        <Image src="/malupiton.jpg" alt="my image" width={400} height={400} className="object-cover grayscale hover:grayscale-0 transition-all duration-300 hover:scale-102 rounded-md aspect-[3/4] origin-bottom" />
                    </div>
                </div>

            </div>
        </Section>
    );
}