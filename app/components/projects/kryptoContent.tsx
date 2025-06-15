import React from "react";
import { motion } from "framer-motion";

const kryptoContent = () => {
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
            Crafting a Futuristic Feel for a Crypto App
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            The aim was to design a landing page that feels modern, tech-savvy,
            and trustworthy—key traits for any product in the cryptocurrency
            space. I used a dark theme with vibrant accent colors to evoke a
            sense of innovation and digital sophistication, while also aligning
            with typical Web3 design trends.
            <br />
            <br />A bold headline, concise value proposition, and clear CTA were
            positioned above the fold to immediately capture user interest. I
            leveraged gradients and glow effects subtly to give the design depth
            and visual intrigue without sacrificing readability. Icons and
            visual cues were used throughout to help guide users through key
            features like wallet integration, security, and real-time tracking.
            <br />
            <br />
            Every element—from grid spacing to button states—was fine-tuned for
            clarity and flow, making sure users would easily understand what the
            product does and why they should care.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.figma.com/design/3Q1WicrsvgGmsz6xMRdS3L/KRYPTO?node-id=0-1&t=nFMZtNtlWkYnFZtL-1",
                "_blank"
              )
            }
            className="mt-4 mb-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white font-mono font-medium rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
          >
            View Design
          </button>
          <img
            src="/krypto/krypto-design.webp"
            alt="Krypto"
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
            Exploring Visual Design for Emerging Tech
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            This project helped me deepen my understanding of how to design for
            new and emerging markets. Designing for crypto means balancing trust
            with modernity—using visual language that feels secure yet
            forward-thinking.
            <br />
            <br />I also learned how to work more confidently with dark mode
            interfaces, especially when it comes to color contrast, legibility,
            and maintaining visual balance. I became more intentional about
            micro-interactions and how small layout decisions impact scanability
            and engagement.
          </p>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRsbzJhZWtlbmM3c3NrbGdlMnFxd2sxc3NzbXBkdjk1dWhxYzR2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BRVgi6Ai7WYyeKAMnG/giphy.gif"
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

export default kryptoContent;
