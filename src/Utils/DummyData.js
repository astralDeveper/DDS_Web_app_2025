import { IMAGES } from "./images";
import web from "../Assets/images/devicon.gif"
import application from "../Assets/images/appicon.gif"
import quality from "../Assets/images/qualityicon.gif"
import marketing from "../Assets/images/marketingicon.gif"
import graphics from "../Assets/images/graphicsicon.gif"
import uiux from "../Assets/images/uiuxicon.gif"

export const nav_items = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Careers",
        path: "/careers"
    },
    {
        name: "Blogs",
        path: "/blogs"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

export const footerData = [
    {
        title: "Contact Us",
        items: [
            { icon: IMAGES.PHONE, label: "+1234567890" },
            { icon: IMAGES.MAIL, label: "support@domain.com" },
            { icon: IMAGES.LOCATION, label: "West Virginia, USA" },
            { icon: IMAGES.CALENDAR, label: "Monday to Friday" },
        ],
    },
    {
        title: "Our Services",
        items: [
            { label: "Web Design" },
            { label: "Branding Design" },
            { label: "Digital Marketing" },
            { label: "UI/UX" },
            { label: "Social Advertising" },
        ],
    },
    {
        title: "Quick Links",
        items: [
            { label: "Work" },
            { label: "About Us" },
            { label: "Careers" },
            { label: "Blog" },
            { label: "Contact Us" },
        ],
    },
];


export const services_data = [
    {
        title: "Website Development",
        image: web,
        description: "Our web development service creates custom, high-performance websites and web applications tailored to your business needs."
    },
    {
        title: "App Development",
        image: application,
        description: "Our web development service creates custom, high-performance websites and web applications tailored to your business needs."
    },
    {
        title: "Quality Assurance",
        image: quality,
        description: "Our Quality Assurance service ensures your software is thoroughly tested for functionality, performance, and security, delivering a flawless user experience."
    },
    {
        title: "Digital Marketing",
        image: marketing,
        description: "Our Digital Marketing service helps boost your brand's online presence through targeted strategies in SEO, social media, and paid advertising."
    },
    {
        title: "Graphic Design",
        image: graphics,
        description: "Our Graphic Design service creates visually stunning and impactful designs that elevate your brand and engage your audience."
    },
    {
        title: "UI UX Design",
        image: uiux,
        description: "Our UI/UX service designs intuitive, user-centered interfaces and seamless experiences that enhance usability and drive engagement."
    }
]


export const reviews_data = [
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWONE,
        rating: 4
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWTWO,
        rating: 3
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWTHREE,
        rating: 5
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWFOUR,
        rating: 2
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWFIVE,
        rating: 1
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWSIX,
        rating: 5
    },
    {
        name: "Gwen Stacy",
        review: "Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentes neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.",
        image: IMAGES.REVIEWSEVEN,
        rating: 4
    },
]

export const team_data = [
    {
        name: "Hassan Soomro",
        role: "Creative Lead",
        image: IMAGES.TEAMONE
    },
    {
        name: "Maya Ali",
        role: "Marketing",
        image: IMAGES.TEAMTWO
    },
    {
        name: "Mahira Khan",
        role: "Sales Head",
        image: IMAGES.TEAMTHREE
    },
    {
        name: "Dev Team Lead",
        role: "Ahad Raza Mir",
        image: IMAGES.TEAMFOUR
    },
]