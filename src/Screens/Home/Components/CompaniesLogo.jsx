import { useEffect, useRef } from "react";
import { IMAGES } from "../../../Utils/images";

const CompaniesLogo = () => {
    const carouselContainerRef = useRef(null);

    useEffect(() => {
        const scrollerContent = Array.from(carouselContainerRef.current.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            carouselContainerRef.current.appendChild(duplicatedItem);
        });
    }, []);

    const logoImages = [
        { img: IMAGES.ZAPIER },
        { img: IMAGES.SPOTIFY },
        { img: IMAGES.ZOOM },
        { img: IMAGES.SLACK },
        { img: IMAGES.AMAZON },
        { img: IMAGES.ADOBE },
    ];

    return (
        <div className="w-full py-4">
            <div className="text-center flex flex-col items-center justify-between">
                <div className="w-full flex items-center whitespace-nowrap overflow-hidden gap-24">
                    <div className="bg-secondary1 rounded-md overflow-hidden">
                        <div className="[mask:linear-gradient(to_right,transparent,white_25%,white_75%,transparent)]">
                            <div
                                ref={carouselContainerRef}
                                className="flex justify-between animate-carousel w-max"
                            >
                                {logoImages.map((img, index) => (
                                    <div key={index} className="-rotate-45 flex flex-col gap-5">
                                        <div className="mt-4">
                                            <img
                                                src={img.img}
                                                className="lg:w-[200px] md:w-[120px] sm:w-[80px] w-[60px] object-contain rotate-45 text-white"
                                                alt={img.img}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesLogo;
