import React, { useEffect, useState } from 'react';
import Button from '../Button';

const OurTeam = () => {
    const [sidebarTop, setSidebarTop] = useState(null);

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            const top = sidebar.getBoundingClientRect().top + window.scrollY;
            setSidebarTop(top);
        }
    }, []);

    useEffect(() => {
        if (!sidebarTop) return;

        const handleScroll = () => {
            const sidebar = document.querySelector('.sidebar');
            if (window.scrollY >= sidebarTop - 10) {
                sidebar.classList.add('sticky-sidebar');
            } else {
                sidebar.classList.remove('sticky-sidebar');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sidebarTop]);

    return (
        <div className="container mx-auto px-4 py-8">
            <Button
                btnname='Our Team'
                btnStyle={`text2 font-semibold text-blue_color border border-white_color md:px-4 px-2 py-2 md:py-3 rounded-full mx-auto`}
                disabled={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sticky Sidebar */}
                <div className='py-4'>
                    <div className="sidebar">
                        <h3 className="mainheading font-medium mb-2 text-white_color">Meet With Expert Team</h3>
                        <p className="text2 text-white_color">
                        Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
                        </p>
                    </div>
                </div>

                {/* Team Members */}
                <div className="md:col-span-2 space-y-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow">
                            <h4 className="text-xl font-semibold mb-1">Team Member {i + 1}</h4>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
