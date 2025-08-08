import { DATA } from "@/data/resume";

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rahul Rathod",
          alternateName: ["Rahul"],
          description: DATA.description,
          image: `${DATA.url}/me.png`,
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.LinkedIn.url,
            `mailto:${DATA.contact.email}`
          ],
          jobTitle: "Software Engineer & Business Intelligence Analyst",
          worksFor: {
            "@type": "Organization",
            name: "Sky Betting and Gaming, Marks & Spencer (via TCS)",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Dharmsinh Desai University"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leeds",
            addressCountry: "UK"
          },
          email: DATA.contact.email,
          telephone: DATA.contact.tel,
          knowsAbout: DATA.skills
        })
      }}
    />
  );
}
