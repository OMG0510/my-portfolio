export interface Project {
    id: number;
    title: string;
    description: string;
    skills: string[];
    duration: string;
    role?: string;
    outcomes?: string[];
    image?: string;
    github?: string;
    demo?: string;
  }
  
  export interface Experience {
    id: number;
    title: string;
    company?: string;
    location?: string;
    duration: string;
    description?: string;
    responsibilities?: string[];
  }
  
  export interface Education {
    id: number;
    degree: string;
    institution: string;
    location?: string;
    duration: string;
    score?: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
    category: string;
    icon?: string;
    level?: number;
  }
  
  export interface Achievement {
    id: number;
    title: string;
    issuer?: string;
    date?: string;
    description?: string;
  }
  
  export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: string;
  }