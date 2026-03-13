import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { social_data, contact_data  } from "@/constant/socials";

export function Social() {
    console.log(social_data)

    social_data.map

    return (
        <div className="container mx-auto flex flex-col flex-1 flex gap-4 ">
            {
                social_data.map(({ icon: Icon, ...data }, index) => (

                    <div className="flex flex-col gap-2 border border-slate-200 rounded-md p-5 hover:bg-slate-200/40" key={index}>
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
                            {data.description}
                        </div>
                    </div>
                ))
            }
            <div className="flex flex-col gap-2 border border-slate-200 rounded-md p-4 hover:bg-slate-200/40">
                <div className="flex gap-2">
                    <div className="text-center flex justify-center">
                        <MessageCircleMore />
                    </div>
                    <div className="text-center font-bold">
                        Connect with me
                    </div>
                </div>
                <div className="flex gap-5 flex-row items-center justify-around py-5" >
                    {
                        contact_data.map(({icon: Icon, ...data}, index) => (
                            <Link href={data.link ? data.link : "#"} target="_blank" key={index} className="border-2 border-slate-200 rounded-md animate-bounce hover:animate-none">
                                <Icon size={50} className="p-1"/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
} 