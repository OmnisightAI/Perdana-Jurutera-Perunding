import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/kkts2/1.jpg",
  "/images/Projects/kkts2/4mSD9.jpg",
  "/images/Projects/kkts2/Anw7o.jpg",
  "/images/Projects/kkts2/xpSJH.jpg",
  "/images/Projects/kkts2/yOP05.jpg",
  "/images/Projects/kkts2/Forum/DSCF3903.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Kota Kinabalu Traffic Study Phase II (2016–2040)"
      subtitle="Long-term traffic and transport planning study for Kota Kinabalu involving surveys, travel time data, traffic coding, and planning support."
      heroImage="/images/Projects/kkts2/1.jpg"
      heroAlt="Kota Kinabalu Traffic Study Phase II"
      generalInfo={[
        { label: "Client", value: "DBKK / Government of Sabah" },
        { label: "Location", value: "Kota Kinabalu, Sabah" },
        {
          label: "Project Type",
          value: "Traffic study and transport planning",
        },
        { label: "Study Period", value: "2016–2040" },
        {
          label: "Scope",
          value:
            "Long-term traffic study involving field surveys, travel time records, traffic data coding, and transport planning support.",
        },
      ]}
      overview="The Kota Kinabalu Traffic Study Phase II supports long-term transport planning and network management for the city through field data, analysis, and planning inputs."
      storyTitle="Planning Kota Kinabalu's long-term transport network"
      storyParagraphs={[
        "Traffic studies provide the technical basis for understanding current movement patterns, future demand, and infrastructure needs across an urban network.",
        "The study involved field surveys, travel time observations, traffic data coding, and planning support for long-term Kota Kinabalu transport decisions.",
        "Perdana Jurutera Perunding's involvement reflects capability in traffic surveys, transport planning, data management, and practical infrastructure planning for urban growth.",
      ]}
      storyImage="/images/Projects/kkts2/4mSD9.jpg"
      storyImageAlt="Kota Kinabalu traffic study field work"
      keyFeatures={[
        {
          title: "Traffic surveys",
          description:
            "Field traffic surveys supporting evidence-based urban transport planning.",
        },
        {
          title: "Movement data",
          description:
            "Travel and movement information used to understand network demand and traffic patterns.",
        },
        {
          title: "Travel time records",
          description:
            "Travel time observations supporting corridor performance assessment.",
        },
        {
          title: "Planning support",
          description:
            "Data coding and transport planning inputs supporting long-term network decisions.",
        },
      ]}
      benefits={[
        {
          title: "Better planning evidence",
          description:
            "Supports transport decisions based on observed movement and survey data.",
        },
        {
          title: "Long-term network view",
          description:
            "Provides planning support for Kota Kinabalu's future growth and transport needs.",
        },
        {
          title: "Improved investment clarity",
          description:
            "Helps prioritise infrastructure planning and traffic improvement strategies.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Kota Kinabalu Traffic Study Phase II project visual"
      locationTitle="Kota Kinabalu, Sabah"
      locationDescription="The study covers the Kota Kinabalu urban road network and surrounding transport corridors."
      mapQuery="Kota Kinabalu, Sabah, Malaysia"
    />
  );
}
