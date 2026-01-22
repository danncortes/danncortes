export interface Project {
  name: string;
  description: string;
  responsibilities: string;
  techStack: string;
  link?: string;
}

export interface Experience {
  name: string;
  from: string;
  to: string;
  projects: Project[];
  link?: string;
  nameNote?: string;
  position: string;
  location?: string;
  isIntroArray?: boolean;
  intro?: string;
}
