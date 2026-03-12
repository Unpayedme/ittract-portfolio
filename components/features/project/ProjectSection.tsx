import { Section } from "@/components/common/Section"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { SearchIcon, Mail } from "lucide-react";

export function ProjectSection() {
    let data:string[] = [];

    return (
        <Section>
            <div className="container mx-auto flex flex-col gap-3">
                <div className="items-center">
                    <h1 className="text-foregroud font-extrabold text-3xl text-center">My Projects</h1>
                    <p className="text-muted-foreground text-center text-xm">Building functional digital experiences with a focus on refined aesthetics and clean code.</p>
                </div>
                <div>
                    <InputGroup className="">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>   

                </div>
                {
                    data ? 
                    <div className="text-muted-foreground text-center mt-30">
                        Project in progress. New works arriving soon... 
                    </div>
                    : 
                    <div>
                        
                    </div>
                }
            </div>
        </Section>
    );
}