import ProjectDetailPage from "../../../components/ProjectDetailPage";

const galleryImages = [
  "/images/Projects/Donggongon/Artis Impression/D3.png",
  "/images/Projects/Donggongon/Artis Impression/D4.png",
  "/images/Projects/Donggongon/Artis Impression/D5.png",
  "/images/Projects/Donggongon/Artis Impression/D6.png",
  "/images/Projects/Donggongon/Artis Impression/D7.png",
  "/images/Projects/Donggongon/D8.jpg",
  "/images/Projects/Donggongon/D9.jpg",
  "/images/Projects/Donggongon/Jalan Doggongon Layout.jpg",
];

export default function Page() {
  return (
    <ProjectDetailPage
      title="Jalan Donggongon Infrastructure Upgrades"
      subtitle="Major road and infrastructure upgrades supporting long-term connectivity, drainage performance, and public infrastructure delivery in Penampang, Sabah."
      heroImage="/images/Projects/Donggongon/Artis Impression/D3.png"
      heroAlt="Jalan Donggongon infrastructure upgrades"
      generalInfo={[
        { label: "Location", value: "Jalan Donggongon, Penampang, Sabah" },
        { label: "Project Type", value: "Road and infrastructure upgrade works" },
        { label: "Sector", value: "Civil infrastructure" },
        { label: "Stage", value: "Infrastructure delivery and upgrade support" },
        {
          label: "Scope",
          value:
            "Road upgrading, drainage coordination, utility interface, and public infrastructure improvements for the Jalan Donggongon corridor.",
        },
      ]}
      overview="The Jalan Donggongon Infrastructure Upgrades project supports improved road serviceability, drainage performance, and local connectivity in Penampang."
      storyTitle="Improving a key Penampang road corridor"
      storyParagraphs={[
        "Jalan Donggongon is an important local corridor supporting community, commercial, and through movement around Penampang.",
        "Projects of this nature require coordination across roadworks, drainage, utilities, traffic staging, and surrounding development constraints.",
        "Perdana Jurutera Perunding's involvement reflects capability in practical civil infrastructure planning, road upgrade support, drainage coordination, and delivery-focused engineering.",
      ]}
      storyImage="/images/Projects/Donggongon/Jalan Doggongon Layout.jpg"
      storyImageAlt="Jalan Donggongon road layout"
      keyFeatures={[
        {
          title: "Road corridor upgrade",
          description:
            "Infrastructure improvements supporting smoother and more reliable movement along Jalan Donggongon.",
        },
        {
          title: "Drainage coordination",
          description:
            "Stormwater and drainage considerations integrated with road improvement works.",
        },
        {
          title: "Utility interface",
          description:
            "Coordination around utilities and existing infrastructure within an active corridor.",
        },
        {
          title: "Public infrastructure",
          description:
            "Works supporting long-term usability, safety, and local access for road users.",
        },
      ]}
      benefits={[
        {
          title: "Improved connectivity",
          description:
            "Supports better local and through movement around Donggongon and Penampang.",
        },
        {
          title: "Better serviceability",
          description:
            "Improves the durability, usefulness, and planning quality of infrastructure works over time.",
        },
        {
          title: "Safer corridor",
          description:
            "Supports clearer road operation and more practical public infrastructure delivery.",
        },
      ]}
      galleryImages={galleryImages}
      galleryAlt="Jalan Donggongon infrastructure upgrade project visual"
      locationTitle="Jalan Donggongon, Penampang"
      locationDescription="The project is located around Jalan Donggongon in Penampang, Sabah."
      mapQuery="Jalan Donggongon, Penampang, Sabah, Malaysia"
    />
  );
}
