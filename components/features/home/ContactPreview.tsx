import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ContactPreview() {
    return (
        <Section>
            <div className="border-t-2 border-b-2 border-slate-200 py-20">
                <SectionHeader
                    title="Get In Touch"
                    description="While I am not actively seeking new roles at the moment, I welcome any inquiries or networking opportunities. I’ll do my best to respond to your message as soon as possible."
                    className="text-center"
                />
                <div className="flex justify-center items-center mt-10">
                    <Button className="h-10 ">
                        <Mail />  Get in touch
                    </Button>
                </div>
            </div>
        </Section>
    );
}