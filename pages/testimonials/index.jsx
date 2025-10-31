import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Certificates &amp; <span className="text-accent">Achievements</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="mb-12 max-w-2xl mx-auto text-white/80"
        >
          A curated list of certificates and notable achievements that
          demonstrate skills and continuous learning. Click each card to view
          the certificate or more details.
        </motion.p>

        {/* certificates grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
