import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Kolam/Kolam.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Priority Roads: Jalan Kolam–Minintod"
      subtitle="Road and flyover infrastructure works supporting improved movement along Jalan Kolam from Sunny Garden to Kg. Minintod."
      heroImage="/images/Projects/Kolam/Kolam.jpg"
      heroAlt="Jalan Kolam Minintod priority road project"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Jalan Kolam–Minintod, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Road upgrade and flyover infrastructure",
        },
        {
          label: "Sector",
          value: "Roads, bridges, traffic, drainage, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "Upgrading of Jalan Kolam from Sunny Garden to Kg. Minintod including two flyovers and supporting road infrastructure works.",
        },
      ]}
      overview="The Jalan Kolam–Minintod project supports improved road capacity and connectivity through a key Kota Kinabalu urban corridor."
      storyTitle="Improving the Jalan Kolam corridor"
      storyParagraphs={[
        "Jalan Kolam is an important urban route serving local communities, commercial activity, and through movement around Kota Kinabalu.",
        "The project supports road widening, junction improvement, and flyover infrastructure to improve traffic flow and reduce conflict along the corridor.",
        "Perdana Jurutera Perunding's involvement reflects capability in urban road upgrades, flyover infrastructure, traffic planning, and civil engineering coordination.",
      ]}
      storyImage="/images/Projects/Kolam/Kolam.jpg"
      storyImageAlt="Jalan Kolam road and flyover infrastructure"
      keyFeatures={[
        {
          title: "Road corridor upgrade",
          description:
            "Upgrading works along Jalan Kolam from Sunny Garden to Kg. Minintod.",
        },
        {
          title: "Flyover infrastructure",
          description:
            "Two flyover elements supporting improved traffic movement and junction performance.",
        },
        {
          title: "Urban connectivity",
          description:
            "Improves access and movement through a key urban corridor in Kota Kinabalu.",
        },
        {
          title: "Civil coordination",
          description:
            "Roadworks, drainage, utilities, and structures coordinated within an active public road setting.",
        },
      ]}
      benefits={[
        {
          title: "Improved capacity",
          description:
            "Supports higher road capacity and smoother movement along the corridor.",
        },
        {
          title: "Safer movement",
          description:
            "Improves traffic arrangement and reduces conflict at key junction areas.",
        },
        {
          title: "Long-term network value",
          description:
            "Strengthens urban road connectivity and public infrastructure performance.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Kolam Minintod project visual"
      locationTitle="Jalan Kolam–Minintod, Kota Kinabalu"
      locationDescription="The project is located along the Jalan Kolam corridor from Sunny Garden to Kg. Minintod in Kota Kinabalu, Sabah."
      mapQuery="Jalan Kolam, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
