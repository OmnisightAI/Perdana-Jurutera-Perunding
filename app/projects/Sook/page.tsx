import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Sook/QjUm4.jpg",
  "/images/Projects/Sook/DTvVW.jpg",
  "/images/Projects/Sook/MXjxQ.jpg",
  "/images/Projects/Sook/myf8D.jpg",
  "/images/Projects/Sook/CH 0+000 Kg. Lunguyan.jpg",
  "/images/Projects/Sook/CH 20+000 Kg. Nandagan.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Jalan Sook–Tulid–Sinua"
      subtitle="Regional road infrastructure works supporting improved rural connectivity, bridge construction, earthworks, and completed asphalt road sections."
      heroImage="/images/Projects/Sook/QjUm4.jpg"
      heroAlt="Jalan Sook Tulid Sinua road project"
      generalInfo={[
        { label: "Client", value: "JKR Sabah" },
        { label: "Location", value: "Sook–Tulid–Sinua, Sabah" },
        {
          label: "Project Type",
          value: "Regional road infrastructure",
        },
        {
          label: "Sector",
          value: "Roadworks, bridges, earthworks, and civil infrastructure",
        },
        {
          label: "Scope",
          value:
            "A regional road project with bridge works, pile head construction, field density testing, and completed asphalt road sections.",
        },
      ]}
      overview="The Jalan Sook–Tulid–Sinua project supports regional access and rural connectivity through road construction, bridge works, and associated civil infrastructure."
      storyTitle="Strengthening regional road connectivity"
      storyParagraphs={[
        "Regional road projects are critical for connecting rural communities, supporting access to services, and improving long-term mobility across Sabah.",
        "The Sook–Tulid–Sinua works include road formation, completed asphalt sections, bridge-related construction, pile head works, and field quality testing.",
        "Perdana Jurutera Perunding's involvement reflects practical capability in regional road delivery, site coordination, civil infrastructure, and construction-phase engineering support.",
      ]}
      storyImage="/images/Projects/Sook/DTvVW.jpg"
      storyImageAlt="Sook Tulid Sinua road infrastructure"
      keyFeatures={[
        {
          title: "Regional roadworks",
          description:
            "Road formation and completed asphalt sections supporting rural and regional movement.",
        },
        {
          title: "Bridge works",
          description:
            "Bridge-related construction support including pile head and associated structural works.",
        },
        {
          title: "Field quality testing",
          description:
            "Site testing and construction monitoring supporting roadwork quality and compliance.",
        },
        {
          title: "Rural access improvement",
          description:
            "Infrastructure that improves access between settlements, services, and regional routes.",
        },
      ]}
      benefits={[
        {
          title: "Better regional access",
          description:
            "Supports improved movement between rural communities and wider road networks.",
        },
        {
          title: "Improved serviceability",
          description:
            "Completed road sections provide more reliable and durable travel conditions.",
        },
        {
          title: "Community value",
          description:
            "Supports long-term economic and social connectivity for rural areas.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Sook Tulid Sinua project visual"
      locationTitle="Sook–Tulid–Sinua, Sabah"
      locationDescription="The project is located along the Sook–Tulid–Sinua regional road corridor in Sabah."
      mapQuery="Sook, Sabah, Malaysia"
    />
  );
}
