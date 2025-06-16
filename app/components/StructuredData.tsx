export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nadun Nissanka",
    "jobTitle": "UX Design Engineer",
    "description": "Award-winning UX Designer specializing in user-centered design, product strategy, and digital experiences.",
    "url": "https://nadun.in",
    "sameAs": [
      "https://www.linkedin.com/in/nadun-nissanka-31782b19b/",
    ],
    "knowsAbout": [
      "User Experience Design",
      "User Interface Design",
      "Product Design",
      "Design Strategy",
      "Prototyping",
      "User Research"
    ],
    "alumniOf": "University of Westminster",
    "worksFor": {
      "@type": "Organization",
      "name": "Midfunnel.com"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 