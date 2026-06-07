import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Schools/tcMxS (1).jpg",
  "/images/Projects/Schools/20130904_094516.jpg",
  "/images/Projects/Schools/kVtKB.jpg",
  "/images/Projects/Schools/lhNGC.jpg",
  "/images/Projects/Schools/qG1fJ.jpg",
  "/images/Projects/Schools/ongoing construction/block akademik 2b.JPG",
  "/images/Projects/Schools/ongoing construction/block pentadbiran.JPG",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Schools & Institutional Buildings"
      subtitle="Civil and structural engineering support for school and institutional building projects across Sabah."
      heroImage="/images/Projects/Schools/tcMxS (1).jpg"
      heroAlt="Schools and institutional buildings"
      generalInfo={[
        { label: "Client", value: "Public sector clients" },
        { label: "Location", value: "Sabah" },
        {
          label: "Project Type",
          value: "School and institutional infrastructure",
        },
        {
          label: "Sector",
          value: "Civil, structural, building, and infrastructure engineering",
        },
        {
          label: "Scope",
          value:
            "Civil and structural engineering support for academic blocks, administration buildings, staff housing, walkways, and related facilities.",
        },
      ]}
      overview="This project portfolio supports institutional infrastructure through civil, structural, and construction-phase engineering services."
      storyTitle="Supporting institutional infrastructure"
      storyParagraphs={[
        "Institutional building projects require practical engineering support across structures, access, drainage, and construction coordination.",
        "The portfolio includes academic blocks, administration buildings, staff housing, walkways, staircases, and supporting site facilities.",
        "Perdana Jurutera Perunding's involvement reflects capability in civil and structural design, construction coordination, and public infrastructure delivery across Sabah.",
      ]}
      storyImage="/images/Projects/Schools/ongoing construction/block akademik 2b.JPG"
      storyImageAlt="Institutional building construction works"
      keyFeatures={[
        {
          title: "Building structures",
          description:
            "Civil and structural support for academic, administration, residential, and support buildings.",
        },
        {
          title: "Construction coordination",
          description:
            "Site engineering support for construction sequencing and practical delivery.",
        },
        {
          title: "Site infrastructure",
          description:
            "Support facilities including walkways, access, drainage, and services coordination.",
        },
        {
          title: "Public sector delivery",
          description:
            "Engineering services supporting institutional infrastructure for long-term use.",
        },
      ]}
      benefits={[
        {
          title: "Better facilities",
          description:
            "Supports delivery of functional and durable institutional buildings.",
        },
        {
          title: "Reliable structures",
          description:
            "Civil and structural engineering supports safe, practical, and serviceable buildings.",
        },
        {
          title: "Long-term value",
          description:
            "Institutional infrastructure provides durable public asset value for local communities.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Schools and institutional buildings project visual"
      locationTitle="Sabah"
      locationDescription="The portfolio includes school and institutional building projects across Sabah."
      mapQuery="Sabah, Malaysia"
    />
  );
}
