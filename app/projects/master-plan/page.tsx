import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Traffic/KK CBD.jpg",
  "/images/Projects/Traffic/masterplan2.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="K.K. Traffic Improvement & Urban Transport Master Plan"
      subtitle="Master planning and detailed traffic improvement support for Kota Kinabalu CBD and the wider urban transport network."
      heroImage="/images/Projects/Traffic/KK CBD.jpg"
      heroAlt="Kota Kinabalu CBD traffic improvement and urban transport master plan"
      generalInfo={[
        { label: "Client", value: "DBKK Holdings Sdn Bhd" },
        { label: "Location", value: "Kota Kinabalu CBD, Sabah" },
        { label: "Project Type", value: "Urban transport master planning" },
        { label: "Year", value: "2015" },
        {
          label: "Sector",
          value: "Traffic, transport, and urban infrastructure",
        },
        {
          label: "Scope",
          value:
            "Master planning and traffic improvement support for Kota Kinabalu CBD, including network review, traffic strategy, and urban transport planning.",
        },
      ]}
      overview="The Kota Kinabalu urban transport master planning work supports strategic traffic improvement and long-term transport planning for the city centre."
      storyTitle="Planning a more workable city transport network"
      storyParagraphs={[
        "Urban transport master planning provides the basis for improving road network performance, traffic circulation, and public movement in a growing city centre.",
        "The project considered Kota Kinabalu CBD traffic improvement needs and long-term transport planning inputs for better network operation.",
        "Perdana Jurutera Perunding's involvement reflects capability in traffic engineering, urban transport planning, network analysis, and practical infrastructure strategy.",
      ]}
      storyImage="/images/Projects/Traffic/masterplan2.jpg"
      storyImageAlt="Kota Kinabalu urban transport master plan"
      keyFeatures={[
        {
          title: "CBD traffic review",
          description:
            "Review of traffic movement and improvement opportunities within Kota Kinabalu CBD.",
        },
        {
          title: "Urban transport planning",
          description:
            "Strategic planning input for long-term transport and road network performance.",
        },
        {
          title: "Network improvement",
          description:
            "Identification of practical interventions to improve traffic circulation and access.",
        },
        {
          title: "Planning documentation",
          description:
            "Technical reporting and planning support for decision-making and implementation.",
        },
      ]}
      benefits={[
        {
          title: "Clearer traffic strategy",
          description:
            "Supports informed decisions for city traffic improvement and transport planning.",
        },
        {
          title: "Better urban movement",
          description:
            "Improves understanding of road network performance and movement needs.",
        },
        {
          title: "Long-term city value",
          description:
            "Provides planning support for Kota Kinabalu's continued urban growth.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Kota Kinabalu traffic improvement and urban transport master plan visual"
      locationTitle="Kota Kinabalu CBD"
      locationDescription="The project focuses on Kota Kinabalu CBD and the surrounding urban transport network."
      mapQuery="5.977866479527974, 116.07506792310635"
    />
  );
}
