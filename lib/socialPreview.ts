// Social Preview Utilities
export const SOCIAL_PREVIEW = {
  baseUrl: "https://nadun.in",
  defaultImage: "/og-image.jpg",
  defaultTitle: "Nadun Nissanka - UX Designer",
  defaultDescription:
    "Award-winning UX Designer specializing in user-centered design, product strategy, and digital experiences.",
} as const;

// Generate social preview URLs for testing
export const getSocialPreviewUrls = (url: string) => {
  const encodedUrl = encodeURIComponent(url);

  return {
    facebook: `https://developers.facebook.com/tools/debug/?q=${encodedUrl}`,
    twitter: `https://cards-dev.twitter.com/validator?url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/post-inspector/inspect/${encodedUrl}`,
    whatsapp: `https://developers.facebook.com/tools/debug/sharing/?q=${encodedUrl}`,
  };
};

// Helper to generate project-specific social metadata
export const generateProjectSocialMeta = (project: {
  title: string;
  description: string;
  image: string;
  slug: string;
}) => {
  return {
    title: `${project.title} - Nadun Nissanka`,
    description: project.description,
    url: `${SOCIAL_PREVIEW.baseUrl}/projects/${project.slug}`,
    image: project.image,
    imageAlt: `${project.title} - Design by Nadun Nissanka`,
  };
};

// Validate social image dimensions
export const validateSocialImage = (width: number, height: number) => {
  const recommendations = {
    openGraph: { width: 1200, height: 630, ratio: 1.91 },
    twitter: { width: 1200, height: 630, ratio: 1.91 },
    linkedin: { width: 1200, height: 630, ratio: 1.91 },
  };

  const currentRatio = width / height;

  return {
    isValid: Math.abs(currentRatio - recommendations.openGraph.ratio) < 0.1,
    currentRatio,
    recommendations,
  };
};
