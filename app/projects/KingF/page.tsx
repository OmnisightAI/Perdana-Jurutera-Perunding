import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Kingfisher/Kingfisher Flyover.png",
  "/images/Projects/Kingfisher/UMS1.jpg",
  "/images/Projects/Kingfisher/UMS4.jpg",
  "/images/Projects/Kingfisher/29. Flyover Sulaman 30.06.2025.mp4_000012600.png",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Kingfisher Overpass & Road Upgrades"
      subtitle="Overpass and road infrastructure works supporting improved traffic movement, junction performance, and connectivity through the Kingfisher corridor."
      heroImage="/images/Projects/Kingfisher/Kingfisher Flyover.png"
      heroAlt="Kingfisher Overpass and Road Upgrades"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Kingfisher, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Overpass, road upgrades, and urban infrastructure",
        },
        {
          label: "Sector",
          value: "Roads, bridges, traffic, drainage, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "Road upgrading and overpass infrastructure works at the Kingfisher corridor, supporting improved traffic movement, junction performance, and connectivity along the Kota Kinabalu road network.",
        },
      ]}
      overview="The Kingfisher Overpass and Road Upgrades project supports improved traffic performance and road connectivity within a busy Kota Kinabalu urban corridor."
      storyTitle="Strengthening the Kingfisher road corridor"
      storyParagraphs={[
        "Kingfisher is a key urban area connected to UMS, Sepanggar, surrounding residential communities, and the wider Kota Kinabalu road network.",
        "The project supports grade-separated movement and improved road operation through overpass and road upgrade works, reducing conflict at key junction areas and improving corridor performance.",
        "Perdana Jurutera Perunding's role reflects capability in road infrastructure, bridge and overpass works, traffic planning, drainage coordination, and practical public infrastructure delivery.",
      ]}
      storyImage="/images/Projects/Kingfisher/UMS1.jpg"
      storyImageAlt="Kingfisher road and overpass infrastructure"
      keyFeatures={[
        {
          title: "Urban overpass works",
          description:
            "Overpass infrastructure supporting grade-separated movement and improved traffic flow through the Kingfisher corridor.",
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
            "Supports better movement through the Kingfisher area by reducing conflict at key road and junction locations.",
        },
        {
          title: "Safer road operation",
          description:
            "Improves road geometry, traffic arrangement, and infrastructure serviceability for daily road users.",
        },
        {
          title: "Stronger city connectivity",
          description:
            "Enhances access between Kingfisher, surrounding residential areas, commercial zones, UMS, and the wider Kota Kinabalu road network.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Kingfisher overpass and road upgrade project visual"
      locationTitle="Kingfisher, Kota Kinabalu"
      locationDescription="The project is located around the Kingfisher corridor in Kota Kinabalu, Sabah."
      mapQuery="Jalan Kingfisher, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
