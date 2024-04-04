import type Course from "./Course";
import type Education from "./Education";
import type Employement from "./Employement";
import type Language from "./Language";
import type Link from "./Link";
import type PersonalDetails from "./PersonalDetails";
import type Skill from "./Skill";

export interface Resume {
    personal_details: PersonalDetails,
    professional_summary: string | null,
    employement_history: Employement[],
    education: Education[],
    links: Link[],
    skills: Skill[],
    langages: Language[],
    courses: Course[],
    hobbies: string[],
}
