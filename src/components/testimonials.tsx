import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote: `Nadun was a supportive and inspiring mentor at Calcey, greatly impacting my growth. He leads by example, values collaboration, and brings deep expertise in full-stack development and UX.`,
      name: "Senesh Sirimanne",
      avatar:
        "/images/testimonials/senesh.png",
    },
    {
      quote: `Working with Nadun was a game-changer for our startup. His technical expertise and problem-solving skills are unmatched.`,
      name: "Aravind Prabash",
      avatar:
        "/images/testimonials/aravind.png",
    },
    {
      quote: `Nadun is a brilliant UI engineer whom I had the pleasure of working with at Calcey. Nadun consistently impressed me with his expertise in UI concepts, design, and coding.`,
      name: "Hasaru Dayananda",
      avatar:
        "/images/testimonials/hasaru.png",
    },
  ];
  return (
    <div className="my-4 px-4 py-4">
      <SectionHeading className="mb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-[var(--shadow-aceternity)] transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700 dark:text-neutral-200">{quote}</p>
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-300">{name}</p>
      </div>
    </div>
  );
};
