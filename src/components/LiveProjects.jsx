import IndustryMarquee from "./IndustryMarquee";
import ImageSlider from "./ImageSlider";
import placement1 from "@/assets/placement_images/placement1.webp";
import placement2 from "@/assets/placement_images/placement2.webp";
import placement3 from "@/assets/placement_images/placement3.webp";
import placement4 from "@/assets/placement_images/placement4.webp";
import placement5 from "@/assets/placement_images/placement5.webp";
import StatsDashboard from "@/components/newMatrix/stats-dashboard";
import WordPullUp from "./ui/word-pull-up";

const images = [placement1, placement2, placement3, placement4, placement5];

const LiveProjects = () => {
  return (
    <div className="py-20 bg-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="inline-block text-base font-semibold bg-blue-600 text-white dark:bg-blue-500 px-4 py-2 rounded-full tracking-wide uppercase">
              SSIM Placements
            </h2>
            <WordPullUp
              words="Placement Stories"
              className="text-3xl md:text-4xl font-bold tracking-tight text-mainBlue mt-8 mb-0 md:mb-6"
            />
            <ImageSlider images={images} />
            <p className="mt-6 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto leading-relaxed">
              Our students are successfully placed in top companies, gaining
              invaluable experience and insights that enhance their skills and
              career prospects.
            </p>
          </div>
          <div className="text-center">
            <WordPullUp
              words="Our Placement Partners"
              className="text-3xl md:text-4xl font-bold tracking-tight text-mainBlue mt-8 mb-0 md:mb-12"
            />
            <IndustryMarquee className="mt-6" />
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white dark:bg-gray-900 text-lg font-medium text-gray-900 dark:text-white">
                Empowering Future Leaders
              </span>
            </div>
          </div>
          <StatsDashboard />
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
