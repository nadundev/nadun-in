"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Binoculars, GitCompareArrows, SearchIcon } from "lucide-react";

export default function SisyphusContent() {
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
            Context
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Disconnected Tools, Disconnected Insights
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            Managing multiple vendors using spreadsheets, emails, and legacy
            systems often leads to disorganization, missed deadlines, and weak
            accountability. This dashboard was designed to centralize all
            vendor-related information into a single, intuitive interface to
            support proactive decision-making.
          </p>
          <img
            src="/sisyphus/sisyphus-context.webp"
            alt="Sisyphus"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 pt-16">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
            Research
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Listening, Learning, and Looking Deeper
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            We explored market leading tools and conducted interviews with
            procurement professionals to uncover friction points.
          </p>

          <div className="max-w-3xl mx-auto pt-20 pb-16">
            <div className="flex items-center gap-4 p-8 bg-gray-50 border-1 border-gray-200 rounded-t-2xl rounded-b-md mb-3">
              <div className="flex items-center justify-center p-2 bg-[#EBFFEE] rounded-lg w-10 h-10 hover:bg-[#ddfde2] transition-colors duration-300 ease-in-out border-1 border-green-400">
                <SearchIcon className="w-6 h-6 text-[#14AE5C]" />
              </div>
              <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                <span className="font-bold">
                  Need for Real-Time Visibility -
                </span>{" "}
                Without standardized benchmarks or consistent tracking,
                comparing vendors becomes subjective. Users need clear,
                quantifiable metrics to evaluate vendor reliability, delivery
                timelines, and compliance.
              </p>
            </div>
            <div className="flex items-center gap-4 p-8 bg-gray-50 border-1 border-gray-200 rounded-t-md rounded-b-md mb-3">
              <div className="flex items-center justify-center p-2 bg-[#EBFFEE] rounded-lg w-10 h-10 hover:bg-[#ddfde2] transition-colors duration-300 ease-in-out border-1 border-green-400">
                <GitCompareArrows className="w-6 h-6 text-[#14AE5C]" />
              </div>
              <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                <span className="font-bold">
                  Comparing Performance Made Simple -
                </span>{" "}
                Without Without standardized benchmarks or consistent tracking,
                comparing vendors becomes subjective. Users need clear,
                quantifiable metrics to evaluate vendor reliability, delivery
                timelines, and compliance. By surfacing key performance
                indicators side-by-side, the dashboard supports more objective
                vendor selection and renewal decisions.
              </p>
            </div>
            <div className="flex items-center gap-4 p-8 bg-gray-50 border-1 border-gray-200 rounded-t-md rounded-bl-none rounded-br-2xl mb-3">
              <div className="flex items-center justify-center p-2 bg-[#EBFFEE] rounded-lg w-10 h-10 hover:bg-[#ddfde2] transition-colors duration-300 ease-in-out border-1 border-green-400">
                <Binoculars className="w-6 h-6 text-[#14AE5C]" />
              </div>
              <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                <span className="font-bold">
                  Insights That Informed Our Design -
                </span>{" "}
                Our user interviews and market analysis revealed one major
                theme: complexity hinders clarity. Teams want flexibility but
                not at the cost of usability. We translated these pain points
                into a dashboard experience that is clean, functional, and
                focused empowering users without overwhelming them.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center gap-2 border-1 border-green-400 bg-green-100 rounded-lg p-8">
            <ExclamationTriangleIcon className="w-6 h-6 text-[#14AE5C]" />
            <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-[#14AE5C]">
              Challenge
            </p>
            <p className="text-lg font-mono font-medium text-gray-700 max-w-3xl leading-normal text-center">
              How might we help procurement and operations teams manage multiple
              vendors efficiently, while simplifying contract tracking,
              performance evaluation, and task management within a single
              intuitive dashboard?
            </p>
          </div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <hr className="pb-16"/>
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
            Wireframes
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Laying the Groundwork
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            This stage allowed for rapid iteration and user feedback, shaping a
            dashboard that balances functionality with clarity.
          </p>
          <button
            onClick={() =>
              window.open("/sisyphus/sisyphus-wireframe.webp", "_blank")
            }
            className="mt-4 mb-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white font-mono font-medium rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
          >
            View Wireframe
          </button>
          <img
            src="/sisyphus/sisyphus-wireframe.webp"
            alt="Sisyphus"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
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
            Bringing the Vision to Life
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            After multiple iterations and user-focused refinements, the final
            design delivers a clean, data-rich dashboard experience.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.figma.com/design/PZbPdnCQlflrwWAvRRX0iS/Vendor-Management-Dashboard?node-id=0-1&t=bdwACMUru7ihLfQS-1",
                "_blank"
              )
            }
            disabled={true}
            className="mt-4 mb-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white font-mono font-medium rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
          >
            View Design
          </button>
          <img
            src="/sisyphus/sisyphus-final.webp"
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
            Design is in the Details
          </h3>
                     <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
             This project sharpened my ability to translate complex data into
             simple, meaningful UI components. I gained deeper insights into
             information architecture, modular design, and the importance of
             user-centered research. Most importantly, I learned that even in
             enterprise tools, thoughtful design has the power to create calm in
             the chaos—and help teams do their best work faster.
           </p>
           <img
             src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2ppbTU0cnlkMGgzZGw5dDBneGJodmh5ZTd3djg5d3lmZm5obnhxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eZNKPdMP18UjPT9jxA/giphy.gif"
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
}
