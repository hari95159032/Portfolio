import { Code, Server, Wrench } from 'lucide-react';

export const personalData = {
    name: "Hari Krishnna",
    role: "Software Engineer",
    company: "Verizon",
    location: "India",
    about: "Passionate Software Engineer with 2 years of experience at Verizon. Focused on building scalable web applications and enhancing user experiences. Expert in React, JavaScript, and modern frontend technologies.",
    email: "hari.krishnna@example.com",
    github: "https://github.com/harikrishnna",
    linkedin: "https://linkedin.com/in/harikrishnna",
};

export const skills = [
    {
        category: "Frontend",
        icon: Code,
        items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Redux", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "REST APIs", "Java", "Spring Boot", "SQL"],
    },
    {
        category: "Tools",
        icon: Wrench,
        items: ["Git", "GitHub", "VS Code", "Jira", "Postman", "Vite"],
    },
];

export const experience = [
    {
        company: "Verizon",
        role: "Software Engineer",
        period: "2022 - Present",
        description: "Developing and maintaining critical web applications. improving performance and user experience. Collaborating with cross-functional teams to deliver high-quality software solutions.",
        technologies: ["React", "Java", "Spring Boot", "Oracle"],
    },
];

export const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
        tech: ["React", "Tailwind", "Chart.js"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
    },
    {
        title: "Task Management App",
        description: "A drag-and-drop task management tool inspired by Trello, featuring team collaboration.",
        tech: ["React", "Redux", "Firebase"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2372&ixlib=rb-4.0.3"
    },
    {
        title: "Weather Forecast",
        description: "Minimalist weather application using OpenWeatherMap API with location-based forecasts.",
        tech: ["React", "API Integration", "CSS Modules"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1592210454359-9043f53db363?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3"
    },
];
