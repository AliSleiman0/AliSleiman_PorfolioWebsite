import api from "./api";

export interface About {
    id: number;
    firstP: string;
    secondP: string;
    thirdP: string;
    fourthP: string;
}

// Get all About entries
export const getAbout = async (): Promise<About> => {
    const url = `/About/1`;
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching About section with ID `, error);
        throw error;
    }
};


export interface BaseProject {
    id: number;
    title: string;
    description: string;
    techUsed: string;
    githubUrl?: string;
    liveDemoUrl?: string;
    imgSrc: string;
}

const createProjectApi = <T extends BaseProject>(endpoint: string) => ({
    // Get all projects
    getAll: async (): Promise<T[]> => {
        try {
            const response = await api.get(`/${endpoint}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${endpoint} projects:`, error);
            throw error;
        }
    },

});
// Create API instances for each project type
export const reactTsProjectsApi = createProjectApi('ReactTsProjects');
export const phpProjectsApi = createProjectApi('PhpProjects');
export const netApiProjectsApi = createProjectApi('NetApiProjects');



// Common skill interface
export interface Skill {
    id: number;
    skillName: string;
}

// Generic skill functions
const createSkillApi = (endpoint: string) => ({
    getAll: async (): Promise<Skill[]> => {
        try {
            const response = await api.get(`/${endpoint}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${endpoint} skills:`, error);
            throw error;
        }
    },
});

// Create API instances for each skill type
export const skillsFApi = createSkillApi('SkillsF'); // Front-end skills
export const skillsBApi = createSkillApi('SkillsB'); // Back-end skills
export const skillsGApi = createSkillApi('SkillsG'); // General skills

export interface Social {
    id: number;
    linkedinUrl: string;
    githubUrl: string;
    instaUrl: string;
}

export const getAllSocials = async (): Promise<Social[]> => {
    const url = '/Socials';
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching socials:", error);
        throw error;
    }
};
export interface Welcome {
    id: number;
    title: string;
    subtitle: string;
    imgSrc: string;
    skills: string;
}

export const getWelcome = async (): Promise<Welcome> => {
    const url = `/Welcome`;
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching Welcome section with ID 1`, error);
        throw error;
    }
};