import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, features, image }) => (
  <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-10 border border-slate-100">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
      <div className="md:col-span-3 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 border-b sm:border-r border-slate-100 transition-colors z-10"></div>
        <img
          src={image}
          alt={`Worker ${title?.toLowerCase()}`}
          className="rounded-l-2xl p-5 object-cover max-w-[220px] max-h-[220px] w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="md:col-span-9 p-8 sm:pl-5 flex flex-col justify-between">
          <p className="text-slate-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function Accreditations() {
  const services = [
    {
      description: "Siva Sivani Institute of Management (SSIM) is one of the India’s premier and the first B-School in Telugu speaking states. SSIM started offering management education with an AICTE approved in-take of 40 students in the year 1992 and now the total intake is 300 students every academic year. SSIM is among the handful of business schools in the top qualities, that has been accreditation by various accreditation bodies.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/11/accrediation-1.png"
    },
    {
      description: "Siva Sivani Institute of Management (SSIM), PGDM – BIFS Program has been accredited by Insurance Institute of India (III), Mumbai. III is considered to be one of the best accrediting bodies in the area of Banking, Insurance and Financial Services. SSIM is privileged to receive this accreditation to serve our students in all best possible ways in collaboration with the latest industry needs.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/12/accrediation-5.png"
    },
    {
      description: "Siva Sivani Institute of Management (SSIM) is one of the few institutes to collaborate with Harvard Business School Online for Business Analytics Certification. PGDM – Business Analytics program at SSIM has a global edge to carve our students’ understanding and knowledge in analytics with the support of HBS online certification.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/11/harvard-ssim.png"
    },
    {
      description: "Siva Sivani Institute of Management (SSIM) received the prestigious accreditation from the National Board of Accreditation (NBA), in the year 2020, for its flagship PGDM program. NBA accreditation highlights the true standard of achievements in Postgraduate in business education. This accreditation is considered to be the best standard in the country for all PGDM program.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/11/accreditaton-logo3.png"
    },
    {
      description: "Siva Sivani Institute of Management (SSIM) PGDM programs received accreditation from National Assessment and Accreditation Council (NAAC) in the year 2014 and re-accreditation in the year 2021. NAAC conducts strategic audit it is considered to be the nationally benchmarked system for mentoring, quality improvement, quality assurance and accreditation. NAAC conduct audit to understand the institutes previous performances and their future aspirations.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/11/accreditaton-logo2.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Accreditations
          </h1>
        </div>
        <div className="space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            Building Excellence stands as your steadfast partner in the
            construction industry, dedicated to delivering exceptional outcomes
            with precision and care.
          </p>
        </div>
      </div>

      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}
