import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/common/SectionHeader";

export function ContactForm() {
    return (
        <div className="container mx-auto flex flex-col flex-1 border-2 rounded-md border-slate-200 p-4 gap-3">
            <div>
                <h1 className="text-foreground text-center font-bold">Let’s Build Something Meaningful</h1>
                <p className="text-muted-foreground text-center">Currently accepting new projects and creative collaborations. If you have a vision you'd like to bring to life, let’s start the conversation. </p>
            </div>
            <div className="flex gap-1 flex-col lg:flex-row">
                <div className="flex flex-col flex-1">
                    <label htmlFor="fname" className="pl-1">First Name</label>
                    <input type="text" id="fname" className="border border-slate-200 rounded-md h-9 w-full"/>
                </div>
                <div className="flex flex-col flex-1">
                    <label htmlFor="lname" className="pl-1">Last Name</label>
                    <input type="text" id="lname" className="border border-slate-200 rounded-md h-9 w-full"/>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col">
                    <label htmlFor="fname" className="pl-1">Email</label>
                    <input type="email" id="fname" className="border border-slate-200 rounded-md h-9"/>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col w-full h-full">
                    <label htmlFor="fname">How can I help you? <span className="text-muted-foreground text-xs">Max 500 characters</span></label>
                    <Textarea className="h-full"/>
                </div>
            </div>
            <div className="">   
                <Button className="flex-1 w-full h-10">
                    SUBMIT
                </Button>
            </div>
        </div>
    );
} 