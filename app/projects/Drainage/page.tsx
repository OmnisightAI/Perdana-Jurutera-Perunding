import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Drainage/irrigation1.jpg",
  "/images/Projects/Drainage/irrigation2.jpg",
  "/images/Projects/Drainage/bridge1.jpg",
  "/images/Projects/Drainage/bridge2.jpg",
  "/images/Projects/Drainage/micropile1.jpg",
  "/images/Projects/Drainage/micropile2.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Drainage Improvement Works"
      subtitle="Drainage, stormwater, bridge, and related civil infrastructure works supporting flood resilience and public infrastructure performance."
      heroImage="/images/Projects/Drainage/irrigation1.jpg"
      heroAlt="Drainage Improvement Works"
      generalInfo={[
        { label: "Client", value: "Government and public sector clients" },
        { label: "Location", value: "Sabah" },
        {
          label: "Project Type",
          value: "Drainage and stormwater improvement works",
        },
        {
          label: "Sector",
          value: "Drainage, stormwater, bridges, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "Drainage improvement portfolio including irrigation, bridge, micropile, and related civil infrastructure works.",
        },
      ]}
      overview="The drainage improvement portfolio supports practical stormwater management, waterway performance, and civil infrastructure delivery across Sabah."
      storyTitle="Improving drainage and stormwater performance"
      storyParagraphs={[
        "Drainage infrastructure is essential for managing stormwater, protecting roads and properties, and improving public infrastructure resilience.",
        "The works include drainage channels, irrigation-related infrastructure, bridge elements, and micropile-supported civil works across different project sites.",
        "Perdana Jurutera Perunding's involvement reflects capability in drainage engineering, civil structures, site coordination, and practical infrastructure delivery.",
      ]}
      storyImage="/images/Projects/Drainage/bridge1.jpg"
      storyImageAlt="Drainage and bridge improvement works"
      keyFeatures={[
        {
          title: "Stormwater management",
          description:
            "Drainage and channel works supporting improved stormwater conveyance.",
        },
        {
          title: "Bridge-related works",
          description:
            "Bridge and crossing infrastructure associated with drainage improvement schemes.",
        },
        {
          title: "Micropile support",
          description:
            "Foundation support works used where ground and structural requirements demand local strengthening.",
        },
        {
          title: "Civil coordination",
          description:
            "Coordination of drainage, earthworks, structures, and public infrastructure delivery.",
        },
      ]}
      benefits={[
        {
          title: "Better flood resilience",
          description:
            "Supports improved management of stormwater and local drainage flows.",
        },
        {
          title: "Improved infrastructure durability",
          description:
            "Protects roads, crossings, and public assets through better drainage performance.",
        },
        {
          title: "Public service value",
          description:
            "Provides practical civil infrastructure improvements for communities and road users.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Drainage improvement works project visual"
      locationTitle="Sabah"
      locationDescription="The drainage improvement works form part of a wider portfolio of civil infrastructure projects across Sabah."
      mapQuery="Sabah, Malaysia"
    />
  );
}
