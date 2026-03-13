import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactPreview() {
    return (
        <Section>
            <div className="container mx-auto flex flex-col ga-5 border-t-2 border-b-2 border-slate-200 py-20">
                <h1 className="font-extrabold text-5xl text-center mb-5">Get In Touch</h1>
                <p className="text-muted-foreground text-center">While I am not actively seeking new roles at the moment, I welcome any inquiries or networking opportunities. I’ll do my best to respond to your message as soon as possible.</p>
                <div className="flex justify-center items-center mt-10">
                    <Button className="h-10 ">
                        <Mail />  Get in touch
                    </Button>
                </div>

            </div>
        </Section>
    );
}