import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Sky/Sky2.jpg",
  "/images/Projects/Sky/Sky1.jpg",
  "/images/Projects/Sky/Sky3.jpg",
  "/images/Projects/Sky/Sky4.jpg",
  "/images/Projects/Skybridge/WhatsApp Image 2018-08-24 at 11.14.26.jpeg",
  "/images/Projects/Skybridge/WhatsApp Image 2018-08-24 at 11.21.46.jpeg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="DBKK Skybridge & Pedestrian Linkage"
      subtitle="Skybridge, pedestrian linkage, and traffic improvement works connecting Asia City and the Oceanus development area."
      heroImage="/images/Projects/Sky/Sky2.jpg"
      heroAlt="DBKK Skybridge and Pedestrian Linkage"
      generalInfo={[
        { label: "Client", value: "DBKK" },
        { label: "Location", value: "Asia City and Oceanus, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Pedestrian skybridge and urban linkage",
        },
        {
          label: "Sector",
          value: "Pedestrian infrastructure, traffic improvement, and urban connectivity",
        },
        {
          label: "Scope",
          value:
            "Skybridge, pedestrian linkage, and traffic improvement works connecting Asia City and the Oceanus development area.",
        },
      ]}
      overview="The DBKK Skybridge and Pedestrian Linkage project supports safer pedestrian movement and improved urban connectivity within a busy Kota Kinabalu city area."
      storyTitle="Improving pedestrian movement in the city centre"
      storyParagraphs={[
        "Urban pedestrian infrastructure improves walkability, safety, and access between commercial, transport, and public areas.",
        "The skybridge and linkage works support pedestrian movement between Asia City and Oceanus while contributing to traffic improvement around the surrounding road network.",
        "Perdana Jurutera Perunding's involvement reflects capability in urban infrastructure, pedestrian access, traffic coordination, and civil engineering support.",
      ]}
      storyImage="/images/Projects/Sky/Sky1.jpg"
      storyImageAlt="DBKK skybridge pedestrian infrastructure"
      keyFeatures={[
        {
          title: "Pedestrian skybridge",
          description:
            "Elevated pedestrian infrastructure supporting safer crossing and better urban access.",
        },
        {
          title: "Urban linkage",
          description:
            "Improves connectivity between Asia City, Oceanus, and surrounding commercial areas.",
        },
        {
          title: "Traffic improvement",
          description:
            "Supports improved movement by reducing pedestrian and vehicle conflict at street level.",
        },
        {
          title: "City infrastructure",
          description:
            "Public infrastructure supporting walkability and urban place-making.",
        },
      ]}
      benefits={[
        {
          title: "Safer pedestrian access",
          description:
            "Supports safer movement for pedestrians across busy urban roads.",
        },
        {
          title: "Better city connectivity",
          description:
            "Links commercial areas and improves walkability within the city centre.",
        },
        {
          title: "Improved traffic interface",
          description:
            "Reduces conflict between pedestrian movement and vehicle traffic.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="DBKK Skybridge and Pedestrian Linkage project visual"
      locationTitle="Asia City and Oceanus, Kota Kinabalu"
      locationDescription="The project is located around Asia City and Oceanus in Kota Kinabalu, Sabah."
      mapQuery="Asia City Oceanus Kota Kinabalu Sabah Malaysia"
    />
  );
}
