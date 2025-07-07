"use client";

import { Button } from "@/components/ui/button";
import { SpringElement } from "@/components/ui/spring-element";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import GitHubIcon from "@/app/components/icons/GitHubIcon";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";
import AIIcon from "@/app/components/icons/AIIcon";

export default function MainNavigation() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center pt-6 pb-8">
      <div className="flex items-center gap-4">
        <SpringElement key="avatar-spring">
          <Avatar className="size-10">
            <AvatarImage
              draggable={false}
              src="https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg"
            />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
        </SpringElement>
        <motion.h2
          className="text-2xl font-medium font-sans italic text-gray-700 pt-1"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Nadun Nissanka
        </motion.h2>
      </div>
      <div className="flex gap-4">
        <Button
          variant="neutral"
          className="font-mono"
          onClick={() =>
            window.open(
              "https://github.com/nadundev",
              "_blank"
            )
          }
        >
          <GitHubIcon size={16} />
        </Button>
        <Button
          variant="neutral"
          className="font-mono"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nadun-nissanka-31782b19b/",
              "_blank"
            )
          }
        >
          <LinkedInIcon size={16} />
        </Button>
        <Button
          variant="neutral"
          className="font-mono"
          onClick={() => router.push('/ai')}
        >
          <AIIcon size={16} />
        </Button>
      </div>
    </div>
  );
}
