import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/idone.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a NEXT.JS Healthcare Management System",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MET Artwork Gallery",
    des: "Explore the MET Artwork Gallery, a React.js app that fetches data from the MET API and displays it in a beautiful gallery.",
    img: "ms.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/js.webp",
      "/mongo.png",
      "/Bootstrap.png",
    ],
    link: "https://assignment6-techatat.vercel.app",
    gitHub: "",
  },
  {
    id: 2,
    title: "Fragments Microservice",
    des: "This project involved developing a cloud-based microservice, The primary objectives were to construct the REST API for the Fragments Microservice.",
    img: "/mc.png",
    iconLists: ["/aws.png", "/cognito.png", "/dock.svg", "/ecs.png"],
    link: "",
    gitHub: "https://github.com/Tobun3/fragments",
  },
  {
    id: 3,
    title: "Hotel Reservation System",
    des: "A hotel reservation system that allows users to book rooms, view their reservations, and cancel them. The system was built using Java, and MySQL.",
    img: "/ht1.png",
    iconLists: ["/java.webp", "/mysql.svg"],
    link: "",
    gitHub: "https://github.com/Tobun3/hotel-reservation",
  },
  {
    id: 4,
    title: "Disaster and Emergency Aid Management",
    des: "The app streamlines the distribution of disaster relief supplies by tracking perishable and non-perishable items, ensuring quick delivery through inventory management, shipment facilitation, and data recording for future use.",
    img: "/pj4.png",
    iconLists: ["/cplus.png"],
    link: "",
    gitHub: "https://github.com/Tobun3/Disaster-and-Emergency-Aid-Management",
  },
  {
    id: 5,
    title: "Promptify",
    des: "Promptify is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    img: "/promptify.png",
    iconLists: ["/re.svg", "/next.svg", "/js.webp", "/mongo.png"],
    link: "https://promptify-xi.vercel.app/",
    gitHub: "https://github.com/Tobun3/promptify",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Co-Op Student - Programmer",
    desc: "Ministry of Children, Community and Social Services",
    date: "September 2022 - April 2023",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Cabin Crew",
    desc: "Jetstar Airways",
    date: "June 2015 - December 2021",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/plane.png",
  },
  /*{
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },*/
];

export const myEducation = [
  {
    id: 1,
    title: "Diploma in Computer Programming and Analysis",
    desc: "Seneca Polytechnic",
    date: "2021-2024 (Expected)",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Bachelor Degree of Arts and Science in Business English",
    desc: "South East Asia University",
    date: "2008-2012",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/book.png",
  },
  /*{
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },*/
];

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//     url: "https://github.com/Tobun3",
//   },
//   {
//     id: 2,
//     img: "/link.svg",
//     url: "https://www.linkedin.com/in/techatat-obun-423180240/",
//   },
// ];
