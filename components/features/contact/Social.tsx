import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { social_data, contact_data  } from "@/constant/socials";

export function Social() {
    console.log(social_data)

    social_data.map

    return (
        <div className="container mx-auto flex flex-col flex-1 flex gap-2">
            {
                social_data.map(({ icon: Icon, ...data }, index) => (

                    <div className="flex flex-col gap-2 border border-slate-200 rounded-md p-4" key={index}>
                        <div className="flex text-lg gap-2">
                            <div className="text-center flex justify-center">
                                <Icon />
                            </div>
                            <div className="text-center font-bold">
                                {data.title}
                            </div>
                        </div>
                        <div className="text-muted-foreground">
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
                <div className="flex gap-2">
                    <div className="text-center flex justify-center">
                        <MessageCircleMore />
                    </div>
                    <div className="text-center font-bold">
                        Connect with me
                    </div>
                </div>
                <div className="flex gap-5 flex-row items-center justify-around" >
                    {
                        contact_data.map(({icon: Icon, ...data}, index) => (
                            <Link href={data.link ? data.link : "#"} target="_blank" key={index} className="border-2 border-slate-200 rounded-md">
                                <Icon size={50} className="p-1"/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
} 