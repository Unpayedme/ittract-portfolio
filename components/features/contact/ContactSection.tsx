import { ContactForm } from "@/components/features/contact/ContactForm"
import { Social } from "@/components/features/contact/Social"
import { Section } from "@/components/common/Section";
import { SectionHeader } from   "@/components/common/SectionHeader";

export function ContactSection() {
    return (
        <Section className="">
            <div className="container mx-auto flex flex-col flex-1 mb-5 border-t-2 border-b-2 border-slate-200 py-5 ">
                <SectionHeader 
                    title="Get In Touch?"
                    description="You can reach me at the following"
                    className="text-center mb-10 gap-0"
                />
                <div className="flex gap-3 flex-col md:flex-row">
                    <Social />
                    <ContactForm />
                </div>
            </div>
        </Section>

    );
}