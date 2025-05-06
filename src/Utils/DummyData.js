import { IMAGES } from "./images";
import web from "../Assets/images/devicon.gif"
import application from "../Assets/images/appicon.gif"
import quality from "../Assets/images/qualityicon.gif"
import marketing from "../Assets/images/marketingicon.gif"
import graphics from "../Assets/images/graphicsicon.gif"
import uiux from "../Assets/images/uiuxicon.gif"
import serviceicon from "../Assets/images/serviceicon.gif"
import platte from "../Assets/images/platte.gif"
import best from "../Assets/images/best.gif"

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

export const home_banner = [
    IMAGES.BANNERONE,
    IMAGES.BANNERTWO,
    IMAGES.BANNERTHREE,
    IMAGES.BANNERFOUR,

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
        image: IMAGES.TEAMONE,
        facebook: IMAGES.FB,
        instagram: IMAGES.INSTA,
        linkedin: IMAGES.LINK
    },
    {
        name: "Maya Ali",
        role: "Marketing",
        image: IMAGES.TEAMTWO,
        facebook: IMAGES.FB,
        instagram: IMAGES.INSTA,
        linkedin: IMAGES.LINK
    },
    {
        name: "Mahira Khan",
        role: "Sales Head",
        image: IMAGES.TEAMTHREE,
        facebook: IMAGES.FB,
        instagram: IMAGES.INSTA,
        linkedin: IMAGES.LINK
    },
    {
        name: "Dev Team Lead",
        role: "Ahad Raza Mir",
        image: IMAGES.TEAMFOUR,
        facebook: IMAGES.FB,
        instagram: IMAGES.INSTA,
        linkedin: IMAGES.LINK
    },
]

export const gridData = [
    { type: "image", content: IMAGES.DECOVERONE },
    { type: "image", content: IMAGES.DECOVERTWO },
    {
        type: "text",
        content: {
            title: "Create Your Brand",
            description:
                "Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed vel montis diam. Armet malesuada eget aliquam imperdiet.",
        },
    },
    { type: "image", content: IMAGES.DECOVERTHREE },
    { type: "image", content: IMAGES.DECOVERFOUR },
    { type: "image", content: IMAGES.DECOVERFIVE },
    {
        type: "text",
        content: {
            title: "Make It Famous",
            description:
                "Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed vel montis diam.",
        },
    },
    { type: "image", content: IMAGES.DECOVERSIX },
    { type: "image", content: IMAGES.DECOVERSEVEN },
];

export const OurProcessData = [
    {
        imgsec: [
            IMAGES.PROCESSONE,
            IMAGES.PROCESSTHREE,
            IMAGES.PROCESSTWO,
            IMAGES.PROCESSFOUR,
        ]
    },
    {
        processtext: {
            title: "Our Process",
            description:
                "At our software house, we start by thoroughly understanding client requirements and defining clear project objectives. We then focus on the development phase, where we design, code, and rigorously test the software to ensure it meets high-quality standards. Finally, we deploy the solution and provide ongoing maintenance and support to ensure its optimal performance and continuous improvement.",
        },
    }
]


export const why_choose_us = [
    {
        title: "Fast Service",
        icon: serviceicon,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        title: "World Class Designer",
        icon: platte,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
        title: "Best Quality",
        icon: best,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }

]

export const tab_data = [
    "UI/UX Design",
    "Website Development",
    "Graphic Design",
    "App Development",

]

export const our_blogs_data = [
    {
        title: "Could this VR sketching tool be coming of age for designers in the future?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque",
        image: IMAGES.BLOGONE
    },
    {
        title: "8 Cities That Show You What The Future Will Look Like (Innovative Ideas)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque",
        image: IMAGES.BLOGTWO
    },
    {
        title: "15 Gift Ideas for Mom and Dad. Wherever They Are This Year",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque",
        image: IMAGES.BLOGTHREE
    },
]

export const whyChoseUSIcon = [
    {
        icon: IMAGES.VISION,
        title: "Our Vision"
    },
    {
        icon: IMAGES.MISSION,
        title: "Our Mission"
    },
    {
        icon: IMAGES.TARGET,
        title: "Target Audience"
    }
]


export const whyChoseUSTexts = [
    {
        title: "Company Experience",
        description: `From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative.`
    },
    {
        title: "Company Experience",
        description: `From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative.`
    },
    {
        title: "Company Experience",
        description: `From wireframing to prototyping, our creative UI/UX designers combine strategic thinking and creative expertise to deliver visually captivating designs. From wireframing to prototyping, our creative.`

    }
]