import React from "react";
import { motion } from "framer-motion";

const SkilledContent = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
            Design
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Designing to Build Trust and Inspire Action
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            The goal was to create a clean, professional, and conversion-focused
            landing page for an eLearning platform targeting adults looking to
            upskill. I used a structured layout with clear hierarchy to guide
            the user through the value proposition—from problem to solution to
            action. The visual design leaned on simplicity and clarity. I kept
            the typography strong and direct, and introduced pops of color to
            draw attention to calls-to-action without overwhelming the user.
            <br />
            <br />
            Illustrations and iconography were used to make the experience
            approachable and human-centered. I also ensured responsive behavior
            across breakpoints, optimizing usability across devices. By
            strategically placing testimonials and benefits early in the flow, I
            aimed to build user trust quickly. Every section was crafted with
            the goal of reducing cognitive load and making the decision to “Get
            Started” as frictionless as possible.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.figma.com/design/gE8Ux0a45HGSyp40q07s1R/Skilled-Landing-Page?node-id=0-1&t=Lo8zurmg9AGLAI9r-1",
                "_blank"
              )
            }
            className="mt-4 mb-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white font-mono font-medium rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
          >
            View Design
          </button>
          <img
            src="/skilled/skilled-design.webp"
            alt="Sisyphus"
            className="w-full h-auto rounded-lg"
            style={{
              imageRendering: "crisp-edges" as const,
              maxWidth: "100%",
              height: "auto",
            }}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <hr className="pb-16" />
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
            Learnings
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Refining Landing Page UX for Conversions
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            This project gave me hands-on experience designing for marketing
            goals—specifically, user acquisition and conversion. I learned how
            to structure content to lead users toward action using UX copy,
            layout rhythm, and visual emphasis.
            <br />
            <br />
            I also gained more practice with
            mobile-first thinking and accessibility fundamentals. Small touches
            like readable font sizing, contrast, and tap-friendly elements
            helped improve overall UX. Lastly, collaborating with real copy
            helped me focus more on intention and tone in design decisions, and
            how to align visuals with brand goals.
          </p>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVsYmk5ajhzbG51YzdncTNybXlteHZrOXJyaGhqcDZ1N242NTl2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PY1ky7gRfduFikyoDK/giphy.gif"
            alt="Celebration GIF"
            className="w-full max-w-md h-auto rounded-lg mt-6"
            loading="lazy"
          />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <hr className="pb-16" />
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
        <p className="text-center text-sm font-mono text-gray-500">
          © 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SkilledContent;
