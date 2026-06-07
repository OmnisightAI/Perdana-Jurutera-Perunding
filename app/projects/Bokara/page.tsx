import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Bokara/NSUaa.jpg",
  "/images/Projects/Bokara/image_063.jpg",
  "/images/Projects/Bokara/TLcf3.jpg",
  "/images/Projects/Bokara/AR61u.jpg",
  "/images/Projects/Bokara/8gW1K.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Jalan Bokara Batu Sapi Phase 2"
      subtitle="Dual carriageway roadworks and supporting civil infrastructure for the Bokara Batu Sapi corridor in Sandakan, Sabah."
      heroImage="/images/Projects/Bokara/NSUaa.jpg"
      heroAlt="Jalan Bokara Batu Sapi Phase 2"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Bokara Batu Sapi, Sandakan, Sabah" },
        {
          label: "Project Type",
          value: "Dual carriageway roadworks",
        },
        {
          label: "Sector",
          value: "Roadworks, culverts, slope works, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "A dual carriageway project in Sandakan supported by culvert works, soil consolidation, sprayed concrete wall, and slope repair works.",
        },
      ]}
      overview="The Jalan Bokara Batu Sapi Phase 2 project supports road capacity and safety through dual carriageway works and related civil infrastructure in Sandakan."
      storyTitle="Supporting road upgrading in Sandakan"
      storyParagraphs={[
        "The Bokara Batu Sapi corridor supports urban and regional movement in Sandakan, requiring practical road upgrading and associated civil works.",
        "The project involved dual carriageway roadworks with supporting culvert, soil improvement, sprayed concrete wall, and slope repair elements.",
        "Perdana Jurutera Perunding's involvement reflects capability in road infrastructure, drainage and culvert works, slope-related coordination, and construction support.",
      ]}
      storyImage="/images/Projects/Bokara/image_063.jpg"
      storyImageAlt="Bokara Batu Sapi road infrastructure"
      keyFeatures={[
        {
          title: "Dual carriageway works",
          description:
            "Road upgrading works supporting improved traffic capacity and movement along the corridor.",
        },
        {
          title: "Culvert infrastructure",
          description:
            "Drainage and culvert works supporting road serviceability and stormwater management.",
        },
        {
          title: "Slope and wall works",
          description:
            "Sprayed concrete wall and slope repair works supporting road corridor stability.",
        },
        {
          title: "Civil construction support",
          description:
            "Site-based engineering coordination across road, drainage, and earthworks elements.",
        },
      ]}
      benefits={[
        {
          title: "Improved road capacity",
          description:
            "Supports better road operation and traffic movement in Sandakan.",
        },
        {
          title: "Stronger corridor resilience",
          description:
            "Drainage, slope, and roadworks improve long-term corridor performance.",
        },
        {
          title: "Safer public infrastructure",
          description:
            "Supports safer and more reliable movement for road users.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Bokara Batu Sapi project visual"
      locationTitle="Bokara Batu Sapi, Sandakan"
      locationDescription="The project is located along the Bokara Batu Sapi corridor in Sandakan, Sabah."
      mapQuery="Bokara Batu Sapi, Sandakan, Sabah, Malaysia"
    />
  );
}
