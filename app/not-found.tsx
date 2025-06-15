"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVsYmk5ajhzbG51YzdncTNybXlteHZrOXJyaGhqcDZ1N242NTl2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PY1ky7gRfduFikyoDK/giphy.gif"
            alt="Celebration GIF"
            className="w-full max-w-[300px] h-auto rounded-lg mt-6 mb-10"
            loading="lazy"
          />
          <h2 className="font-sans text-3xl font-medium tracking-tight italic text-gray-700">
            Page Not Found
          </h2>
          <p className="font-mono font-medium max-w-md mx-auto text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="neutral"
            className="font-mono"
            onClick={() => router.push("/")}
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
