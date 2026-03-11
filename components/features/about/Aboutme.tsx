import Image from "next/image";
import { Section } from "@/components/common/Section";
import "@/style/globals.css"

export function Aboutme() {
    return (
        <Section id="Aboutme" className="">
            <div className="container mx-auto flex flex-col px-20 ">
                <h1 className="text-3xl font-bold"> ABOUT ME</h1>
                <div className="flex flex-col md:flex-row gap-10 mt-2 items-center" >
                    <div className="flex flex-1 flex-col gap-4">
                        <p>
                            Hi! I’m John Vincent Sefuesca. I enjoy building things for the internet. My interest in web development started in 2023 when I first discovered how to create pages using HTML and CSS.
                        </p>
                        <p>
                            Right now, I am a freshman student working hard to improve my skills. I spend my time on school work and personal projects to learn the right way to build websites. My main goal is to create simple, helpful tools that work well for everyone.
                        </p>
                    </div>
                    <div className="flex-1 relative aspect-square w-[1200px]">
                        <Image src="/malupiton.jpg" alt="my image" fill className="object-cover" />
                    </div>
                </div>

            </div>
        </Section>
    );
}