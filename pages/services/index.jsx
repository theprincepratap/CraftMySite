import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const education = [
  {
    period: "2021 – 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SNS Jehanabad",
    highlights:
      "Built strong foundations in programming, databases, and software development. Developed multiple academic and personal projects using Django and React.",
  },
  {
    period: "2025 – 2027 (Ongoing)",
    degree: "Master of Computer Applications (MCA)",
    institution: "VIT Chennai",
    highlights:
      "Focus Areas: Advanced web technologies, AI & Machine Learning, Data Science, and Full-Stack Development.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Education & Experience <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-left"
            >
              <strong>🎓 Education Tracker</strong>
            </motion.p>
          </div>

          {/* education list */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="flex-shrink-0 text-accent font-semibold">
                    <div className="text-sm">{edu.period}</div>
                  </div>

                  <div>
                    <div className="text-xl font-bold">{edu.degree}</div>
                    <div className="text-sm text-white/70 mb-2">Institution: {edu.institution}</div>
                    <div className="text-white/80">{edu.highlights}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
