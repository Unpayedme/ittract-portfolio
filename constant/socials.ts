import { LucideIcon, Mail, PhoneCall , Github, Facebook, Linkedin } from "lucide-react"; 

type social_types = {
    icon: LucideIcon;
    title?: string;
    link?: string;
    name?: string;
    description?: string;
}


export const social_data: social_types[] = [
    {
        icon:   Mail,
        title: "EMAIL",
        link: "mailto:info.arielbatoon@gmail.com",
        name: "jv.sefuesca@gmail.com",
        description: "I aim to respond to all inquiries within a business hour."
    },
    {
        icon:   PhoneCall,
        title: "PHONE NUMBER",
        name: "09097748071",
        description: "Online and available during standard business hours."
    },
]

export const contact_data: social_types[] = [
    {
        icon: Github,
        link: "https://github.com/unpayedme"
    },
    {
        icon: Facebook,
        link: "https://www.facebook.com/jvsefuesca"
    },
    {
        icon: Linkedin,
        link: "https://www.Linkedin.com/jvsefuesca"
    },
]

