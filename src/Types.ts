export type TechData = {
  name: string;
  level: number;
  scale: number;
  experience: number;
};

export type TechT = {
  name: string;
  experience: number;
  experienceLevel: React.ReactNode;
  className?: string;
  titleClasses?: string;
  showExperience?: boolean;
};

type LevelTypeUnion = "pill" | "bar" | "dots";

export type TechStackProps = {
  data: TechData[];
  height: number;
  bgColor: string;
  color: string;
  type?: LevelTypeUnion;
  width?: number;
  className?: string;
  titleClasses?: string;
  levelClasses?: string;
  stackClasses?: string;
  showExperience?: boolean;
};

export interface ExperienceLevelDotProps {
  scale: number;
  level: number;
  height: number;
  color: string;
  bgColor: string;
  className?: string;
}

export interface BarExperienceLevelProps extends ExperienceLevelDotProps {
  type?: LevelTypeUnion;
  width?: number;
}

export type TagProps = {
  tags: string[];
  className: string;
  itemClass: string;
};

export type CourseData = {
  name: string;
  date: number;
  note: string;
  site: string;
};

export type CourseProps = {
  course: CourseData;
  className: string;
};

export type ProjectData = {
  name: string;
  description: string;
  responsibilities: string;
};

export type WorkExpData = {
  companyName: string;
  nameNote?: string;
  about?: string;
  link: string;
  position: string;
  from: number;
  to: number | null;
  location: string;
  details: string;
  projects: ProjectData[];
  logo: string;
};

export type LanguageData = {
  name: string;
  level: string;
};

export type EducationModel = {
  title: string;
  from: number;
  to: number;
  place: string;
  location: string;
};

export type ContactInfoModel = {
  title: string;
  value: string;
  icon: any;
  label?: string;
  link?: boolean;
  type?: string;
};

export type PersonalDataProps = {
  data: ContactInfoModel[];
  icons: boolean;
  titles?: boolean;
  mode?: "list" | "inline";
  className?: string;
};

export type EducationProps = {};
