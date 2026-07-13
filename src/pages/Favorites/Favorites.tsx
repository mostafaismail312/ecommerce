import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Favorites() {
  return (
    <>
      <Breadcrumb
        title="Favorites"
        description="Your favorite products in one place"
        items={[
          { label: "Home", path: "/" },
          { label: "Favorites" },
        ]}
      />
    </>
  )
}
