import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Infrastructure/BALB Apas.jpg",
  "/images/Projects/Apas Balung/P1040107.JPG",
  "/images/Projects/Apas Balung/P1040106.JPG",
  "/images/Projects/Apas Balung/P1040117.JPG",
  "/images/Projects/Apas Balung/P1040120.JPG",
  "/images/Projects/Apas Balung/P1040261.JPG",
  "/images/Projects/Infrastructure/NXtaa.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Projek Bekalan Air Luar Bandar Apas Balung"
      subtitle="Rural water supply infrastructure including storage, conveyance, pipe bridge, and supporting civil works in Tawau."
      heroImage="/images/Projects/Infrastructure/BALB Apas.jpg"
      heroAlt="Projek Bekalan Air Luar Bandar Apas Balung"
      generalInfo={[
        { label: "Client", value: "KKLW / Jabatan Air Sabah" },
        { label: "Location", value: "Apas Balung, Tawau, Sabah" },
        { label: "Project Type", value: "Rural water supply infrastructure" },
        { label: "Year", value: "2010 / 2012" },
        { label: "Sector", value: "Water supply and civil infrastructure" },
        {
          label: "Scope",
          value:
            "Reservoirs, pipe bridge, water conveyance, and associated rural water supply infrastructure works.",
        },
      ]}
      overview="The Apas Balung rural water supply project supports public water infrastructure delivery in Tawau through storage, conveyance, and supporting civil works."
      storyTitle="Strengthening rural water supply infrastructure"
      storyParagraphs={[
        "Rural water supply schemes require coordinated storage, pipework, and civil infrastructure to deliver reliable service across dispersed communities.",
        "The Apas Balung works include water supply assets such as reservoirs, pipe bridge elements, and associated civil components.",
        "Perdana Jurutera Perunding's involvement reflects capability in water supply infrastructure, civil engineering coordination, site support, and practical delivery for rural public infrastructure.",
      ]}
      storyImage="/images/Projects/Apas Balung/P1040107.JPG"
      storyImageAlt="Apas Balung rural water supply infrastructure"
      keyFeatures={[
        {
          title: "Storage infrastructure",
          description:
            "Reservoir and water storage elements supporting rural supply reliability.",
        },
        {
          title: "Pipe bridge works",
          description:
            "Pipe bridge and transfer infrastructure supporting water conveyance across site constraints.",
        },
        {
          title: "Civil works",
          description:
            "Associated platforms, drainage, and site civil works supporting asset operation.",
        },
        {
          title: "Rural delivery",
          description:
            "Infrastructure designed for practical operation within a rural project environment.",
        },
      ]}
      benefits={[
        {
          title: "Improved water access",
          description:
            "Supports rural water supply delivery for communities in the Apas Balung area.",
        },
        {
          title: "Reliable system assets",
          description:
            "Combines storage, conveyance, and civil elements into a functional system.",
        },
        {
          title: "Long-term public value",
          description:
            "Provides durable infrastructure supporting public service delivery in rural Sabah.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Apas Balung rural water supply project visual"
      locationTitle="Apas Balung, Tawau"
      locationDescription="The project is located around Apas Balung in Tawau, Sabah."
      mapQuery="Apas Balung, Tawau, Sabah, Malaysia"
    />
  );
}
