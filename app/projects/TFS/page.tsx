import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/TunFuad/tJCiw.jpg",
  "/images/Projects/TunFuad/1.png",
  "/images/Projects/TunFuad/aJ40X.jpg",
  "/images/Projects/TunFuad/YUxu1.jpg",
  "/images/Projects/TunFuad/Zb9GJ.jpg",
  "/images/Projects/TunFuad/zjeLF.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Priority Roads: Jalan Tun Fuad Stephens"
      subtitle="Road upgrading and civil infrastructure improvement works along one of Kota Kinabalu's key urban corridors."
      heroImage="/images/Projects/TunFuad/tJCiw.jpg"
      heroAlt="Jalan Tun Fuad Stephens Priority Roads"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Jalan Tun Fuad Stephens, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Priority road upgrade and urban infrastructure",
        },
        {
          label: "Sector",
          value: "Roads, traffic, drainage, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "Road upgrading and infrastructure improvement works along Jalan Tun Fuad Stephens, supporting traffic movement and urban connectivity.",
        },
      ]}
      overview="The Jalan Tun Fuad Stephens priority road project supports improved traffic movement, civil infrastructure performance, and connectivity through a major urban corridor in Kota Kinabalu."
      storyTitle="Strengthening a key Kota Kinabalu road corridor"
      storyParagraphs={[
        "Jalan Tun Fuad Stephens is one of Kota Kinabalu's important urban routes, serving traffic movement between city, commercial, waterfront, and surrounding development areas.",
        "The project involved priority road improvement and civil infrastructure works to support safer, smoother, and more reliable movement through the corridor.",
        "Perdana Jurutera Perunding's involvement reflects the company's capability in road infrastructure, traffic planning, drainage coordination, and practical engineering support for public infrastructure projects in Sabah.",
      ]}
      storyImage="/images/Projects/TunFuad/1.png"
      storyImageAlt="Jalan Tun Fuad Stephens road infrastructure"
      keyFeatures={[
        {
          title: "Priority road corridor",
          description:
            "Infrastructure improvement works along a key urban route serving Kota Kinabalu's coastal and city movement network.",
        },
        {
          title: "Traffic movement improvement",
          description:
            "Road planning and engineering works to support smoother traffic flow, improved junction performance, and safer road operation.",
        },
        {
          title: "Civil infrastructure coordination",
          description:
            "Coordination of roadworks, drainage, utilities, and related civil infrastructure elements within an active urban environment.",
        },
        {
          title: "Urban connectivity",
          description:
            "Supports improved access between major city areas, waterfront zones, commercial districts, and surrounding road networks.",
        },
      ]}
      benefits={[
        {
          title: "Reduced congestion",
          description:
            "Supports improved road capacity and better traffic distribution along a major urban corridor.",
        },
        {
          title: "Better public infrastructure",
          description:
            "Contributes to long-term road network improvement and public infrastructure serviceability.",
        },
        {
          title: "Improved city access",
          description:
            "Enhances connectivity for road users travelling through Kota Kinabalu's key urban and coastal areas.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Tun Fuad Stephens priority roads project visual"
      locationTitle="Jalan Tun Fuad Stephens, Kota Kinabalu"
      locationDescription="The project is located along Jalan Tun Fuad Stephens in Kota Kinabalu, Sabah."
      mapQuery="Jalan Tun Fuad Stephens, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
