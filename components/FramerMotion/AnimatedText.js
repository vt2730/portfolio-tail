import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedText({
  variants,
  className,
  children,
  infinity,
}) {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      if (infinity) {
        controls.start("hidden");
      }
    }
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
}
