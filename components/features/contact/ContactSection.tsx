import { ContactForm } from "@/components/features/contact/ContactForm"
import { Social } from "@/components/features/contact/Social"
import { Section } from "@/components/common/Section";

export function ContactSection() {
    return (
        <Section className="">
            <div className="container mx-auto flex flex-col flex-1 mb-5 border-t-2 border-b-2 border-slate-200 py-5">
                <div className="text-center flex flex-col gap-2 mb-5">
                    <h1 className="font-extrabold text-5xl">Get In Touch?</h1>
                    <p className="text-muted-foreground">
                        You can reach me at the following
                    </p>
                </div>
                <div className="flex gap-3">
                    <Social />
                    <ContactForm />
                </div>
            </div>
        </Section>

    );
}