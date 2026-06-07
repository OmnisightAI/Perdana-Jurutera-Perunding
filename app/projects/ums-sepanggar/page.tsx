import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/UMS/UMS22.png",
  "/images/Projects/UMS/UMS7.png",
  "/images/Projects/UMS/UMS3.jpg",
  "/images/Projects/UMS/UMS6.jpg",
  "/images/Projects/UMS/UMS5.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Jalan UMS & Sepanggar Priority Roads"
      subtitle="Major road and flyover infrastructure works supporting upgraded traffic movement, grade-separated junctions, and improved urban connectivity in Kota Kinabalu."
      heroImage="/images/Projects/UMS/UMS22.png"
      heroAlt="Jalan UMS and Sepanggar Priority Roads"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Jalan UMS and Jalan Sepanggar, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Major road upgrade and flyover infrastructure",
        },
        { label: "Year", value: "2017" },
        {
          label: "Sector",
          value: "Roads, bridges, and urban infrastructure",
        },
        {
          label: "Scope",
          value:
            "Upgrading of Jalan UMS and Jalan Sepanggar including grade-separated junctions and segmental box girder flyover works.",
        },
      ]}
      overview="This project forms part of the Proposed Priority Roads Projects in Kota Kinabalu, involving the upgrading of Jalan UMS and Jalan Sepanggar with multiple grade-separated junctions and elevated road infrastructure."
      storyTitle="Upgrading a major northern Kota Kinabalu corridor"
      storyParagraphs={[
        "The Jalan UMS and Jalan Sepanggar corridor serves university, port, residential, commercial, and through-traffic movement in northern Kota Kinabalu.",
        "The project improves road capacity and network performance through grade-separated junctions and elevated road infrastructure, supporting safer and more reliable movement across the corridor.",
        "Perdana Jurutera Perunding's involvement reflects capability in major road, bridge, traffic, and civil infrastructure coordination for public sector delivery in Sabah.",
      ]}
      storyImage="/images/Projects/UMS/UMS7.png"
      storyImageAlt="Jalan UMS and Sepanggar flyover infrastructure"
      keyFeatures={[
        {
          title: "Grade-separated junctions",
          description:
            "Road infrastructure works involving multiple grade-separated intersections to improve traffic flow and network performance.",
        },
        {
          title: "Segmental box girder flyovers",
          description:
            "Flyover structures using segmental box girder forms, supporting longer spans and efficient elevated road construction.",
        },
        {
          title: "Major urban road upgrade",
          description:
            "Upgrade works along Jalan UMS and Jalan Sepanggar supporting higher traffic demand and improved connectivity.",
        },
        {
          title: "Civil and structural coordination",
          description:
            "Integrated road, bridge, drainage, and construction coordination across a complex urban infrastructure corridor.",
        },
      ]}
      benefits={[
        {
          title: "Improved traffic movement",
          description:
            "Supports smoother vehicle flow through upgraded road geometry and grade-separated junction arrangements.",
        },
        {
          title: "Stronger urban connectivity",
          description:
            "Improves access between UMS, Sepanggar, Kingfisher, Rampayan, and surrounding Kota Kinabalu growth areas.",
        },
        {
          title: "Major infrastructure capability",
          description:
            "Demonstrates capability in large-scale road and flyover infrastructure involving structural and civil engineering coordination.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan UMS and Sepanggar priority roads project visual"
      locationTitle="Jalan UMS & Jalan Sepanggar, Kota Kinabalu"
      locationDescription="The project corridor is located around Jalan UMS and Jalan Sepanggar in Kota Kinabalu, Sabah."
      mapQuery="6.032408070814883, 116.12396053797805"
    />
  );
}
