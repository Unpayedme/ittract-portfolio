export type Project_type = {
	imageURL: string;
	title: string;
	description: string;
	category: string[];
	link: string;
}

type categories_type = {
    category: string;
}

export const project_data: Project_type[] = [
    {
        imageURL: "/randomriddles.jpg",
        title: "Random Riddles",
        description: "Random Riddles is a simple app that gives you a new riddle every time you play. Test your thinking skills, guess the answer, and reveal the solution. Each riddle brings a quick mental challenge and keeps your mind active.",
        category: ["web application","html","css","javascript"],
        link: "https://randomriddles.netlify.app/"
    },
    {
        imageURL: "/gymsystem.jpg",
        title: "Gym System Analytics",
        description: "A data-driven hub that replaces manual spreadsheets with precise analytics to bridge the gap between gym administration and business growth.",
        category: ["web application","Nextjs","tailwindcss","neondb"],
        link: "https://it-tract-final.vercel.app/"
    },
    {
        imageURL: "/ecommerce.jpg",
        title: "E-Commerce Shop",
        description: "A high-performance e-commerce solution bridging the gap between minimal design and robust digital commerce.",
        category: ["web application","react", "tailwindcss"],
        link: "https://appsdev-midterm-nine.vercel.app/"
    },
    {
        imageURL: "/cpuscheduling.jpg",
        title: "FCFS SCHEDULER",
        description: "",
        category: ["web application","nextjs","tailwindcss"],
        link: "https://cpu-scheduling-fcfs-kappa.vercel.app/"
    },
]

export const categories: categories_type[] = [
    {
        category: "web application"
    },
    {
        category: "nextjs"
    },
    {
        category: "tailwindcss"
    },
    {
        category: "react"
    },
    {
        category: "neondb"
    },
    {
        category: "html"
    },
    {
        category: "javascript"
    },
    {
        category: "typescript"
    },
]