import { Section } from "@/components/common/Section";
import { techData } from "@/constant/techstack";
import { Cpu, CodeXml  } from "lucide-react";

export function Teckstack(){
    return(
        <Section id="Teckstack" className="">
            <div className="container mx-auto flex flex flex-col border-t-2 border-b-2 border-slate-200 pt-7 pb-10">
                
                <div className="text-3xl font-bold text-center flex gap-3 text-center">
                    <CodeXml className="text-center flex justify-center size-10"/> 
                    <div className="text-center flex justify-center">
                        Tech Stacks
                    </div>
                </div>
                
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 flex my-5">
                    {
                        techData.map((data,index) => (
                            <div key={index} className="border border-gray-700 p-5 rounded-md transition duration-300 hover:scale-103">
                                <div className="flex gap-3">
                                    <Cpu /> {data.tech}
                                </div>
                            </div>
                        ))
                    }
                </div> 
            </div>
        </Section>
    );
}   