
export type ProjectType = {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

export const projects: ProjectType[] = [
	{
		id: 0,
		title: "BeastFit GymWear Website",
		about: "GymWear Ecommerce website including all the details from the signin/up page using JWT, add to cart and add to wishlist, and submitting customer orders.",
		description: "",
		thumbnail: "/gymwear.png",
		tech: ["React", "TypeScript", ".NET API", "Bootstrap"],
		github: "",
		link: "https://beastfitwear.vercel.app/",
		filter: ["All", ".NET API","React TS"],
		type: "Full Stack Development",
	},
	{
		id: 1,
		title: "BeastFit Back-Office",
		about: "GymWear Ecommerce website back office to control the client side, using JWT as auth system.",
		description: "",
		thumbnail: '/gymwearadmin.png',
		tech: ["React", "TypeScript", ".NET API", "Tailwind css"],
		github: "",
		link: "https://beastfitwearbackoffice.vercel.app/",
		filter: ["All", ".NET API", "React TS"],
		type: "Full Stack Development",
	},
	{
		id: 2,
		title: "BeastFit API",
		about: "GymWear Ecommerce website API",
		description: "",
		thumbnail: '/gymapi.png',
		tech: [".NET", "API", "EF ", "Pomelo", "Automapper", "DTOs"],
		github: "https://github.com/AliSleiman0/BeastFit_GymWear_.NET_API.git",
		link: "",
		filter: ["All", ".NET API"],
		type: "Full Stack Development",
	},
	{
		id: 3,
		title: "Automotives Ecommerce",
		about: "A website built with PHP, Ajax, JQuery, Bootstrap with vanilla HTML and CSS. This website include all the details to make it functional, responsive and fast with the best user experience!",
		description: "",
		thumbnail: '/automotive.png',
		tech: ["PHP", "Bootstrap", "AJax","JQuerys"],
		github: "https://github.com/AliSleiman0/CarDealershipWebsite.git",
		link: "",
		filter: ["All", "PHP"],
		type: "Full Stack Development",
	},
	{
		id: 4,
		title: "Automotives Admin Panel",
		about: "An admin panel including all the details needed for a secure and monitering platform for an eccomerce automotives website!",
		description: "",
		thumbnail: '/automotiveadmin.png',
		tech: ["PHP", "Bootstrap", "AJax", "JQuerys"],
		github: "https://github.com/AliSleiman0/CarDealershipWebsite.git",
		link: "",
		filter: ["All", "PHP"],
		type: "Full Stack Development",
	},

	
	{
		id: 5,
		title: "Ali's Portfolio",
		about: "MY ALL IN ALL SKILLS AND PROJECTS",
		description: "",
		thumbnail: "/Portfolio.png",
		tech: ["React", "TypeScript", "TailwindCSS"],
		github: "https://github.com/AliSleiman0/AliSleiman_PorfolioWebsite.git",
		link: "https://alisleimanportfolio.vercel.app/",
		filter: ["All", "React TS"],
		type: "Web Application",
	},
	{
		id: 6,
		title: "Coffee Shop",
		about: "A full stack web application that have add to cart, view items, and submit order. After all, Who does not love coffee!?",
		description: "",
		thumbnail: "/coffeshop.png",
		tech: ["PHP", "Bootstrap","HTML", "CSS"],
		github: "https://github.com/AliSleiman0/CoffeeShop0.git",
		link: "",
		filter: ["All", "PHP"],
		type: "Web Application",
	},
	{
		id: 7,
		title: "Bookstore .NET API",
		about: "A .NET backend API built with EF library. This API is tested and considered an implementation of microservices, built at my previous intership at Acksession!",
		description: "",
		thumbnail: "bookstore api.png",
		tech: [".NET", "API", "EF ", "Pomelo", "Automapper", "DTOs"],
		github: "https://github.com/AliSleiman0/BookStoreManagment_API_Backend.git",
		link: "",
		filter: ["All", ".NET API"],
		type: "Backend API",
	},

];
