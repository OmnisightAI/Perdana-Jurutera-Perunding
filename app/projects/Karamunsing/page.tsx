import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Karamunsing/k2.jpg",
  "/images/Projects/Karamunsing/image_059.jpg",
  "/images/Projects/Karamunsing/B7hkp.jpg",
  "/images/Projects/Karamunsing/q5a6Q.jpg",
  "/images/Projects/Karamunsing/W95id.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Karamunsing Interchange System"
      subtitle="Road network planning, design review, and road safety audit support for the Karamunsing interchange and surrounding urban road system."
      heroImage="/images/Projects/Karamunsing/k2.jpg"
      heroAlt="Karamunsing Interchange System"
      generalInfo={[
        { label: "Client", value: "DBKK / Government of Sabah" },
        { label: "Location", value: "Karamunsing, Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Interchange and urban road network planning",
        },
        {
          label: "Sector",
          value: "Traffic, road safety, civil engineering, and urban transport planning",
        },
        {
          label: "Scope",
          value:
            "Road network planning, design review, and road safety audit work for the Karamunsing Interchange System in Kota Kinabalu.",
        },
      ]}
      overview="The Karamunsing Interchange System supports urban transport movement and road network performance within one of Kota Kinabalu's busiest city areas."
      storyTitle="Improving a complex city road network"
      storyParagraphs={[
        "The Karamunsing area serves commercial, residential, and through-traffic movements within the Kota Kinabalu urban road system.",
        "The project involved road network planning and design review to improve traffic performance, safety, and integration with surrounding city infrastructure.",
        "Perdana Jurutera Perunding's involvement reflects capability in traffic engineering, interchange planning, road safety audit, and practical civil infrastructure review.",
      ]}
      storyImage="/images/Projects/Karamunsing/image_059.jpg"
      storyImageAlt="Karamunsing interchange road network"
      keyFeatures={[
        {
          title: "Interchange planning",
          description:
            "Planning and review of interchange arrangements within a constrained urban road network.",
        },
        {
          title: "Road safety review",
          description:
            "Road safety audit and design review support to improve road user safety.",
        },
        {
          title: "Traffic performance",
          description:
            "Review of movement patterns, junction operation, and traffic distribution.",
        },
        {
          title: "Urban coordination",
          description:
            "Coordination of road network outcomes with surrounding commercial and city infrastructure.",
        },
      ]}
      benefits={[
        {
          title: "Improved road operation",
          description:
            "Supports better traffic flow and movement through a busy city corridor.",
        },
        {
          title: "Safer network design",
          description:
            "Road safety review supports clearer and safer road user movement.",
        },
        {
          title: "Better city access",
          description:
            "Improves integration between major roads, commercial areas, and surrounding city districts.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Karamunsing interchange project visual"
      locationTitle="Karamunsing, Kota Kinabalu"
      locationDescription="The project is located around the Karamunsing area in Kota Kinabalu, Sabah."
      mapQuery="Karamunsing, Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
