import { IMAGES } from "./images";

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
