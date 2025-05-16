import {
  ReactLogo,
  TailwindLogo,
  NextLogo,
  ThreeJSLogo,
  TypescriptLogo,
  ReduxLogo,
  GraphQLLogo,
  JestLogo,
  CypressLogo,
  JavascriptLogo,
  AzureLogo,
  WebRTCLogo,
  WebpackLogo,
  MongoDBIcon,
  ExpressIcon,
  NodejsIcon,
  HTMLIcon,
  CSSIcon,
  SCSSIcon,
  VueLogo,
  NuxtLogo,
} from "@/icons/stack";
import { IconCode } from "@tabler/icons-react";
import React from "react";

export const getLogoForTechnology = (technology: string) => {
  const logoMap: Record<string, React.ReactNode> = {
    React: <ReactLogo className="h-4 w-4 shrink-0 dark:text-neutral-200" />,
    "Tailwind CSS": (
      <TailwindLogo className="h-4 w-4 shrink-0 dark:text-neutral-200" />
    ),
    "Next.js": <NextLogo className="h-4 w-4 shrink-0 dark:text-neutral-200" />,
    "Three.js": (
      <ThreeJSLogo className="h-4 w-4 shrink-0 dark:text-neutral-200" />
    ),
    TypeScript: <TypescriptLogo className="h-4 w-4 shrink-0" />,
    Redux: <ReduxLogo className="h-4 w-4 shrink-0" />,
    GraphQL: <GraphQLLogo className="h-4 w-4 shrink-0" />,
    Jest: <JestLogo className="h-4 w-4 shrink-0" />,
    Cypress: <CypressLogo className="h-4 w-4 shrink-0" />,
    JavaScript: <JavascriptLogo className="h-4 w-4 shrink-0" />,
    Azure: <AzureLogo className="h-4 w-4 shrink-0" />,
    WebRTC: <WebRTCLogo className="h-4 w-4 shrink-0" />,
    Webpack: <WebpackLogo className="h-4 w-4 shrink-0" />,
    MongoDB: <MongoDBIcon className="h-4 w-4 shrink-0" />,
    Express: <ExpressIcon className="h-4 w-4 shrink-0 dark:text-neutral-200" />,
    NodeJS: <NodejsIcon className="h-4 w-4 shrink-0" />,
    HTML5: <HTMLIcon className="h-4 w-4 shrink-0" />,
    CSS3: <CSSIcon className="h-4 w-4 shrink-0" />,
    SASS: <SCSSIcon className="h-4 w-4 shrink-0" />,
    Vue: <VueLogo className="h-4 w-4 shrink-0" />,
    "Nuxt.js": <NuxtLogo className="h-4 w-4 shrink-0" />,
  };

  return (
    logoMap[technology] || <IconCode className="h-4 w-4 text-neutral-600" />
  );
};
