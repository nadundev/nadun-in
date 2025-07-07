import { motion } from "framer-motion";
import React from "react";

const AfterpayContent = () => {
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
          {/* <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
            Design
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Crafting a Clean, Conversion Focused Shopping Experience
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            Electro Store was designed as a modern, responsive e-commerce
            interface with a focus on clarity, hierarchy, and usability.
            Starting from low-fidelity wireframes, I mapped out the core
            shopping experience covering homepage, product listing, product
            detail, cart, and checkout flows. Each screen was refined into a
            clean, high-fidelity layout in Figma, with deliberate use of spacing
            and type to draw attention to featured products and key CTAs. I
            built a reusable component library that included navigation bars,
            product cards, filters, and banners—all structured to maintain
            visual consistency and scalability. Color choices leaned into a
            confident electric blue paired with dark tones to convey a sleek,
            tech-forward brand. The interface was prototyped with realistic
            interactions and hover states, enabling stakeholders to preview
            typical user journeys, including browsing, adding to cart, and
            initiating checkout. Special attention was given to responsive
            behavior, ensuring that the design adapted seamlessly from mobile to
            large screen, while maintaining functional and visual coherence.
          </p> */}
          <button
            onClick={() =>
              window.open(
                "https://www.figma.com/design/qkJ3ZI4lU0ecgZTzJyzcB2/Project02---Afterpay-Redesign?node-id=104-1137&t=BLCy8K01dbd1vgKN-1",
                "_blank"
              )
            }
            className="mt-4 mb-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white font-mono font-medium rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
          >
            View Design
          </button>
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

export default AfterpayContent;
