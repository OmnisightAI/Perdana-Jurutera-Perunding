import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Keranaan/rYJ5k.jpg",
  "/images/Projects/Keranaan/1.JPG",
  "/images/Projects/Keranaan/2.JPG",
  "/images/Projects/Keranaan/3.JPG",
  "/images/Projects/Keranaan/4.JPG",
  "/images/Projects/Keranaan/5.JPG",
  "/images/Projects/Keranaan/6.JPG",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Bekalan Air Luar Bandar Keranaan"
      subtitle="Rural water supply infrastructure supporting intake, pipeline, pipe bridge, chlorination, and storage works for communities in Keranaan, Sabah."
      heroImage="/images/Projects/Keranaan/rYJ5k.jpg"
      heroAlt="Bekalan Air Luar Bandar Keranaan"
      generalInfo={[
        { label: "Client", value: "KPLB / Government of Sabah" },
        { label: "Location", value: "Keranaan, Sabah" },
        {
          label: "Project Type",
          value: "Rural water supply infrastructure",
        },
        {
          label: "Sector",
          value: "Water supply, civil infrastructure, pipe bridge, and storage works",
        },
        {
          label: "Scope",
          value:
            "Rural water supply system including mountain stream intake, raw water pipeline, pipe bridge, chlorination house, and HDPE storage tanks.",
        },
      ]}
      overview="The Keranaan rural water supply project supports water infrastructure delivery for rural communities, combining civil, hydraulic, structural, and site coordination works."
      storyTitle="Delivering practical rural water infrastructure"
      storyParagraphs={[
        "Rural water supply projects require reliable civil infrastructure, practical site access, and coordination across intake, pipeline, storage, and treatment elements.",
        "The Keranaan works include water intake and conveyance infrastructure, with supporting structures and storage elements designed for long-term serviceability in a rural environment.",
        "Perdana Jurutera Perunding's involvement reflects capability in rural infrastructure, pipe bridge works, water supply assets, and practical engineering support for remote project delivery.",
      ]}
      storyImage="/images/Projects/Keranaan/1.JPG"
      storyImageAlt="Keranaan rural water supply infrastructure"
      keyFeatures={[
        {
          title: "Water intake works",
          description:
            "Mountain stream intake and raw water collection infrastructure supporting rural water supply delivery.",
        },
        {
          title: "Pipeline infrastructure",
          description:
            "Raw water pipeline and associated civil works supporting water transfer across rural terrain.",
        },
        {
          title: "Pipe bridge elements",
          description:
            "Pipe bridge infrastructure used where water supply alignment crosses terrain or watercourses.",
        },
        {
          title: "Storage and chlorination",
          description:
            "HDPE storage tanks and chlorination house works supporting treated water supply operation.",
        },
      ]}
      benefits={[
        {
          title: "Improved rural service",
          description:
            "Supports better access to water infrastructure for rural communities.",
        },
        {
          title: "Reliable infrastructure",
          description:
            "Combines intake, transfer, treatment, and storage elements into a practical rural system.",
        },
        {
          title: "Long-term community value",
          description:
            "Provides durable civil infrastructure that supports public health and community development.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Keranaan rural water supply project visual"
      locationTitle="Keranaan, Sabah"
      locationDescription="The project is located around Keranaan, Sabah, supporting rural water supply infrastructure for surrounding communities."
      mapQuery="Keranaan, Sabah, Malaysia"
    />
  );
}
