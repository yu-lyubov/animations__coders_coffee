import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="pl-[5rem] pr-[5rem] my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h6
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h6>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores blanditiis cumque dicta ducimus
          error est id ipsam, iusto laborum minima nam nisi officia.
        </motion.p>
      </div>
      {/* card section */}
    </div>
  );
};

export default Services;