import { motion } from "framer-motion";
import { Binoculars, SearchIcon } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import FigmaButton from "@/components/ui/figma-button";

const TutoryContent = () => {
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
            Finding a tutor shouldn’t be a puzzle
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            Students {"("}and often their parents{")"} rely heavily on
            word-of-mouth, printed flyers, or Facebook groups to find tuition
            classes. This process is slow, unfiltered, and often biased. It’s
            hard to know if the tutor is credible, available, or even still
            teaching. On the other hand, many tutors have limited ways to reach
            new students aside from physical posters or expensive online ads.
            There’s no central platform where both parties can connect
            meaningfully.
          </p>
          <img
            src="/tutory/tutory-context.webp"
            alt="tutory"
            className="w-full h-auto rounded-lg pt-8"
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
            GOAL
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Connect students with tutors fast, simple
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            We explored market leading tools and conducted interviews with
            procurement professionals to uncover friction points.
          </p>

          <div className="max-w-3xl mx-auto pt-20 pb-16">
            <div className="flex items-center gap-4 p-8 bg-gray-50 border-1 border-gray-200 rounded-t-2xl rounded-b-md mb-3">
              <div className="flex items-center justify-center p-2 bg-[#bfe8fc] rounded-lg w-10 h-10 hover:bg-[#d1f0ff] transition-colors duration-300 ease-in-out border-1 border-[#22b5ff]">
                <SearchIcon className="w-6 h-6 text-[#22b5ff]" />
              </div>
              <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                <span className="font-bold">Tutors -</span> Tutors to list their
                teaching services in a structured, professional, and searchable
                way.
              </p>
            </div>
            <div className="flex items-center gap-4 p-8 bg-gray-50 border-1 border-gray-200 rounded-t-md rounded-bl-none rounded-br-2xl mb-3">
              <div className="flex items-center justify-center p-2 bg-[#bfe8fc] rounded-lg w-10 h-10 hover:bg-[#d1f0ff] transition-colors duration-300 ease-in-out border-1 border-[#22b5ff]">
                <Binoculars className="w-6 h-6 text-[#22b5ff]" />
              </div>
              <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                <span className="font-bold">Students & perants -</span> to
                search for tutors based on subject, grade level, location, and
                other preferences without needing to log in
              </p>
            </div>
          </div>
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
            Design
          </p>
          <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
            Minimal UI. Maximum clarity.
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            The UI is clean and focused. I prioritized simplicity and
            mobile-first design, considering the target audience. The color
            palette is soft, friendly, and trustworthy.
          </p>

          <div className="w-full max-w-xs mx-auto mt-6">
            <Slider
              {...{
                dots: false,
                arrows: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: false,
                centerMode: false,
                cssEase: "linear",
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="px-2">
                  <div className="mx-2 transition-shadow duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={`/tutory/tutory-${index}.png`}
                        alt={`Tutory mobile screen ${index}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-center mt-6">
            <FigmaButton href="https://www.figma.com/design/VpkDJWkOFUhcXW7jbY6sHs/Tutorfinder?node-id=23-939&t=ug0C2sA1bQDmq2Yy-1" />
          </div>
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
            Designing for real needs, not assumptions
          </h3>
          <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
            Designing Tutory taught me that simplicity often beats
            sophistication. I realized students aren’t looking for advanced
            features, they just want to quickly find a tutor they can trust.
            Features like messaging, reviews, or sign ups felt unnecessary for
            this context; instead, a clear profile and a booking button were
            more valuable. Talking to real users helped me understand what
            matters: trust, speed, and ease. This project reminded me that good
            design isn’t about adding more it’s about removing friction and
            focusing on what actually solves the problem.
          </p>
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

export default TutoryContent;
