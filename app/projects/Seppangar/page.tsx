import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Seppangar/Se1.png",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Sapangar Bay Container Port Expansion"
      subtitle="Traffic impact study and site planning support for the Sapangar Bay container port expansion project."
      heroImage="/images/Projects/Seppangar/Se1.png"
      heroAlt="Sapangar Bay Container Port Expansion"
      generalInfo={[
        { label: "Client", value: "Port / public infrastructure stakeholders" },
        { label: "Location", value: "Sapangar Bay, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Port traffic and site planning support",
        },
        {
          label: "Sector",
          value: "Traffic, transport planning, port infrastructure, and civil planning",
        },
        {
          label: "Scope",
          value:
            "Traffic impact study and site planning support for the Sapangar Bay container port expansion project.",
        },
      ]}
      overview="The Sapangar Bay Container Port Expansion project required traffic and site planning input to support port infrastructure growth and surrounding road network performance."
      storyTitle="Supporting port expansion planning"
      storyParagraphs={[
        "Port expansion projects require careful consideration of traffic movement, site access, heavy vehicle circulation, and surrounding road network impacts.",
        "The work involved traffic impact and site planning support for the Sapangar Bay container port expansion area.",
        "Perdana Jurutera Perunding's involvement reflects capability in traffic impact assessment, site planning, transport review, and infrastructure planning support.",
      ]}
      storyImage="/images/Projects/Seppangar/Se1.png"
      storyImageAlt="Sapangar Bay port planning"
      keyFeatures={[
        {
          title: "Traffic impact study",
          description:
            "Assessment support for traffic movement and access impacts related to port expansion.",
        },
        {
          title: "Site planning",
          description:
            "Planning input for circulation, access, and infrastructure arrangement around the port area.",
        },
        {
          title: "Port interface",
          description:
            "Review of transport movement between port operations and surrounding road networks.",
        },
        {
          title: "Infrastructure planning",
          description:
            "Technical planning support for long-term port and road network performance.",
        },
      ]}
      benefits={[
        {
          title: "Better access planning",
          description:
            "Supports clearer traffic access and circulation planning for port expansion.",
        },
        {
          title: "Reduced network risk",
          description:
            "Helps identify traffic impacts and infrastructure requirements early.",
        },
        {
          title: "Stronger port support",
          description:
            "Supports infrastructure planning for a major logistics and transport asset.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Sapangar Bay Container Port Expansion project visual"
      locationTitle="Sapangar Bay, Kota Kinabalu"
      locationDescription="The project is located around Sapangar Bay in Kota Kinabalu, Sabah."
      mapQuery="Sapangar Bay, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
