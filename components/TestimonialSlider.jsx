import Image from "next/image";
import { FaCertificate } from "react-icons/fa";

const certificateData = [
  {
    image: "/cert-placeholder-1.png",
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    date: "Jun 2024",
    link: "#",
    description:
      "Comprehensive program covering HTML, CSS, JavaScript, React and backend development with Django.",
  },
  {
    image: "/cert-placeholder-2.png",
    title: "Django Web Developer",
    issuer: "Udemy",
    date: "Dec 2023",
    link: "#",
    description: "Built multiple Django apps and REST APIs; deployed to cloud providers.",
  },
  {
    image: "/cert-placeholder-3.png",
    title: "Intro to Machine Learning",
    issuer: "edX",
    date: "Mar 2025",
    link: "#",
    description: "Foundational concepts in ML, model building, and evaluation.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
      {certificateData.map((cert, i) => (
        <article
          key={i}
          className="bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-white/5">
              <Image src={cert.image} alt={cert.title} width={120} height={120} className="object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <FaCertificate className="text-accent" />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>
              <div className="text-sm text-white/70 mb-2">{cert.issuer} • {cert.date}</div>
              <p className="text-sm text-white/80 mb-4">{cert.description}</p>

              <div className="flex items-center gap-3">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn px-4 py-2 rounded-full bg-accent/20 hover:bg-accent transition-colors"
                >
                  View Certificate
                </a>
                <span className="text-xs text-white/60">Verified</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TestimonialSlider;
