import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { SectionHeading } from "./section-heading";

export function Collage() {
  const items = [
    {
      title: "Colombo",
      image:
        "/photos/1.jpg",
      className: "absolute top-10 left-0 rotate-[-5deg]",
    },
    {
      title: "Bulathkohupitiya",
      image:
        "/photos/2.jpg",
      className: "absolute top-40 left-[15%] rotate-[-7deg]",
    },
    {
      title: "Kotugoda",
      image:
        "/photos/3.jpg",
      className: "absolute top-5 left-[50%] rotate-[8deg]",
    },
    {
      title: "Paraviwalla",
      image:
        "/photos/4.jpg",
      className: "absolute top-32 left-[85%] rotate-[10deg]",
    },
    {
      title: "Dot's bay",
      image:
        "/photos/5.jpg",
      className: "absolute top-20 right-[15%] rotate-[2deg]",
    },
    {
      title: "Ahangama",
      image:
        "/photos/7.jpg",
      className: "absolute top-24 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Hirikatiya",
      image:
        "/photos/6.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <div className="px-4 py-6">
      <SectionHeading className="mt-4">
        Travelling is in my blood
      </SectionHeading>
      <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
        {items.map((item, idx) => (
          <DraggableCardBody key={item.title + idx} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-40 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
