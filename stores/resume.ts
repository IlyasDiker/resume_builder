import type { Resume } from "~/types/Resume"

export const useResumeStore = defineStore('resume', {
    state: () => ({
        currentResume: { } as Resume,
        resumes: [

        ],
    }),
    actions: {
        getEmptyResume: () : Resume => {
            return {
                personal_details: {
                    wanted_job_title: null,
                    first_name: null,
                    last_name: null,
                    email: null,
                    phone: null,
                    country: null,
                    city: null,
                },
                professional_summary: '',
                employement_history: [],
                education: [],
                links: [],
                skills: [],
                langages: [],
                courses: [],
                hobbies: []
            }
        }
    },
})