import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Rampayan/Rampayan Flyover1.jpg",
  "/images/Projects/Rampayan/Rampayan Flyover2.jpg",
  "/images/Projects/Rampayan/29. Flyover Sulaman 30.06.2025.mp4_000133733.png",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Rampayan Flyover & Road Upgrades"
      subtitle="Flyover and road infrastructure works supporting improved traffic movement, grade-separated connectivity, and urban road performance in Kota Kinabalu."
      heroImage="/images/Projects/Rampayan/Rampayan Flyover1.jpg"
      heroAlt="Rampayan Flyover and Road Upgrades"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Rampayan, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Flyover, road upgrades, and urban infrastructure",
        },
        {
          label: "Sector",
          value: "Roads, bridges, traffic, drainage, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "Road upgrading and flyover infrastructure works at the Rampayan corridor, supporting improved traffic movement, junction performance, and connectivity along the Kota Kinabalu road network.",
        },
      ]}
      overview="The Rampayan Flyover and Road Upgrades project forms part of the wider priority road improvement works supporting traffic movement, connectivity, and infrastructure performance along Kota Kinabalu's growing northern road corridor."
      storyTitle="Improving movement through the Rampayan corridor"
      storyParagraphs={[
        "Rampayan is part of a growing urban corridor serving movement between residential areas, UMS, Sepanggar, and the wider Kota Kinabalu road network.",
        "The project supports improved road capacity and junction operation through flyover and road upgrade works, helping reduce traffic conflict and improve long-term corridor performance.",
        "Perdana Jurutera Perunding's involvement reflects the company's capability in road infrastructure, bridge and flyover works, traffic planning, drainage coordination, and practical engineering support for public infrastructure projects in Sabah.",
      ]}
      storyImage="/images/Projects/Rampayan/Rampayan Flyover2.jpg"
      storyImageAlt="Rampayan flyover and road infrastructure"
      keyFeatures={[
        {
          title: "Flyover infrastructure",
          description:
            "Elevated road infrastructure supporting grade-separated movement and improved traffic flow through the Rampayan corridor.",
        },
        {
          title: "Road corridor upgrade",
          description:
            "Road improvement works supporting safer, smoother, and more reliable movement for local and through traffic.",
        },
        {
          title: "Traffic and junction improvement",
          description:
            "Engineering support for improved junction operation, traffic distribution, and road user safety in a busy urban area.",
        },
        {
          title: "Civil infrastructure coordination",
          description:
            "Coordination of roadworks, drainage, utilities, and related infrastructure elements within an active public road environment.",
        },
      ]}
      benefits={[
        {
          title: "Improved traffic flow",
          description:
            "Supports better movement through the Rampayan area by reducing conflict at key road and junction locations.",
        },
        {
          title: "Safer road operation",
          description:
            "Improves road geometry, traffic arrangement, and infrastructure serviceability for daily road users.",
        },
        {
          title: "Stronger city connectivity",
          description:
            "Enhances access between Rampayan, surrounding residential areas, UMS, Sepanggar, and the wider Kota Kinabalu road network.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Rampayan flyover and road upgrade project visual"
      locationTitle="Rampayan, Kota Kinabalu"
      locationDescription="The project is located around the Rampayan corridor in Kota Kinabalu, Sabah, supporting road connectivity between surrounding urban and residential areas."
      mapQuery="Rampayan, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
