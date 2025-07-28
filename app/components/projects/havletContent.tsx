import React from "react";
import { motion } from "framer-motion";

const HavletContent = () => {
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
                        Section #1
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        Hero Section
                    </h3>
                    <img
                        src="/havlet/hero.webp"
                        alt="Hero"
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
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                        Section #2
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        Team
                    </h3>
                    <img
                        src="/havlet/team.webp"
                        alt="Hero"
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
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                        Section #3
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        Solutions
                    </h3>
                    <img
                        src="/havlet/solutions.webp"
                        alt="Hero"
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
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                        Section #4
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        Provide
                    </h3>
                    <img
                        src="/havlet/Partners.webp"
                        alt="Hero"
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
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                        Section #5
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        CTA
                    </h3>
                    <img
                        src="/havlet/CTA.webp"
                        alt="Hero"
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
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                        Section #5
                    </p>
                    <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                        Footer
                    </h3>
                    <img
                        src="/havlet/Footer.webp"
                        alt="Hero"
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
        </div>
    );
};

export default HavletContent;