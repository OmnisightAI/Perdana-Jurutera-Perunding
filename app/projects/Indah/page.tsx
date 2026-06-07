import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Indah permai/Indah Permai Flyover.png",
  "/images/Projects/Indah permai/UMS3.jpg",
  "/images/Projects/Indah permai/29. Flyover Sulaman 30.06.2025.mp4_000249033.png",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Jalan Indah Permai Flyover & Viaduct"
      subtitle="Flyover, viaduct, and road infrastructure works supporting improved connectivity along the Jalan Indah Permai corridor in Kota Kinabalu."
      heroImage="/images/Projects/Indah permai/Indah Permai Flyover.png"
      heroAlt="Jalan Indah Permai flyover and viaduct project"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Jalan Indah Permai, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Flyover, viaduct, and road infrastructure",
        },
        {
          label: "Sector",
          value: "Bridges, roads, transport, and structural engineering",
        },
        {
          label: "Scope",
          value:
            "Engineering support for flyover and viaduct infrastructure along Jalan Indah Permai, including bridge structure, road connectivity, and associated civil works.",
        },
      ]}
      overview="The Jalan Indah Permai project forms part of Sabah's urban road and flyover infrastructure programme, supporting improved movement through a growing Kota Kinabalu corridor."
      storyTitle="Improving connectivity through Jalan Indah Permai"
      storyParagraphs={[
        "Jalan Indah Permai is an important urban corridor serving residential areas, local traffic, and wider movement through Kota Kinabalu's northern road network.",
        "The project supports grade-separated movement and better road network capacity through flyover and viaduct infrastructure, helping improve traffic performance and long-term corridor serviceability.",
        "Perdana Jurutera Perunding's involvement reflects capability in bridge engineering, road infrastructure, staged construction coordination, and civil design support for major public infrastructure projects.",
      ]}
      storyImage="/images/Projects/Indah permai/UMS3.jpg"
      storyImageAlt="Jalan Indah Permai bridge infrastructure"
      keyFeatures={[
        {
          title: "Flyover and viaduct works",
          description:
            "Road and bridge infrastructure supporting grade-separated movement along the Jalan Indah Permai corridor.",
        },
        {
          title: "Segmental bridge engineering",
          description:
            "Structural engineering input for elevated bridge and viaduct elements, including staged construction considerations.",
        },
        {
          title: "Urban road connectivity",
          description:
            "Improves movement between surrounding residential, commercial, and road network areas in Kota Kinabalu.",
        },
        {
          title: "Civil infrastructure coordination",
          description:
            "Coordination of roadworks, drainage, bridge structures, and related infrastructure within an active urban corridor.",
        },
      ]}
      benefits={[
        {
          title: "Improved traffic flow",
          description:
            "Supports smoother movement through a busy urban road corridor and helps reduce conflict at key junction areas.",
        },
        {
          title: "Better road network capacity",
          description:
            "Strengthens the surrounding road network by improving connectivity and long-term infrastructure performance.",
        },
        {
          title: "Enhanced public infrastructure",
          description:
            "Provides lasting transport infrastructure value for road users, nearby communities, and future urban development.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Indah Permai project visual"
      locationTitle="Jalan Indah Permai, Kota Kinabalu"
      locationDescription="The project is located around the Jalan Indah Permai corridor in Kota Kinabalu, Sabah."
      mapQuery="Jalan Indah Permai, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
