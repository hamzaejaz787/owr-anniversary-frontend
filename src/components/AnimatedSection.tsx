import React, { type ReactNode } from "react";
import * as motion from "motion/react-client";

const AnimatedSection: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
