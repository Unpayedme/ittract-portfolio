import Image from "next/image";
import { Section } from "@/components/common/Section"

export function Aboutme() {
    return (
        <Section id="Aboutme" className="py-5">
            <div className="border border-gray-700 container mx-auto">
                <h1>ABOUT ME</h1>
                <div className="flex w-full gap-4">
                    <div className="flex-1 bg-blue-100 p-4">
                        <p>
                            Hi! I’m John Vincent Sefuesca. I enjoy building things for the internet. My interest in web development started in 2023 when I first discovered how to create pages using HTML and CSS.
                        </p>
                        <p>
                            Right now, I am a freshman student working hard to improve my skills. I spend my time on school work and personal projects to learn the right way to build websites. My main goal is to create simple, helpful tools that work well for everyone.
                        </p>
                    </div>
                    <div className="flex-1 bg-blue-100 p-4 relative w-full aspect-video">
                        <Image src="/malupiton.jpg" alt="my image" fill className="object-cover" />
                    </div>
                </div>

            </div>
        </Section>
    );
}