import { Mail } from "lucide-react";
import Link from "next/link";
import { social_data } from "@/constant/socials";

export function Social() {
    console.log(social_data)

    social_data.map
    
    return (
        <div className="container mx-auto flex flex-col flex-1 flex gap-2">
            {
                social_data.map(({icon: Icon, ...data}, index) => (

                    <div className="flex flex-col gap-2 border border-slate-200 rounded-md p-4" key={index}>
                        <div className="flex text-lg gap-2">
                            <div className="text-center flex justify-center">
                                <Icon /> 
                            </div>
                            <div className="text-center">
                                {data.title}
                            </div>
                        </div>
                        <div>
                            <Link href={data.link ? data.link : "#"}>
                                {data.name} 
                            </Link>
                        </div>
                        <div className="text-muted-foreground">
                            I aim to respond to all inquiries within a business hour.
                        </div>
                    </div>
                ))
            }
            <div className="flex flex-col gap-2 border border-slate-200 rounded-md p-4">
                <div className="flex text-lg "><Mail /> EMAIL</div>
                <div>
                    <Link href="#">
                        jv.sefuesca@gmail.com
                    </Link>
                </div>
                <div className="text-muted-foreground">
                    I aim to respond to all inquiries within a business hour.
                </div>
            </div>
        </div>
    );
} 