import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const verticalLineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const curveVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const legVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        duration: 0.8,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 140 160"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Defs with gradient */}
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-cyan-400" />
            <stop offset="100%" stopColor="currentColor" className="text-cyan-600" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* R vertical line */}
        <motion.rect
          x="30"
          y="20"
          width="10"
          height="110"
          fill="currentColor"
          className="fill-accent"
          rx="5"
          variants={verticalLineVariants}
          filter="url(#logoGlow)"
        />

        {/* R top curve */}
        <motion.path
          d="M 40 20 Q 70 20 70 45 Q 70 60 55 65"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-accent"
          variants={curveVariants}
          filter="url(#logoGlow)"
        />

        {/* R diagonal leg */}
        <motion.line
          x1="50"
          y1="65"
          x2="80"
          y2="130"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="stroke-accent"
          variants={legVariants}
          filter="url(#logoGlow)"
        />

        {/* Accent dot 1 */}
        <motion.circle
          cx="90"
          cy="30"
          r="4"
          fill="currentColor"
          className="fill-accent"
          variants={dotVariants}
          filter="url(#logoGlow)"
        />

        {/* Accent dot 2 */}
        <motion.circle
          cx="100"
          cy="50"
          r="3"
          fill="currentColor"
          className="fill-accent"
          opacity="0.7"
          variants={dotVariants}
          filter="url(#logoGlow)"
        />

        {/* Accent dot 3 */}
        <motion.circle
          cx="85"
          cy="135"
          r="4"
          fill="currentColor"
          className="fill-accent"
          variants={dotVariants}
          filter="url(#logoGlow)"
        />
      </motion.svg>
    </AnimatePresence>
  );
}
