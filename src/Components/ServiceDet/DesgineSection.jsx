import { useParams } from "react-router-dom";
import { IMAGES } from "../../Utils/images";

const DesgineSection = () => {
  const params = useParams()?.id;

  return (
<main className="text-white flex items-center justify-between md:flex-row flex-col md:gap-0 gap-6 max-w-screen-lg mx-auto w-full">


      {/* Text section */}
      <div className="md:w-[40%] ">
        <h3 className="text-3xl font-bold text-white">Our UI/UX Design and
        Development Services</h3>
        <p className="text10 mt-2">
        Our UX/UI designers create compelling web designs that strengthen your
        brand identity while fostering meaningful user connections.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 gap-4 md:w-auto w-full ">
        <div className="flex  items-center justify-center flex-col gap-4">
          {/* first Card */}
          <div className="bg-gradient-to-t bg-[#00AEEF] from-[#006489] md:p-8 p-4 rounded-2xl md:w-auto w-full ">
            <div className="flex items-center gap-4 py-4">
              <span>
                <img
                  className="md:w-10 sm:w-16 w-10 "
                  src={IMAGES.GROUP}
                  alt={IMAGES.GROUP}
                />
              </span>
              <span className="text1 font-semibold">50+</span>
            </div>
            <p className="text6">In-House Talent</p>
          </div>
          {/* Second Card */}
          <div className="bg-gradient-to-t bg-[#00AEEF] from-[#006489] md:p-8 p-4 rounded-2xl md:w-auto w-full ">
            <div className="flex items-center gap-4 py-4">
              <span>
                <img
                  className="md:w-10 sm:w-16 w-10 "
                  src={IMAGES.INDUSTRY}
                  alt={IMAGES.INDUSTRY}
                />
              </span>
              <span className="text1 font-bold">10+</span>
            </div>
            <p className="text6">In-House Talent</p>
          </div>
        </div>
        {/* Crad 3 */}

        <div className="bg-gradient-to-t bg-[#00AEEF] from-[#006489] flex flex-col items-center justify-center gap-4 rounded-2xl md:p-0 md:p-8 p-4 relative shadow-lg shadow-black/30">
          <div className="flex items-center justify-center flex-col gap-2">
            <span>
              <img
                className="md:w-10 sm:w-16 w-10"
                src={IMAGES.SMILE}
                alt={IMAGES.SMILE}
              />
            </span>
            <span className="text1 font-semibold">90+</span>
            <p className="text6">In-House Talent</p>
          </div>
        </div>
        {/* shadow */}

      </div>
    </main>
  );
};

export default DesgineSection;